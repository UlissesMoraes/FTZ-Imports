"use client";

import { motion } from "framer-motion";

const ftz = (n?: number) =>
  `/produtos/${encodeURIComponent(
    `✨ Por que nossos clientes amam a FTZPorque aqui o atendimento vai muito além de vender Apple-🍎${n != null ? `  (${n})` : " "}.jpg`
  )}`;

const imagens = [
  { src: ftz(), alt: "FTZ Imports - atendimento" },
  { src: ftz(1), alt: "FTZ Imports - produtos" },
  { src: ftz(2), alt: "FTZ Imports - loja" },
  { src: ftz(3), alt: "FTZ Imports - equipe" },
  { src: ftz(4), alt: "FTZ Imports - experiência" },
  { src: ftz(5), alt: "FTZ Imports - variedade" },
  { src: ftz(6), alt: "FTZ Imports - clientes" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="bg-graphite-50 py-20 md:py-28 dark:bg-graphite-800">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 md:mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-graphite-400"
          >
            Nossa loja
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-graphite-900 dark:text-white"
          >
            Por que os clientes amam a FTZ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-graphite-500 dark:text-graphite-300"
          >
            Atendimento que vai muito além de vender Apple. Veja um pouco do que acontece por aqui.
          </motion.p>
        </div>

        {/* Masonry */}
        <div className="columns-2 md:columns-3 gap-4">
          {imagens.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-sm group cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.instagram.com/ftzimports"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-graphite-200 bg-white px-6 py-3 text-sm font-medium text-graphite-700 shadow-sm transition-all hover:bg-graphite-50 hover:shadow-md dark:border-graphite-700 dark:bg-graphite-900 dark:text-graphite-200 dark:hover:bg-graphite-800"
          >
            <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Ver mais no Instagram @ftzimports
          </a>
        </motion.div>
      </div>
    </section>
  );
}
