"use client";

import { motion } from "framer-motion";
import {
  Users,
  BadgeCheck,
  Eye,
  Smartphone,
  PackageCheck,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

interface Diferencial {
  icon: LucideIcon;
  title: string;
  description: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Users,
    title: "Atendimento Individual",
    description:
      "Atendimento próximo, sem filas, focado em cada cliente.",
  },
  {
    icon: BadgeCheck,
    title: "Especialistas Apple",
    description:
      "Equipe treinada e experiente no ecossistema Apple.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description:
      "Preços e processos claros, sem surpresas.",
  },
  {
    icon: Smartphone,
    title: "iPhone Reserva",
    description:
      "Enquanto seu aparelho é reparado, você não fica sem celular.",
  },
  {
    icon: PackageCheck,
    title: "Produtos Selecionados",
    description:
      "Equipamentos revisados e com procedência garantida.",
  },
  {
    icon: Sparkles,
    title: "Experiência Premium",
    description:
      "Ambiente, atendimento e produtos com padrão diferenciado.",
  },
];

export default function Diferenciais() {
  return (
    <section className="bg-white py-20 md:py-28 dark:bg-graphite-900">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Por que a FTZ"
          title="Diferenciais que fazem a diferença"
          description="Mais do que vender produtos Apple, entregamos uma experiência completa, próxima e transparente."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[28px] border border-graphite-100 bg-graphite-50 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:border-graphite-700 dark:bg-graphite-800"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-graphite-900 text-white dark:bg-white dark:text-graphite-900">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-graphite-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-graphite-500 dark:text-graphite-300">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
