"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const IPHONE17_VIDEO = `/loja/${encodeURIComponent(
  "📱 A nova geração chegou.A linha iPhone 17 já está dando o que falar… e quando você vê todos jun.mp4"
)}`;

const OKTOBERFEST_VIDEO = `/loja/${encodeURIComponent(
  "Recebemos a rainha da Oktoberfest na loja! 👸🏼🇩🇪A FTZ é a escolha da realeza para comprar seu.mp4"
)}`;

const videos = [
  {
    src: IPHONE17_VIDEO,
    titulo: "iPhone 17 chegou na FTZ",
    descricao: "A nova geração chegou. Veja todos os modelos juntos pela primeira vez.",
  },
  {
    src: OKTOBERFEST_VIDEO,
    titulo: "Rainha da Oktoberfest na FTZ",
    descricao: "A realeza de Blumenau escolheu a FTZ Imports para seu próximo Apple.",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="bg-white py-20 md:py-28 dark:bg-graphite-900">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Vídeos"
          title="A FTZ em movimento"
          description="Bastidores e momentos especiais da nossa loja em Blumenau."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {videos.map((video, i) => (
            <motion.div
              key={video.titulo}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="overflow-hidden rounded-[24px] bg-graphite-900 shadow-xl"
            >
              <video
                src={video.src}
                controls
                preload="metadata"
                playsInline
                className="w-full aspect-video bg-black"
              />
              <div className="p-5">
                <h3 className="text-base font-semibold text-white">
                  {video.titulo}
                </h3>
                <p className="mt-1 text-sm text-graphite-400">{video.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
