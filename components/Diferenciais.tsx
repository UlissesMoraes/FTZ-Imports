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
  iconBg: string;
  border: string;
}

const diferenciais: Diferencial[] = [
  {
    icon: Users,
    title: "Atendimento Individual",
    description: "Atendimento próximo, sem filas, focado em cada cliente.",
    iconBg: "bg-[#1a3a8f]",
    border: "hover:border-[#1a3a8f]",
  },
  {
    icon: BadgeCheck,
    title: "Especialistas Apple",
    description: "Equipe treinada e experiente no ecossistema Apple.",
    iconBg: "bg-emerald-600",
    border: "hover:border-emerald-500",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Preços e processos claros, sem surpresas.",
    iconBg: "bg-violet-600",
    border: "hover:border-violet-500",
  },
  {
    icon: Smartphone,
    title: "iPhone Reserva",
    description: "Enquanto seu aparelho é reparado, você não fica sem celular.",
    iconBg: "bg-amber-500",
    border: "hover:border-amber-400",
  },
  {
    icon: PackageCheck,
    title: "Produtos Selecionados",
    description: "Equipamentos revisados e com procedência garantida.",
    iconBg: "bg-sky-600",
    border: "hover:border-sky-500",
  },
  {
    icon: Sparkles,
    title: "Experiência Premium",
    description: "Ambiente, atendimento e produtos com padrão diferenciado.",
    iconBg: "bg-rose-600",
    border: "hover:border-rose-500",
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[28px] border-2 border-transparent bg-graphite-50 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl dark:bg-graphite-800 ${item.border}`}
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04] rounded-[28px] bg-current" />

                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg} text-white shadow-lg`}>
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
