"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Depoimento {
  nome: string;
  titulo: string;
  texto: string;
}

const depoimentos: Depoimento[] = [
  {
    nome: "Marcos Vinícius",
    titulo: "Cliente FTZ",
    texto:
      "Comprei meu iPhone na FTZ e o atendimento foi excelente do começo ao fim. Explicaram tudo sobre a procedência do aparelho e ainda tive suporte depois da compra. Recomendo de olhos fechados.",
  },
  {
    nome: "Carla Fernandes",
    titulo: "Cliente FTZ",
    texto:
      "Levei meu MacBook para troca de bateria e fiquei impressionada com a transparência: me mostraram o problema, o orçamento foi justo e o serviço ficou pronto rápido. Atendimento muito humano.",
  },
  {
    nome: "Rodrigo Almeida",
    titulo: "Cliente FTZ",
    texto:
      "Equipe extremamente qualificada. Tirei várias dúvidas antes de comprar meu Apple Watch e me senti seguro durante todo o processo. A FTZ realmente entrega uma experiência premium.",
  },
];

export default function Avaliacoes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % depoimentos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % depoimentos.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);

  const atual = depoimentos[index];

  return (
    <section className="bg-white py-20 md:py-28 dark:bg-graphite-900">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-graphite-50 px-5 py-2 text-sm font-semibold text-graphite-700 dark:bg-graphite-800 dark:text-graphite-200">
          <span>5.0</span>
          <span className="flex text-navy-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </span>
          <span>no Google</span>
        </div>

        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-graphite-700 dark:text-graphite-200">
                “{atual.texto}”
              </p>
              <div className="mt-6">
                <p className="font-semibold text-graphite-900 dark:text-white">
                  {atual.nome}
                </p>
                <p className="text-sm text-graphite-400">{atual.titulo}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-graphite-200 text-graphite-700 transition-colors hover:bg-graphite-50 dark:border-graphite-700 dark:text-graphite-200 dark:hover:bg-graphite-800"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-graphite-900 dark:bg-white"
                    : "bg-graphite-200 dark:bg-graphite-700"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-graphite-200 text-graphite-700 transition-colors hover:bg-graphite-50 dark:border-graphite-700 dark:text-graphite-200 dark:hover:bg-graphite-800"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
