"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const DURATION = 6000;

const ftz = (n?: number) =>
  `/produtos/${encodeURIComponent(
    `✨ Por que nossos clientes amam a FTZPorque aqui o atendimento vai muito além de vender Apple-🍎${n != null ? `  (${n})` : " "}.jpg`
  )}`;

interface Slide {
  imagem: string;
  tag: string;
  titulo: string;
  descricao: string;
}

const slides: Slide[] = [
  {
    imagem: ftz(1),
    tag: "Novidade",
    titulo: "iPhone 17 chegou na FTZ",
    descricao:
      "A nova linha iPhone 17 já está disponível. Confira modelos, cores e as melhores condições de pagamento em Blumenau.",
  },
  {
    imagem: ftz(2),
    tag: "Destaque",
    titulo: "Recebemos a Rainha da Oktoberfest",
    descricao:
      "A escolha da realeza para comprar o próximo Apple é a FTZ Imports, em Blumenau. A cidade mais alemã do Brasil escolheu a FTZ.",
  },
  {
    imagem: ftz(4),
    tag: "Assistência",
    titulo: "Diagnóstico gratuito",
    descricao:
      "Troca de tela e bateria com agilidade. Orçamento transparente e iPhone reserva durante todo o período de reparo.",
  },
];

export default function Novidades() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, DURATION);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i: number) => {
    setActive(i);
    setProgressKey((k) => k + 1);
  };

  const s = slides[active];

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
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex min-h-[440px] md:min-h-[560px] items-end"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.imagem}
                alt={s.titulo}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="relative z-10 p-8 sm:p-12 md:p-14"
              >
                <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm">
                  {s.tag}
                </span>
                <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white">
                  {s.titulo}
                </h3>
                <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-graphite-200">
                  {s.descricao}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Barras de progresso */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
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
