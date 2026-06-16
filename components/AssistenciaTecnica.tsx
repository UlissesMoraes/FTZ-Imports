"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "./ui/Button";

const ftz = (n?: number) =>
  `/produtos/${encodeURIComponent(
    `✨ Por que nossos clientes amam a FTZPorque aqui o atendimento vai muito além de vender Apple-🍎${n != null ? `  (${n})` : " "}.jpg`
  )}`;

const servicos = [
  "Troca de tela",
  "Troca de bateria",
  "Reparos avançados",
  "Atualizações",
  "Limpeza técnica",
  "Recuperação de sistema",
];

const WHATSAPP_URL =
  "https://wa.me/5547997927547?text=" +
  encodeURIComponent("Olá! Gostaria de solicitar um diagnóstico técnico para o meu Apple.");

export default function AssistenciaTecnica() {
  return (
    <section id="assistencia" className="bg-white py-20 md:py-28 dark:bg-graphite-900 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">

        {/* Coluna esquerda: texto */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-graphite-400">
            Assistência Técnica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-graphite-900 dark:text-white">
            Seu Apple em boas mãos
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-graphite-500 dark:text-graphite-300">
            Nossa equipe de especialistas cuida do seu dispositivo com a
            atenção que ele merece, usando peças de qualidade e processos
            transparentes do início ao fim. Você acompanha cada etapa do
            reparo, sem surpresas.
          </p>

          {/* Lista de serviços */}
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {servicos.map((servico) => (
              <li key={servico} className="flex items-center gap-2 text-sm font-medium text-graphite-700 dark:text-graphite-200">
                <CheckCircle size={18} className="shrink-0 text-emerald-500" />
                {servico}
              </li>
            ))}
          </ul>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
            <Button size="lg">Solicitar Diagnóstico</Button>
          </a>
        </motion.div>

        {/* Coluna direita: foto com overlay de badge */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ftz(5)}
              alt="Assistência técnica Apple FTZ"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/60 via-transparent to-transparent rounded-[32px]" />
          </div>

          {/* Badge flutuante */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute -bottom-4 -right-4 rounded-2xl bg-graphite-900 px-5 py-4 shadow-xl dark:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-graphite-400 dark:text-graphite-500">Diagnóstico</p>
            <p className="mt-1 text-lg font-bold text-white dark:text-graphite-900">Gratuito</p>
            <p className="text-xs text-graphite-300 dark:text-graphite-500">sem compromisso</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
