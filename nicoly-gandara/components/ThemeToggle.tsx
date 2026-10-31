"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "./icons";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  useEffect(() => { setTheme((document.documentElement.dataset.theme as Theme) || "dark"); }, []);

  function toggle(e: React.MouseEvent) {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const apply = () => { document.documentElement.dataset.theme = next; localStorage.setItem("tema", next); setTheme(next); };
    // Revelação circular a partir do botão (View Transitions API), com fallback
    const d = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
    if (!d.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return apply();
    const x = e.clientX, y = e.clientY;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    d.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  }

  const label = theme === "light" ? "Ativar modo escuro" : "Ativar modo claro";
  return (
    <motion.button className="theme-btn" onClick={toggle} aria-label={label} title={label}
      whileHover={{ rotate: 12, scale: 1.06 }} whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={theme ?? "x"} initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.3 }} style={{ display: "grid" }}>
          {theme === "light" ? <Sun /> : <Moon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
