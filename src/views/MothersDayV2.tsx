import { useEffect, useState } from "react";

export default function MothersDayV2() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [1, 2, 3].map((s) =>
      setTimeout(() => setStep(s), s * 500)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-rose-200/40" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-pink-200/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-fuchsia-100/30" />

      {/* Tarjeta */}
      <div className="relative z-10 w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Franja superior decorativa */}
        <div className="h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400" />

        <div className="px-8 py-10 text-center space-y-6">
          {/* Flores */}
          <div
            className="text-5xl transition-all duration-700"
            style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? "scale(1)" : "scale(0.5)" }}
          >
            🌹🌸🌷
          </div>

          {/* Título */}
          <div
            className="transition-all duration-700"
            style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? "translateY(0)" : "translateY(20px)" }}
          >
            <p className="text-rose-400 text-xs tracking-[0.2em] uppercase font-medium mb-1">
              10 de Mayo
            </p>
            <h1 className="text-3xl font-bold text-gray-800 leading-tight">
              Feliz Día de{" "}
              <span className="text-rose-500">las Madres</span>
            </h1>
          </div>

          {/* Separador floral */}
          <div
            className="flex items-center gap-3 transition-all duration-700"
            style={{ opacity: step >= 2 ? 1 : 0 }}
          >
            <div className="flex-1 h-px bg-rose-200" />
            <span className="text-rose-300 text-lg">❀</span>
            <div className="flex-1 h-px bg-rose-200" />
          </div>

          {/* Mensaje */}
          <div
            className="space-y-4 transition-all duration-700"
            style={{ opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? "translateY(0)" : "translateY(20px)" }}
          >
            <p className="text-gray-600 text-sm leading-relaxed">
              Mamá, eres la raíz que me sostiene y las alas que me permiten
              volar. Tu amor incondicional es el regalo más grande que la vida
              me ha dado.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gracias por tu paciencia infinita, por tus manos que siempre
              supieron consolar y por tu corazón que nunca dejó de creer en mí.
            </p>
            <p className="text-rose-500 font-semibold text-sm">
              Hoy te celebro con todo mi amor. 💕
            </p>
          </div>

          {/* Separador floral */}
          <div
            className="flex items-center gap-3 transition-all duration-700"
            style={{ opacity: step >= 3 ? 1 : 0 }}
          >
            <div className="flex-1 h-px bg-rose-200" />
            <span className="text-rose-300 text-lg">❀</span>
            <div className="flex-1 h-px bg-rose-200" />
          </div>

          {/* Firma */}
          <div
            className="transition-all duration-700"
            style={{ opacity: step >= 3 ? 1 : 0, transform: step >= 3 ? "translateY(0)" : "translateY(10px)" }}
          >
            <p className="text-gray-400 text-xs">Con todo mi amor</p>
            <p className="text-gray-700 font-semibold text-base mt-1">Tu hij@ ❤️</p>
          </div>
        </div>

        {/* Franja inferior decorativa */}
        <div className="h-2 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400" />
      </div>

      {/* Volver */}
      <a
        href="/"
        className="relative z-10 mt-8 text-rose-400 text-sm underline underline-offset-2 hover:text-rose-600 transition-colors"
      >
        ← Ver más invitaciones
      </a>
    </div>
  );
}
