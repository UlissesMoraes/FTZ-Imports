"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";

type Status = "idle" | "sending" | "success" | "error";

export default function Contato() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nome: data.get("nome"),
      telefone: data.get("telefone"),
      email: data.get("email"),
      assunto: data.get("assunto"),
      mensagem: data.get("mensagem"),
    };

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Não foi possível enviar sua mensagem.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Não foi possível enviar sua mensagem."
      );
    }
  };

  return (
    <section id="contato" className="bg-white py-20 md:py-28 dark:bg-graphite-900">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos conversar?"
          description="Preencha o formulário abaixo e nossa equipe entrará em contato com você."
        />

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label htmlFor="nome" className="mb-2 block text-sm font-medium text-graphite-700 dark:text-graphite-200">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 outline-none transition-colors focus:border-graphite-900 dark:border-graphite-700 dark:bg-graphite-800 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="telefone" className="mb-2 block text-sm font-medium text-graphite-700 dark:text-graphite-200">
              Telefone
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 outline-none transition-colors focus:border-graphite-900 dark:border-graphite-700 dark:bg-graphite-800 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-graphite-700 dark:text-graphite-200">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 outline-none transition-colors focus:border-graphite-900 dark:border-graphite-700 dark:bg-graphite-800 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="assunto" className="mb-2 block text-sm font-medium text-graphite-700 dark:text-graphite-200">
              Assunto
            </label>
            <input
              id="assunto"
              name="assunto"
              type="text"
              className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 outline-none transition-colors focus:border-graphite-900 dark:border-graphite-700 dark:bg-graphite-800 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-graphite-700 dark:text-graphite-200">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={5}
              className="w-full rounded-xl border border-graphite-200 bg-white px-4 py-3 text-graphite-900 outline-none transition-colors focus:border-graphite-900 dark:border-graphite-700 dark:bg-graphite-800 dark:text-white dark:focus:border-white"
            />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
              {status === "sending" ? "Enviando..." : "Falar com Especialista"}
            </Button>

            {status === "success" && (
              <p className="mt-4 text-sm font-medium text-green-600">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600">{errorMessage}</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
