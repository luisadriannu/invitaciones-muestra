import { useEffect, useState } from "react";

const lines = [
  { text: "para ti,", style: "text-4xl font-light text-stone-400 tracking-widest" },
  { text: "mamá.", style: "text-6xl font-bold text-stone-800 tracking-tight" },
  { text: "─────", style: "text-stone-300 tracking-widest text-lg" },
  {
    text: "Gracias por ser el lugar",
    style: "text-base font-light text-stone-500 leading-relaxed",
  },
  {
    text: "al que siempre quiero volver.",
    style: "text-base font-light text-stone-500 leading-relaxed",
  },
  { text: " ", style: "" },
  {
    text: "Tu amor no necesita palabras,",
    style: "text-base font-light text-stone-500 leading-relaxed",
  },
  {
    text: "pero hoy quiero decírtelo:",
    style: "text-base font-light text-stone-500 leading-relaxed",
  },
  { text: " ", style: "" },
  {
    text: "te amo más de lo que",
    style: "text-lg font-medium text-stone-700",
  },
  {
    text: "cualquier palabra puede decir.",
    style: "text-lg font-medium text-stone-700",
  },
  { text: "─────", style: "text-stone-300 tracking-widest text-lg" },
  {
    text: "Feliz día de las madres",
    style: "text-xs tracking-[0.3em] uppercase text-rose-400 font-medium",
  },
];

/* Flor SVG minimalista de línea */
function Flower({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pétalos */}
      <ellipse cx="40" cy="22" rx="6" ry="14" fill="currentColor" opacity="0.18" />
      <ellipse cx="40" cy="22" rx="6" ry="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <ellipse cx="40" cy="58" rx="6" ry="14" fill="currentColor" opacity="0.18" />
      <ellipse cx="40" cy="58" rx="6" ry="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <ellipse cx="22" cy="40" rx="14" ry="6" fill="currentColor" opacity="0.18" />
      <ellipse cx="22" cy="40" rx="14" ry="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <ellipse cx="58" cy="40" rx="14" ry="6" fill="currentColor" opacity="0.18" />
      <ellipse cx="58" cy="40" rx="14" ry="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Pétalos diagonales */}
      <ellipse cx="27" cy="27" rx="6" ry="13" fill="currentColor" opacity="0.12" transform="rotate(-45 27 27)" />
      <ellipse cx="27" cy="27" rx="6" ry="13" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" transform="rotate(-45 27 27)" />
      <ellipse cx="53" cy="27" rx="6" ry="13" fill="currentColor" opacity="0.12" transform="rotate(45 53 27)" />
      <ellipse cx="53" cy="27" rx="6" ry="13" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" transform="rotate(45 53 27)" />
      <ellipse cx="27" cy="53" rx="6" ry="13" fill="currentColor" opacity="0.12" transform="rotate(45 27 53)" />
      <ellipse cx="27" cy="53" rx="6" ry="13" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" transform="rotate(45 27 53)" />
      <ellipse cx="53" cy="53" rx="6" ry="13" fill="currentColor" opacity="0.12" transform="rotate(-45 53 53)" />
      <ellipse cx="53" cy="53" rx="6" ry="13" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" transform="rotate(-45 53 53)" />
      {/* Centro */}
      <circle cx="40" cy="40" r="7" fill="currentColor" opacity="0.25" />
      <circle cx="40" cy="40" r="7" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* Rama con hojas SVG */
function Branch({ className = "" }: { className?: string }) {
  return (
    <svg
      width="120"
      height="160"
      viewBox="0 0 120 160"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tallo principal */}
      <path d="M60 155 Q55 100 50 40" stroke="currentColor" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
      {/* Hojas */}
      <path d="M50 120 Q30 105 20 90 Q40 92 50 108" fill="currentColor" opacity="0.15" />
      <path d="M50 120 Q30 105 20 90 Q40 92 50 108" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <path d="M52 95 Q72 80 82 65 Q62 67 52 83" fill="currentColor" opacity="0.15" />
      <path d="M52 95 Q72 80 82 65 Q62 67 52 83" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      <path d="M51 70 Q31 55 21 40 Q41 42 51 58" fill="currentColor" opacity="0.15" />
      <path d="M51 70 Q31 55 21 40 Q41 42 51 58" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      {/* Flor pequeña en la punta */}
      <circle cx="50" cy="38" r="5" fill="currentColor" opacity="0.2" />
      <circle cx="50" cy="38" r="5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="50" cy="38" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="44" cy="33" r="3.5" fill="currentColor" opacity="0.15" />
      <circle cx="44" cy="33" r="3.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <circle cx="56" cy="33" r="3.5" fill="currentColor" opacity="0.15" />
      <circle cx="56" cy="33" r="3.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

export default function MothersDayV3() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 400 : 220);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="min-h-screen bg-[#faf9f7] flex flex-col justify-center px-10 py-16 relative overflow-hidden">

      {/* Flor esquina superior derecha */}
      <Flower size={110} className="absolute -top-4 -right-4 text-rose-400 rotate-12" />

      {/* Flor pequeña esquina inferior izquierda */}
      <Flower size={70} className="absolute bottom-10 -left-4 text-rose-300 -rotate-12" />

      {/* Rama esquina superior izquierda */}
      <Branch className="absolute -top-2 -left-2 text-rose-400 -scale-x-100" />

      {/* Rama esquina inferior derecha */}
      <Branch className="absolute -bottom-2 -right-2 text-rose-300 rotate-180" />

      {/* Puntos decorativos dispersos */}
      <div className="absolute top-1/3 right-6 w-1.5 h-1.5 rounded-full bg-rose-200" />
      <div className="absolute top-1/3 right-10 w-1 h-1 rounded-full bg-rose-200" />
      <div className="absolute bottom-1/3 right-8 w-1 h-1 rounded-full bg-rose-200" />

      {/* Línea vertical decorativa izquierda */}
      <div className="absolute left-5 top-16 bottom-16 w-px bg-rose-200" />
      <div className="absolute left-[17px] top-16 w-2 h-2 rounded-full bg-rose-300" />
      <div className="absolute left-[17px] bottom-16 w-2 h-2 rounded-full bg-rose-300" />

      {/* Contenido */}
      <div className="space-y-3 pl-4">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`${line.style} transition-all duration-500`}
            style={{
              opacity: shown > i ? 1 : 0,
              transform: shown > i ? "translateX(0)" : "translateX(-16px)",
            }}
          >
            {line.text}
          </p>
        ))}
      </div>

      {/* Volver */}
      <a
        href="/"
        className="absolute bottom-8 left-10 text-stone-400 text-xs underline underline-offset-2 hover:text-stone-600 transition-colors"
      >
        ← Ver más
      </a>
    </div>
  );
}
