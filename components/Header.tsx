"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Assistência Técnica", href: "#assistencia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/5547997927547";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-graphite-200/50 bg-white/70 backdrop-blur-xl dark:border-graphite-700/50 dark:bg-graphite-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="text-lg font-semibold tracking-tight text-graphite-900 dark:text-white"
        >
          FTZ Imports
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-graphite-500 transition-colors hover:text-graphite-900 dark:text-graphite-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-graphite-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-graphite-700 dark:bg-white dark:text-graphite-900 dark:hover:bg-graphite-100"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <button
          className="md:hidden text-graphite-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-graphite-200/50 bg-white/90 backdrop-blur-xl md:hidden dark:border-graphite-700/50 dark:bg-graphite-900/90"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-graphite-700 transition-colors hover:bg-graphite-50 dark:text-graphite-200 dark:hover:bg-graphite-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-graphite-900 px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-graphite-900"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
