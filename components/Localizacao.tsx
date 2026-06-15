"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-graphite-50 py-20 md:py-28 dark:bg-graphite-800">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl shadow-sm"
        >
          <iframe
            title="Localização FTZ Imports"
            src="https://www.google.com/maps?q=Rua+Presidente+Get%C3%BAlio+Vargas,+196,+Centro,+Blumenau+-+SC&output=embed"
            className="h-full min-h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-graphite-400">
            Localização
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-graphite-900 dark:text-white">
            Venha nos visitar
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-navy-500" size={22} />
              <div>
                <p className="font-semibold text-graphite-900 dark:text-white">
                  FTZ Imports
                </p>
                <p className="text-graphite-500 dark:text-graphite-300">
                  Rua Presidente Getúlio Vargas, 196, Centro, Blumenau - SC
                </p>
                <p className="text-graphite-500 dark:text-graphite-300">
                  CEP 89010-140
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 shrink-0 text-navy-500" size={22} />
              <p className="text-graphite-500 dark:text-graphite-300">
                (47) 99792-7547
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 shrink-0 text-navy-500" size={22} />
              <div className="text-graphite-500 dark:text-graphite-300">
                <p>Segunda a Sexta: 09h às 20h</p>
                <p>Sábado: 09h às 17h</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
