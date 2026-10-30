"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* Fundo: grade animada + orbes de luz + rede de partículas que reage ao cursor */
export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext("2d")!;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, h = 0, raf = 0; const dpr = Math.min(devicePixelRatio || 1, 2);
    const mouse = { x: -999, y: -999 };
    const resize = () => { w = innerWidth; h = innerHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    resize();
    const n = Math.min(70, Math.floor((w * h) / 14000));
    const pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
    const move = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    addEventListener("resize", resize); addEventListener("pointermove", move);
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const L = document.documentElement.dataset.theme === "light"; const C = L ? "60,66,78" : "255,42,42"; const K = L ? .45 : 1;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h;
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        ctx.fillStyle = `rgba(${C},${(md < 140 ? .9 : .45) * K})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, md < 140 ? 2 : 1.3, 0, 7); ctx.fill();
        if (md < 140) { ctx.strokeStyle = `rgba(${C},${.35 * K * (1 - md / 140)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 115) { ctx.strokeStyle = `rgba(${C},${.14 * K * (1 - d / 115)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); removeEventListener("pointermove", move); };
  }, []);

  return (
    <div aria-hidden>
      <div className="bg-grid" />
      <motion.div className="bg-orb" style={{ width: 420, height: 420, background: "var(--orb-1)", top: -140, left: -120 }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="bg-orb" style={{ width: 360, height: 360, background: "var(--orb-2)", bottom: -120, right: -100 }}
        animate={{ x: [0, -50, 0], y: [0, -60, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
      <div className="scanline" />
      <canvas ref={ref} style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} />
    </div>
  );
}
