"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const DURATION = 7000;

const OKTOBERFEST_VIDEO = `/loja/${encodeURIComponent(
  "Recebemos a rainha da Oktoberfest na loja! 👸🏼🇩🇪A FTZ é a escolha da realeza para comprar seu.mp4"
)}`;

// ── Slide 1: iPhone 17 Pro — aparece em pé, deita, nome revela ──────────────
// Fase 1 (0.1-0.7s): iPhone entra de baixo em pé (y+opacity)
// Fase 2 (0.9-1.9s): iPhone deita (rotate -90°)
// Fase 3 (2.1-2.7s): texto "iPhone 17 Pro" aparece
function IPhone17Slide() {
  return (
    <div className="relative flex min-h-[500px] md:min-h-[600px] flex-col items-center justify-center overflow-hidden bg-black px-8 py-20">
      {/* Glow de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,87,178,0.22),transparent_65%)]" />

      {/* iPhone: entra em pé depois deita */}
      <motion.div
        initial={{ opacity: 0, y: 100, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -90 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.1 },
          y: { duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
          rotate: { duration: 1.0, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
        style={{ transformOrigin: "center center" }}
        className="relative z-10"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/novidades/hero_endframe__gb7f6nb06rau_xlarge_2x.jpg"
          alt="iPhone 17 Pro"
          className="h-64 md:h-80 w-auto object-contain drop-shadow-[0_24px_60px_rgba(52,87,178,0.55)]"
        />
      </motion.div>

      {/* Texto aparece após o iPhone deitar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 2.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 mt-10 text-center"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-graphite-400">
          Disponível na FTZ Imports
        </p>
        <h3 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-white">
          iPhone 17 Pro
        </h3>
        <p className="mt-3 text-lg text-graphite-300">
          A nova geração chegou em Blumenau.
        </p>
      </motion.div>
    </div>
  );
}

// ── Slide 2: Oktoberfest (vídeo) ─────────────────────────────────────────────
function OktoberfestSlide() {
  return (
    <div className="relative flex min-h-[500px] md:min-h-[600px] items-end overflow-hidden bg-black">
      <video
        src={OKTOBERFEST_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 p-8 sm:p-12 md:p-16"
      >
        <span className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm">
          Destaque
        </span>
        <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white">
          Recebemos a Rainha<br className="hidden sm:block" /> da Oktoberfest
        </h3>
        <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-graphite-200">
          A escolha da realeza para comprar o próximo Apple é a FTZ Imports, em Blumenau.
        </p>
      </motion.div>
    </div>
  );
}

// ── Slide 3: Assistência técnica ──────────────────────────────────────────────
function AssistenciaSlide() {
  return (
    <div className="relative flex min-h-[500px] md:min-h-[600px] items-end overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/novidades/highlights_design_endframe__eu8gj0kqlmoi_large_2x.jpg"
        alt="Assistência técnica Apple"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/50 to-graphite-900/10" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 p-8 sm:p-12 md:p-16"
      >
        <span className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm">
          Assistência
        </span>
        <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white">
          Diagnóstico gratuito
        </h3>
        <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-graphite-200">
          Troca de tela e bateria com agilidade. Orçamento transparente e iPhone reserva durante o reparo.
        </p>
      </motion.div>
    </div>
  );
}

const SLIDES = [IPhone17Slide, OktoberfestSlide, AssistenciaSlide];

export default function Novidades() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
      setProgressKey((k) => k + 1);
    }, DURATION);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i: number) => {
    setActive(i);
    setProgressKey((k) => k + 1);
  };

  const SlideComponent = SLIDES[active];

  return (
    <section className="bg-graphite-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          theme="dark"
          eyebrow="Novidades"
          title="Veja o que está rolando na FTZ"
          description="Bastidores, lançamentos e momentos especiais direto da nossa loja em Blumenau."
        />

        <div
          className="relative overflow-hidden rounded-[32px] shadow-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <SlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Barras de progresso */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="relative h-[3px] w-16 overflow-hidden rounded-full bg-white/20 transition-all hover:bg-white/30"
            >
              {i < active && (
                <div className="absolute inset-0 rounded-full bg-white/60" />
              )}
              {i === active && !paused && (
                <motion.div
                  key={progressKey}
                  className="absolute inset-y-0 left-0 rounded-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
