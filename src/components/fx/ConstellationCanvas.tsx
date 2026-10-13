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

const LINK_DISTANCE = 140;
const MOUSE_RADIUS = 180;

// Drifting node network that links nearby points and bends towards the
// cursor. Renders a single still frame for prefers-reduced-motion and pauses
// while the canvas is off screen.
export default function ConstellationCanvas({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = prefersReducedMotion();
    // Per-particle shadow blur is the costliest part of a frame; phones
    // can't afford it at 60 fps.
    const glow = !window.matchMedia("(hover: none), (max-width: 767px)").matches;
    const mouse = { x: -9999, y: -9999, active: false };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(110, (width * height) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        hue: 185 + Math.random() * 45,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!reduced) {
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
          // keep a minimum drift so the field never freezes
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
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.35;
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 90%, 60%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (mouse.active) {
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

      for (const p of particles) {
        ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, 0.9)`;
        if (glow) {
          ctx.shadowColor = `hsla(${p.hue}, 95%, 60%, 0.8)`;
          ctx.shadowBlur = 8;
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

    resize();
    if (reduced) {
      draw();
    } else {
      frame = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame && !reduced) frame = requestAnimationFrame(loop);
    });
    observer.observe(canvas);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
