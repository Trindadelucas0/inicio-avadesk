import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;
const s = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const Instagram = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>);
export const WhatsApp = (p: P) => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" /></svg>);
export const Code = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" /></svg>);
export const News = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><path d="M4 4h13v16H6a2 2 0 0 1-2-2zM17 8h3v10a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h3" /></svg>);
export const Globe = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>);
export const Arrow = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const Sun = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
export const Moon = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>);
export const LinkIco = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" /></svg>);
export const Egg = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 2.5C8.2 2.5 5 8.6 5 13.5a7 7 0 0 0 14 0C19 8.6 15.8 2.5 12 2.5z" /><path d="M9 14a3 3 0 0 0 3 3" /></svg>);
export const Clipboard = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3" /></svg>);
export const Dumbbell = (p: P) => (<svg viewBox="0 0 24 24" {...s} {...p}><path d="M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12" /></svg>);
