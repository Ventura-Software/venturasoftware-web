import { RefObject, useEffect, useLayoutEffect, useState } from "react";

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function isElementInView(
  el: Element,
  { threshold = 0.15, rootMargin = "0px 0px -8% 0px" } = {},
) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;

  // Parse a simple "top right bottom left" rootMargin like the IO API.
  const parts = rootMargin.trim().split(/\s+/);
  const toPx = (value: string, base: number) => {
    if (value.endsWith("%")) return (parseFloat(value) / 100) * base;
    return parseFloat(value) || 0;
  };
  const top = toPx(parts[0] || "0px", vh);
  const right = toPx(parts[1] || parts[0] || "0px", vw);
  const bottom = toPx(parts[2] || parts[0] || "0px", vh);
  const left = toPx(parts[3] || parts[1] || parts[0] || "0px", vw);

  const visibleTop = 0 - top;
  const visibleLeft = 0 - left;
  const visibleBottom = vh + bottom;
  const visibleRight = vw + right;

  const overlapX =
    Math.min(rect.right, visibleRight) - Math.max(rect.left, visibleLeft);
  const overlapY =
    Math.min(rect.bottom, visibleBottom) - Math.max(rect.top, visibleTop);
  if (overlapX <= 0 || overlapY <= 0) return false;

  const area = Math.max(rect.width * rect.height, 1);
  return overlapX * overlapY / area >= threshold;
}

// True once the element has entered the viewport (it stays true).
export function useInView<T extends Element>(
  ref: RefObject<T>,
  { threshold = 0.05, rootMargin = "0px 0px 12% 0px" } = {},
) {
  const [inView, setInView] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    // Resolve above-the-fold content before the browser paints so sections
    // never sit at opacity:0 waiting on a busy main thread.
    if (isElementInView(el, { threshold, rootMargin })) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, inView, threshold, rootMargin]);

  return inView;
}

// Id of the section currently crossing the middle of the viewport.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    key.split(",").forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
}

// Live clock that re-renders every `intervalMs`.
export function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}
