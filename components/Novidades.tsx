"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

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

function HighlightCard({
  highlight,
  index,
}: {
  highlight: Highlight;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="overflow-hidden rounded-[32px] shadow-2xl"
    >
      <div
        className={`relative flex aspect-[4/5] w-full flex-col justify-end bg-gradient-to-br ${highlight.gradient} p-8 sm:p-10`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,87,178,0.2),transparent_60%)]" />
        <div className="relative">
          <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm">
            {highlight.tag}
          </span>
          <div className="mb-4 text-5xl">{highlight.emoji}</div>
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-white"
          >
            {highlight.title}
          </motion.h3>
          <p className="mt-3 max-w-xs text-base leading-relaxed text-graphite-200">
            {highlight.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Novidades() {
  return (
    <section className="bg-graphite-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          theme="dark"
          eyebrow="Novidades"
          title="Veja o que está rolando na FTZ"
          description="Bastidores, lançamentos e momentos especiais direto da nossa loja em Blumenau."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={highlight.title}
              highlight={highlight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
