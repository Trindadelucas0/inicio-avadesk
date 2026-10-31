import type { Metadata, Viewport } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Nicoly Gandara | Personal Trainer",
  description: "Links oficiais de Nicoly Gandara, personal trainer: ficha de avaliação, Instagram e parceria de ovos.",
  authors: [{ name: "Nicoly Gandara" }],
  openGraph: { type: "profile", locale: "pt_BR", title: "Nicoly Gandara • Personal Trainer", description: "Preencha sua ficha de avaliação e comece seu treino." },
  twitter: { card: "summary" },
};
export const viewport: Viewport = { themeColor: "#070709", width: "device-width", initialScale: 1 };

// Aplica o tema antes da pintura (evita "flash"): localStorage > prefers-color-scheme
const themeScript = `(function(){try{var t=localStorage.getItem('tema');if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark'}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning className={`${poppins.variable} ${mono.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
