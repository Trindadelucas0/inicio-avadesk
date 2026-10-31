"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { Arrow } from "./icons";

/* Botão com tilt 3D + efeito magnético + holofote seguindo o cursor + brilho percorrendo */
export default function LinkButton({ href, label, icon, aria, primary }: { href: string; label: string; icon: ReactNode; aria: string; primary?: boolean }) {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 250, damping: 18 }), sy = useSpring(my, { stiffness: 250, damping: 18 });
  const rotX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const tx = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const ty = useTransform(sy, [-0.5, 0.5], [-4, 4]);

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    mx.set(px - 0.5); my.set(py - 0.5);
    e.currentTarget.style.setProperty("--mx", `${px * 100}%`);
    e.currentTarget.style.setProperty("--my", `${py * 100}%`);
  }
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.li variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 160, damping: 18 } } }}
      style={{ perspective: 700, listStyle: "none" }}>
      <motion.a href={href} target="_blank" rel="noopener noreferrer" aria-label={aria}
        className={`link-btn${primary ? " primary" : ""}`}
        onPointerMove={onMove} onPointerLeave={reset}
        style={{ rotateX: rotX, rotateY: rotY, x: tx, y: ty }}
        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <span className="spot" /><span className="shine" />
        {icon}
        <span>{label}</span>
        <Arrow className="arrow" />
      </motion.a>
    </motion.li>
  );
}
