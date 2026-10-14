import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./hooks";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
}

const LINK_DISTANCE_DESKTOP = 140;
const LINK_DISTANCE_MOBILE = 90;
const MOUSE_RADIUS = 180;

function isConstrainedDevice() {
  return window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
}

// Drifting node network that links nearby points and bends towards the
// cursor. On mobile / coarse-pointer devices we paint a single light frame
// so the main thread stays free for first paint and scroll reveals.
export default function ConstellationCanvas({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;

    const reduced = prefersReducedMotion();
    const constrained = isConstrainedDevice();
    const animate = !reduced && !constrained;
    const mouse = { x: -9999, y: -9999, active: false };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let cancelled = false;

    const resize = () => {
      const dpr = constrained
        ? 1
        : Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = constrained ? 52000 : 14000;
      const cap = constrained ? 28 : 110;
      const count = Math.round(Math.min(cap, (width * height) / density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * (constrained ? 1.2 : 1.6) + 0.5,
        hue: 185 + Math.random() * 45,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDistance = constrained
        ? LINK_DISTANCE_MOBILE
        : LINK_DISTANCE_DESKTOP;

      if (animate) {
        for (const p of particles) {
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);
            if (dist < MOUSE_RADIUS && dist > 0.1) {
              const force = (1 - dist / MOUSE_RADIUS) * 0.035;
              p.vx += dx * force * 0.05;
              p.vy += dy * force * 0.05;
            }
          }
          p.vx *= 0.985;
          p.vy *= 0.985;
          if (Math.abs(p.vx) < 0.05) p.vx += (Math.random() - 0.5) * 0.04;
          if (Math.abs(p.vy) < 0.05) p.vy += (Math.random() - 0.5) * 0.04;
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < linkDistance) {
            const alpha = (1 - dist / linkDistance) * (constrained ? 0.22 : 0.35);
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 90%, 60%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (animate && mouse.active) {
          const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (dist < MOUSE_RADIUS) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dist / MOUSE_RADIUS) * 0.6})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      if (!constrained) {
        ctx.shadowBlur = 8;
      }
      for (const p of particles) {
        ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, 0.9)`;
        if (!constrained) {
          ctx.shadowColor = `hsla(${p.hue}, 95%, 60%, 0.8)`;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const loop = () => {
      draw();
      frame = visible ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.y >= 0 && mouse.x <= width && mouse.y <= height;
    };
    const onLeave = () => {
      mouse.active = false;
    };

    // Defer work so first paint / IntersectionObservers are not starved.
    const startId = window.setTimeout(() => {
      if (cancelled) return;
      resize();
      draw();
      if (animate) {
        frame = requestAnimationFrame(loop);
      }
    }, 0);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && animate && !frame) frame = requestAnimationFrame(loop);
    });
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    if (animate) {
      window.addEventListener("mousemove", onMove);
      document.addEventListener("mouseleave", onLeave);
    }

    return () => {
      cancelled = true;
      window.clearTimeout(startId);
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
