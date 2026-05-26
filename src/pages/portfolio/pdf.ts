// PDF generation for the portfolio page. Loads html2canvas + jsPDF lazily from
// a CDN so they don't bloat the main bundle — only paid when the user clicks
// "Download PDF".

declare global {
  interface Window {
    html2canvas?: (
      element: HTMLElement,
      options?: Record<string, unknown>
    ) => Promise<HTMLCanvasElement>;
    jspdf?: { jsPDF: new (options?: Record<string, unknown>) => JsPdfInstance };
    jsPDF?: new (options?: Record<string, unknown>) => JsPdfInstance;
  }
}

interface JsPdfInstance {
  addPage: (format: [number, number], orientation: string) => void;
  addImage: (
    img: string,
    format: string,
    x: number,
    y: number,
    w: number,
    h: number,
    alias?: undefined,
    compression?: string
  ) => void;
  link: (
    x: number,
    y: number,
    w: number,
    h: number,
    options: { url: string }
  ) => void;
  save: (filename: string) => void;
}

const HTML2CANVAS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
const JSPDF_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error(`Failed to load ${src}`))
      );
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function ensureLibraries() {
  await Promise.all([loadScript(HTML2CANVAS_URL), loadScript(JSPDF_URL)]);
  const html2canvasFn = window.html2canvas;
  const jsPDFCtor = window.jspdf?.jsPDF || window.jsPDF;
  if (!html2canvasFn || !jsPDFCtor) {
    throw new Error("PDF libraries failed to load");
  }
  return { html2canvasFn, jsPDFCtor };
}

export async function generatePortfolioPdf(pdfRoot: HTMLElement) {
  const { html2canvasFn, jsPDFCtor } = await ensureLibraries();

  const pages = pdfRoot.querySelectorAll<HTMLElement>(".page");
  if (!pages.length) {
    throw new Error("No PDF pages rendered");
  }

  const pdf = new jsPDFCtor({
    unit: "px",
    format: [794, 1123],
    orientation: "portrait",
    hotfixes: ["px_scaling"],
  });

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    await new Promise((r) => requestAnimationFrame(r));
    const canvas = await html2canvasFn(page, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#0b0d10",
      width: 794,
      height: 1123,
      windowWidth: 794,
      windowHeight: 1123,
      scrollX: 0,
      scrollY: 0,
      logging: false,
    });
    const img = canvas.toDataURL("image/jpeg", 0.95);
    if (i > 0) pdf.addPage([794, 1123], "portrait");
    pdf.addImage(img, "JPEG", 0, 0, 794, 1123, undefined, "FAST");

    // Add clickable link annotations on top of the rasterized image.
    const pageRect = page.getBoundingClientRect();
    const links = page.querySelectorAll<HTMLAnchorElement>("a.link[href]");
    links.forEach((a) => {
      const r = a.getBoundingClientRect();
      const x = r.left - pageRect.left;
      const y = r.top - pageRect.top;
      pdf.link(x, y, r.width, r.height, { url: a.href });
    });
  }

  pdf.save("ventura-portfolio.pdf");
}
