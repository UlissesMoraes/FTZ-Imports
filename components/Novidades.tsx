"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const DURATION = 5000;

interface Highlight {
  emoji: string;
  title: string;
  description: string;
  tag: string;
  gradient: string;
}

const highlights: Highlight[] = [
  {
    emoji: "📱",
    title: "iPhone 16 chegou",
    description:
      "A nova linha iPhone 16 já está disponível na FTZ. Confira modelos, cores e as melhores condições de pagamento.",
    tag: "Novidade",
    gradient: "from-navy-900 via-navy-800 to-graphite-900",
  },
  {
    emoji: "🏆",
    title: "Recebemos a Rainha da Oktoberfest",
    description:
      "A escolha da realeza para comprar o próximo Apple é a FTZ Imports, em Blumenau.",
    tag: "Destaque",
    gradient: "from-graphite-900 via-graphite-800 to-navy-900",
  },
  {
    emoji: "🔧",
    title: "Diagnóstico gratuito",
    description:
      "Troca de tela e bateria com agilidade. Orçamento transparente e iPhone reserva durante o reparo.",
    tag: "Assistência",
    gradient: "from-navy-800 via-graphite-900 to-graphite-800",
  },
];

export default function Novidades() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % highlights.length);
      setProgressKey((k) => k + 1);
    }, DURATION);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i: number) => {
    setActive(i);
    setProgressKey((k) => k + 1);
  };

  const h = highlights[active];

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
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className={`relative flex min-h-[400px] md:min-h-[520px] w-full flex-col justify-end bg-gradient-to-br ${h.gradient} p-8 sm:p-12 md:p-16`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,87,178,0.25),transparent_55%)]" />
                <div className="relative">
                  <span className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm">
                    {h.tag}
                  </span>
                  <div className="mb-4 text-6xl md:text-7xl">{h.emoji}</div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white"
                  >
                    {h.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-graphite-200"
                  >
                    {h.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bars */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {highlights.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Novidade ${i + 1}`}
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
              {i === active && paused && (
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-white"
                  style={{ width: "50%" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
