"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function AnimatedWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [20, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.3em] inline-block">
      {word}
    </motion.span>
  );
}

const headline =
  "Mais do que produtos. Uma experiência que transforma a forma como você vive com tecnologia.";

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.3"],
  });

  const words = headline.split(" ");

  return (
    <section ref={ref} className="bg-graphite-900 py-28 md:py-48">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 block text-sm font-semibold uppercase tracking-[0.22em] text-graphite-400"
        >
          Nossa missão
        </motion.span>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.2] tracking-[-0.03em] text-white">
          {words.map((word, i) => {
            const total = words.length;
            const start = i / total;
            const end = Math.min((i + 2) / total, 1);
            return (
              <AnimatedWord
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
