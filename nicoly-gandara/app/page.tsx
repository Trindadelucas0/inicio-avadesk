"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Background from "@/components/Background";
import ThemeToggle from "@/components/ThemeToggle";
import LinkButton from "@/components/LinkButton";
import { Clipboard, Egg, Instagram, WhatsApp } from "@/components/icons";

/* ====== EDITE AQUI os dados e links ====== */
const PERFIL = {
  nome: "Nicoly Gandara",
  cargo: "Personal Trainer",
  usuario: "@nicoly_gandara",
  instagram: "https://www.instagram.com/nicoly_gandara",
  ficha: "https://forms.gle/LTi5iaRzXkcUdBZa6",
  ovos: "https://wa.me/553899607068?text=" + encodeURIComponent("Olá! Vim pelo link da Nicoly e quero pedir ovos."),
};

const LINKS = [
  { label: "Preencher ficha de avaliação", href: PERFIL.ficha, icon: <Clipboard />, aria: "Preencher ficha de avaliação (abre em nova aba)", primary: true },
  { label: "Instagram", href: PERFIL.instagram, icon: <Instagram />, aria: "Instagram @nicoly_gandara (abre em nova aba)" },
  { label: "Pedir ovos", href: PERFIL.ovos, icon: <Egg />, aria: "Pedir ovos pelo WhatsApp, parceria da Nicoly (abre em nova aba)" },
];

const SOCIAIS = [
  { href: PERFIL.instagram, icon: <Instagram />, aria: "Instagram" },
  { href: PERFIL.ovos, icon: <WhatsApp />, aria: "WhatsApp — pedir ovos" },
  { href: PERFIL.ficha, icon: <Clipboard />, aria: "Ficha de avaliação" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.45 } } };
const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const } } };

function Typing({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setN(text.length);
    const id = setInterval(() => setN((v) => (v >= text.length ? (clearInterval(id), v) : v + 1)), 55);
    return () => clearInterval(id);
  }, [text]);
  return <span className="typing" aria-label={text}><span aria-hidden>{text.slice(0, n)}</span></span>;
}

export default function Home() {
  return (
    <>
      <Background />
      <ThemeToggle />
      <main style={{ position: "relative", zIndex: 1, minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", padding: "72px 14px 28px" }}>
        <motion.div className="card" style={{ maxWidth: 420 }}
          initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <span className="corner tl" /><span className="corner tr" /><span className="corner bl" /><span className="corner br" />

          <motion.header variants={container} initial="hidden" animate="show" style={{ textAlign: "center", marginBottom: 26 }}>
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.6, rotate: -20 }, show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 140, damping: 14 } } }}
              className="avatar" whileHover={{ scale: 1.06 }}>
              <div className="avatar-inner" style={{ padding: 0, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/foto.jpg" alt="Foto de Nicoly Gandara" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", display: "block" }} />
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} className="name">{PERFIL.nome}</motion.h1>
            <motion.p variants={fadeUp} className="role"><b><Typing text={PERFIL.cargo} /></b></motion.p>
            <motion.a variants={fadeUp} className="pill" href={PERFIL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram @nicoly_gandara">
              <span className="grad-text">{PERFIL.usuario}</span> <Instagram />
            </motion.a>
          </motion.header>

          <motion.ul variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.75 } } }} initial="hidden" animate="show"
            style={{ display: "flex", flexDirection: "column", gap: 12, padding: 0, margin: "0 0 28px" }} aria-label="Links">
            {LINKS.map((l) => <LinkButton key={l.label} {...l} />)}
          </motion.ul>

          <motion.nav aria-label="Redes sociais" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
            style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 22 }}>
            {SOCIAIS.map((s, i) => (
              <motion.a key={s.aria} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.aria} className="social"
                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 + i * 0.08, type: "spring", stiffness: 260, damping: 15 }}
                whileHover={{ y: -4, scale: 1.12, rotate: 6 }} whileTap={{ scale: 0.92 }}>
                {s.icon}
              </motion.a>
            ))}
          </motion.nav>

          <motion.footer className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
            <div>© 2026 <span className="grad-text">Nicoly Gandara</span></div>
            <div className="credit">feito por <a href="https://avadesk.com.br" target="_blank" rel="noopener noreferrer">Avadesk</a></div>
          </motion.footer>
        </motion.div>
      </main>
    </>
  );
}
