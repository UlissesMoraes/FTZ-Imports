"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./ui/Button";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      {/* Background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-graphite-50 to-navy-50 dark:from-graphite-900 dark:via-navy-900 dark:to-graphite-800"
      />

      {/* Decorative orbs */}
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-navy-100/40 blur-[120px] dark:bg-navy-900/40" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-graphite-100/60 blur-[100px] dark:bg-graphite-800/40" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-graphite-200/60 bg-white/60 px-5 py-2 text-sm font-medium text-graphite-600 backdrop-blur-sm dark:border-graphite-700/60 dark:bg-graphite-800/60 dark:text-graphite-300"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Blumenau · SC — Atendimento presencial e online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-[-0.04em] text-graphite-900 dark:text-white"
          >
            Apple Premium.
            <br />
            <span className="bg-gradient-to-r from-navy-600 to-navy-400 bg-clip-text text-transparent dark:from-navy-300 dark:to-navy-500">
              Atendimento Humano.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-7 max-w-2xl text-lg md:text-xl leading-relaxed text-graphite-500 dark:text-graphite-300"
          >
            iPhone, MacBook, iPad e AirPods com procedência garantida, além de
            assistência técnica especializada. Atendimento personalizado e
            transparente, do primeiro contato ao pós-venda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" onClick={() => scrollTo("#produtos")}>
              Comprar Agora
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollTo("#contato")}
            >
              Agendar Atendimento
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-graphite-400 dark:text-graphite-500"
          >
            {[
              "⭐ 5.0 no Google",
              "✓ +10.000 clientes",
              "✓ Produtos com procedência",
              "✓ iPhone reserva",
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-graphite-900" />
    </section>
  );
}
