"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

interface VideoCard {
  src: string;
  title: string;
  description: string;
}

const videos: VideoCard[] = [
  {
    src: "/media/iphone17.mp4",
    title: "A nova geração chegou",
    description:
      "A linha iPhone 17 já está dando o que falar. Confira de perto na FTZ Imports.",
  },
  {
    src: "/media/oktoberfest.mp4",
    title: "Recebemos a rainha da Oktoberfest",
    description:
      "A escolha da realeza para comprar seu próximo iPhone é a FTZ Imports.",
  },
];

function VideoReveal({ video, index }: { video: VideoCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="sticky top-24 mb-10 overflow-hidden rounded-[32px] shadow-2xl"
    >
      <div className="relative aspect-[9/16] w-full max-h-[80vh] mx-auto sm:aspect-video">
        <video
          src={video.src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="absolute inset-x-0 bottom-0 p-8 sm:p-10"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-white">
            {video.title}
          </h3>
          <p className="mt-3 max-w-md text-base sm:text-lg leading-relaxed text-graphite-100">
            {video.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Novidades() {
  return (
    <section className="bg-graphite-900 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          theme="dark"
          eyebrow="Novidades"
          title="Veja o que está rolando na FTZ"
          description="Bastidores, lançamentos e momentos especiais direto da nossa loja em Blumenau."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {videos.map((video, index) => (
            <VideoReveal key={video.src} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
