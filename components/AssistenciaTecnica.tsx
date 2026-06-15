"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Button from "./ui/Button";

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
    <section id="assistencia" className="bg-white py-20 md:py-28 dark:bg-graphite-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-graphite-400">
            Assistência Técnica
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-graphite-900 dark:text-white">
            Seu Apple em boas mãos
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg text-graphite-500 dark:text-graphite-300">
            Nossa equipe de especialistas cuida do seu dispositivo com a
            atenção que ele merece, usando peças de qualidade e processos
            transparentes do início ao fim. Você acompanha cada etapa do
            reparo, sem surpresas.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
            <Button size="lg">Solicitar Diagnóstico</Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-graphite-50 p-8 md:p-10 dark:bg-graphite-800"
        >
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {servicos.map((servico) => (
              <li
                key={servico}
                className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-medium text-graphite-700 shadow-sm dark:bg-graphite-900 dark:text-graphite-200"
              >
                <CheckCircle size={20} className="shrink-0 text-navy-500" />
                {servico}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
