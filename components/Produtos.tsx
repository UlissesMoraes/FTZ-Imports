"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

interface Produto {
  nome: string;
  descricao: string;
  imagem: string;
}

const produtos: Produto[] = [
  {
    nome: "iPhone",
    descricao: "Modelos selecionados, com procedência garantida e revisão completa.",
    imagem: "https://placehold.co/600x600/1a1b1f/ffffff?text=iPhone",
  },
  {
    nome: "MacBook",
    descricao: "Potência e portabilidade para o seu dia a dia, com garantia FTZ.",
    imagem: "https://placehold.co/600x600/2c2d33/ffffff?text=MacBook",
  },
  {
    nome: "iPad",
    descricao: "Criatividade e produtividade em um design leve e versátil.",
    imagem: "https://placehold.co/600x600/18274f/ffffff?text=iPad",
  },
  {
    nome: "Apple Watch",
    descricao: "Saúde, conectividade e estilo no seu pulso, todos os dias.",
    imagem: "https://placehold.co/600x600/284290/ffffff?text=Apple+Watch",
  },
  {
    nome: "AirPods",
    descricao: "Som premium e conexão perfeita com todo o ecossistema Apple.",
    imagem: "https://placehold.co/600x600/0a1128/ffffff?text=AirPods",
  },
  {
    nome: "Acessórios",
    descricao: "Capas, carregadores e periféricos originais e selecionados.",
    imagem: "https://placehold.co/600x600/46484f/ffffff?text=Acess%C3%B3rios",
  },
];

const WHATSAPP_BASE = "https://wa.me/5547997927547";

export default function Produtos() {
  return (
    <section id="produtos" className="bg-graphite-50 py-20 md:py-28 dark:bg-graphite-800">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Catálogo"
          title="Produtos Apple selecionados"
          description="Equipamentos revisados, com garantia e procedência, prontos para fazer parte do seu dia a dia."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-graphite-900"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-graphite-900 dark:text-white">
                  {produto.nome}
                </h3>
                <p className="mt-2 text-sm text-graphite-500 dark:text-graphite-300">
                  {produto.descricao}
                </p>
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `Olá! Gostaria de solicitar uma cotação para: ${produto.nome}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block"
                >
                  <Button variant="secondary" className="w-full">
                    Solicitar Cotação
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
