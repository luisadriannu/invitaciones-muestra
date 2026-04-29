import { useEffect, useState } from "react";

const petals = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3) % 100}%`,
  top: `${(i * 11 + 4) % 92}%`,
  animationDelay: `${(i * 0.35) % 2}s`,
  animationDuration: `${2 + (i % 3)}s`,
  opacity: 0.12 + (i % 5) * 0.06,
  fontSize: `${1.1 + (i % 3) * 0.5}rem`,
}));

export default function MothersDay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-fuchsia-900 relative overflow-hidden flex flex-col items-center justify-center px-6">
      {/* Pétalos de fondo */}
      {petals.map((p, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none animate-bounce"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            opacity: p.opacity,
            fontSize: p.fontSize,
          }}
        >
          🌸
        </div>
      ))}

      {/* Tarjeta */}
      <div
        className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/25 rounded-3xl p-8 shadow-2xl text-center transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        }}
      >
        {/* Icono */}
        <div className="text-6xl mb-5 animate-pulse">💐</div>

        {/* Fecha */}
        <p className="text-pink-300 text-xs tracking-widest uppercase mb-3">
          10 de Mayo · Día de las Madres
        </p>

        {/* Título */}
        <h1 className="text-3xl font-bold text-white mb-5 leading-snug">
          Feliz Día,{" "}
          <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent">
            Mamá
          </span>{" "}
          💖
        </h1>

        {/* Separador */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-5" />

        {/* Mensaje */}
        <p className="text-white/85 text-sm leading-relaxed mb-4">
          Gracias por cada abrazo que curó mis heridas, por cada palabra que
          iluminó mi camino y por cada sacrificio que hiciste en silencio.
        </p>
        <p className="text-white/85 text-sm leading-relaxed mb-4">
          Eres mi primer hogar, mi mayor ejemplo y el amor más puro que he
          conocido. Todo lo que soy, te lo debo a ti.
        </p>
        <p className="text-white/90 text-sm font-medium leading-relaxed">
          Hoy y siempre, celebro el regalo más grande de mi vida:{" "}
          <span className="text-pink-300">tenerte como mamá.</span>
        </p>

        {/* Separador */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mt-6 mb-4" />

        <p className="text-white/50 text-xs">Con todo mi amor ❤️</p>
      </div>

      {/* Volver */}
      <a
        href="/"
        className="relative z-10 mt-8 text-pink-300 text-sm underline underline-offset-2 hover:text-pink-200 transition-colors"
      >
        ← Ver más invitaciones
      </a>
    </div>
  );
}
