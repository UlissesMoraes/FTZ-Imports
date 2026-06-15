"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-graphite-50 to-graphite-100 dark:from-graphite-900 dark:via-navy-900 dark:to-graphite-800" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-graphite-900 dark:text-white">
            Apple Premium.
            <br />
            Atendimento Humano.
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-graphite-500 dark:text-graphite-300">
            iPhone, MacBook, iPad e AirPods com procedência garantida, além de
            assistência técnica especializada. Aqui você recebe atendimento
            personalizado e transparente, do primeiro contato ao
            pós-venda.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
          </div>
        </motion.div>

        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="relative aspect-square w-full max-w-lg justify-self-center overflow-hidden rounded-3xl shadow-2xl"
        >
          <Image
            src="https://placehold.co/800x800/0a1128/ffffff?text=FTZ+Imports"
            alt="Produtos Apple FTZ Imports"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
