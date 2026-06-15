"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Produto {
  nome: string;
  descricao: string;
  emoji: string;
  gradient: string;
}

const produtos: Produto[] = [
  {
    nome: "iPhone",
    descricao: "Modelos selecionados, com procedência garantida e revisão completa.",
    emoji: "📱",
    gradient: "from-graphite-800 to-graphite-900",
  },
  {
    nome: "MacBook",
    descricao: "Potência e portabilidade para o seu dia a dia, com garantia FTZ.",
    emoji: "💻",
    gradient: "from-navy-800 to-graphite-900",
  },
  {
    nome: "iPad",
    descricao: "Criatividade e produtividade em um design leve e versátil.",
    emoji: "🎨",
    gradient: "from-navy-900 to-navy-800",
  },
  {
    nome: "Apple Watch",
    descricao: "Saúde, conectividade e estilo no seu pulso, todos os dias.",
    emoji: "⌚",
    gradient: "from-graphite-900 to-navy-900",
  },
  {
    nome: "AirPods",
    descricao: "Som premium e conexão perfeita com todo o ecossistema Apple.",
    emoji: "🎵",
    gradient: "from-navy-800 to-graphite-800",
  },
  {
    nome: "Acessórios",
    descricao: "Capas, carregadores e periféricos originais e selecionados.",
    emoji: "🔌",
    gradient: "from-graphite-700 to-graphite-900",
  },
];

const WHATSAPP_BASE = "https://wa.me/5547997927547";
const CARD_GAP = 20;

export default function Produtos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement;
    if (!firstCard) return;
    const cardW = firstCard.offsetWidth + CARD_GAP;
    const idx = Math.round(el.scrollLeft / cardW);
    setActiveIndex(Math.max(0, Math.min(idx, produtos.length - 1)));
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    updateState();
    return () => el.removeEventListener("scroll", updateState);
  }, [updateState]);

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement;
    if (!firstCard) return;
    const cardW = firstCard.offsetWidth + CARD_GAP;
    el.scrollTo({ left: i * cardW, behavior: "smooth" });
  };

  const scroll = (dir: "left" | "right") => {
    scrollTo(activeIndex + (dir === "left" ? -1 : 1));
  };

  return (
    <section
      id="produtos"
      className="bg-graphite-50 py-20 md:py-28 dark:bg-graphite-800 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-graphite-400">
              Catálogo
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-graphite-900 dark:text-white">
              Produtos Apple selecionados
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite-500 dark:text-graphite-300">
              Equipamentos revisados, com garantia e procedência, prontos para
              fazer parte do seu dia a dia.
            </p>
          </div>

          {/* Paddle buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canLeft}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-graphite-200 bg-white text-graphite-700 shadow-sm transition-all hover:bg-graphite-50 disabled:opacity-25 disabled:cursor-not-allowed dark:border-graphite-700 dark:bg-graphite-900 dark:text-graphite-300 dark:hover:bg-graphite-800"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canRight}
              aria-label="Próximo"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-graphite-200 bg-white text-graphite-700 shadow-sm transition-all hover:bg-graphite-50 disabled:opacity-25 disabled:cursor-not-allowed dark:border-graphite-700 dark:bg-graphite-900 dark:text-graphite-300 dark:hover:bg-graphite-800"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex pb-6 -mx-6 px-6"
          style={{
            gap: CARD_GAP,
            overflowX: "auto",
            scrollbarWidth: "none",
            scrollSnapType: "x mandatory",
          }}
        >
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.nome}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="flex-none w-[76vw] sm:w-[320px] lg:w-[340px] overflow-hidden rounded-[28px] bg-white shadow-sm dark:bg-graphite-900"
              style={{ scrollSnapAlign: "start" }}
            >
              <div
                className={`relative flex h-56 flex-col justify-end bg-gradient-to-br ${produto.gradient} p-7`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(52,87,178,0.15),transparent_60%)]" />
                <div className="relative">
                  <div className="mb-2 text-5xl">{produto.emoji}</div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {produto.nome}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-graphite-500 dark:text-graphite-300">
                  {produto.descricao}
                </p>
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `Olá! Gostaria de solicitar uma cotação para: ${produto.nome}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-graphite-200 px-5 py-2.5 text-sm font-medium text-graphite-700 transition-colors hover:bg-graphite-50 dark:border-graphite-700 dark:text-graphite-200 dark:hover:bg-graphite-800"
                >
                  Solicitar Cotação
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="mt-1 flex items-center justify-center gap-2">
          {produtos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Produto ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-graphite-900 dark:bg-white"
                  : "w-2 bg-graphite-300 dark:bg-graphite-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
