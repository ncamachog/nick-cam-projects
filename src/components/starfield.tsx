"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; z: number; hue: number };

/** Warp-speed starfield: stars fly toward the viewer, pointer steers the vanishing point. */
export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hues = [190, 280, 320, 75];
    const COUNT = window.innerWidth < 640 ? 90 : 170;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };

    const make = (): Star => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random(),
      hue: hues[Math.floor(Math.random() * hues.length)],
    });
    const stars: Star[] = Array.from({ length: COUNT }, make);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      cur.x += (target.x - cur.x) * 0.05;
      cur.y += (target.y - cur.y) * 0.05;
      const cx = w / 2 + cur.x * 60;
      const cy = h / 2 + cur.y * 40;
      for (const s of stars) {
        if (!reduce) s.z -= 0.0035;
        if (s.z <= 0.02) Object.assign(s, make(), { z: 1 });
        const k = 1 / s.z;
        const px = cx + s.x * k * (w * 0.18);
        const py = cy + s.y * k * (w * 0.18);
        if (px < -20 || px > w + 20 || py < -20 || py > h + 20) {
          Object.assign(s, make(), { z: 1 });
          continue;
        }
        const size = Math.min(0.4 + (1 - s.z) * 2.2, 2.6);
        const tail = reduce ? 0 : Math.min((1 - s.z) * 26, 22);
        const ang = Math.atan2(py - cy, px - cx);
        ctx.strokeStyle = `hsla(${s.hue} 100% 70% / ${0.15 + (1 - s.z) * 0.85})`;
        ctx.lineWidth = size;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(px - Math.cos(ang) * tail, py - Math.sin(ang) * tail);
        ctx.lineTo(px, py);
        ctx.stroke();
      }
      if (visible && !reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX / w - 0.5;
      target.y = e.clientY / h - 0.5;
    };
    const onVis = () => {
      visible = !document.hidden;
      if (visible && !reduce) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-90"
    />
  );
}
