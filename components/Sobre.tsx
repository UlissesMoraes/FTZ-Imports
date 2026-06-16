"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ftz = (n?: number) =>
  `/produtos/${encodeURIComponent(
    `✨ Por que nossos clientes amam a FTZPorque aqui o atendimento vai muito além de vender Apple-🍎${n != null ? `  (${n})` : " "}.jpg`
  )}`;

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 5, suffix: "+ anos", label: "de experiência com Apple" },
  { value: 10000, suffix: "+", label: "clientes atendidos" },
  { value: 5000, suffix: "+", label: "avaliações positivas" },
  { prefix: "⭐", value: 5, suffix: ".0", label: "nota no Google" },
];

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
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
      {prefix && <span className="mr-1">{prefix}</span>}
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function Sobre() {
  return (
    <section id="sobre" className="bg-graphite-50 py-20 md:py-28 dark:bg-graphite-800 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* Coluna esquerda: texto + stats */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-graphite-400">
              Sobre a FTZ
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-graphite-900 dark:text-white">
              Mais que uma loja Apple
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-graphite-500 dark:text-graphite-300">
              A FTZ Imports nasceu para oferecer uma experiência diferente: produtos Apple selecionados,
              atendimento próximo e assistência técnica especializada, tudo em Blumenau, com
              transparência em cada etapa — do primeiro contato ao pós-venda.
            </p>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="rounded-2xl bg-white p-6 shadow-sm dark:bg-graphite-900"
                >
                  <div className="text-2xl md:text-3xl font-bold tracking-tight text-graphite-900 dark:text-white">
                    <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <p className="mt-1.5 text-sm text-graphite-500 dark:text-graphite-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna direita: foto da loja */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ftz(3)}
                alt="FTZ Imports - nossa loja em Blumenau"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Badge flutuante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl dark:bg-graphite-900"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-graphite-400">Localização</p>
              <p className="mt-1 text-sm font-semibold text-graphite-900 dark:text-white">Blumenau · SC</p>
              <p className="text-xs text-graphite-500">Rua Pres. Getúlio Vargas, 196</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
