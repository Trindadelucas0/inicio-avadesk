"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Background from "@/components/Background";
import ThemeToggle from "@/components/ThemeToggle";
import LinkButton from "@/components/LinkButton";
import { Code, Globe, Instagram, LinkIco, News, WhatsApp } from "@/components/icons";

/* ====== EDITE AQUI os dados e links ====== */
const PERFIL = {
  nome: "Lucas Rodrigues",
  cargo: "Desenvolvedor Full-Stack",
  usuario: "@luca.srodr1gu3s",
  instagram: "https://instagram.com/luca.srodr1gu3s",
  whatsapp: "https://wa.me/5538998100827?text=" + encodeURIComponent("Olá, Lucas! Vim pelo seu link e gostaria de falar sobre um projeto."),
};

const LINKS = [
  { label: "WhatsApp", href: PERFIL.whatsapp, icon: <WhatsApp />, aria: "Conversar com Lucas no WhatsApp (abre em nova aba)", primary: true },
  { label: "Instagram", href: PERFIL.instagram, icon: <Instagram />, aria: "Instagram @luca.srodr1gu3s (abre em nova aba)" },
  { label: "Serviços", href: "https://avadesk.com.br/servicos", icon: <Code />, aria: "Serviços da Avadesk (abre em nova aba)" },
  { label: "Notícias", href: "https://blog.avadesk.com.br/", icon: <News />, aria: "Notícias — blog da Avadesk (abre em nova aba)" },
  { label: "Site Avadesk", href: "https://avadesk.com.br", icon: <Globe />, aria: "Site da Avadesk (abre em nova aba)" },
];

const SOCIAIS = [
  { href: PERFIL.instagram, icon: <Instagram />, aria: "Instagram" },
  { href: PERFIL.whatsapp, icon: <WhatsApp />, aria: "WhatsApp" },
  { href: "https://blog.avadesk.com.br/", icon: <News />, aria: "Blog de notícias" },
  { href: "https://avadesk.com.br", icon: <Globe />, aria: "Site Avadesk" },
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
              {/* ===== FOTO =====
                  Para usar sua foto: coloque o arquivo em /public/foto.jpg e troque
                  a linha "LR" abaixo por:
                  <img src="/foto.jpg" alt="Foto de Lucas Rodrigues" />            */}
              <div className="avatar-inner" style={{ padding: 0, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/foto.jpg" alt="Foto de Lucas Rodrigues" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%", display: "block" }} />
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} className="name">{PERFIL.nome}</motion.h1>
            <motion.p variants={fadeUp} className="role"><Typing text={PERFIL.cargo} /> • <b>Avadesk</b></motion.p>
            <motion.a variants={fadeUp} className="pill" href={PERFIL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram @luca.srodr1gu3s">
              {PERFIL.usuario} <Instagram />
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
            © {new Date().getFullYear()} <a href="https://avadesk.com.br" target="_blank" rel="noopener noreferrer">AVADESK</a> · Brasília-DF{" "}
            <LinkIco style={{ width: 11, height: 11, verticalAlign: "-1px", color: "var(--acc-text)" }} />
          </motion.footer>
        </motion.div>
      </main>
    </>
  );
}
