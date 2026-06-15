"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "./ui/SectionHeader";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 5000, suffix: "+", label: "Avaliações positivas" },
  { value: 10000, suffix: "+", label: "Clientes atendidos" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function Sobre() {
  return (
    <section id="sobre" className="bg-graphite-50 py-20 md:py-28 dark:bg-graphite-800">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeader
          eyebrow="Sobre a FTZ"
          title="Mais que uma loja Apple"
          description="A FTZ Imports nasceu para oferecer uma experiência diferente: produtos Apple selecionados, atendimento próximo e assistência técnica especializada, tudo em um único lugar, com transparência em cada etapa."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-sm dark:bg-graphite-900"
            >
              <div className="text-3xl md:text-4xl font-semibold tracking-tight text-graphite-900 dark:text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-graphite-500 dark:text-graphite-300">
                {stat.label}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-white p-8 shadow-sm dark:bg-graphite-900"
          >
            <div className="text-lg md:text-xl font-semibold tracking-tight text-graphite-900 dark:text-white">
              Atendimento especializado Apple
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-white p-8 shadow-sm dark:bg-graphite-900"
          >
            <div className="text-lg md:text-xl font-semibold tracking-tight text-graphite-900 dark:text-white">
              Equipe altamente qualificada
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
