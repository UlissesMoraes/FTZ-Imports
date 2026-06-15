import { MessageCircle } from "lucide-react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Assistência Técnica", href: "#assistencia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-900 py-12 text-graphite-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/loja/logo%20da%20empresa.jpg"
              alt="FTZ Imports"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-3 max-w-xs text-sm text-graphite-400">
              Apple Premium em Blumenau - SC. Produtos selecionados e
              assistência técnica especializada, com atendimento humano e
              transparente.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-graphite-400">
              Links rápidos
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-graphite-400">
              Endereço
            </p>
            <p className="mt-4 text-sm">
              Rua Presidente Getúlio Vargas, 196
              <br />
              Centro, Blumenau - SC
              <br />
              CEP 89010-140
            </p>
            <p className="mt-4 text-sm">(47) 99792-7547</p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://wa.me/5547997927547"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-graphite-800 transition-colors hover:bg-graphite-700 hover:text-white"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-graphite-800 transition-colors hover:bg-graphite-700 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-graphite-800 transition-colors hover:bg-graphite-700 hover:text-white"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-graphite-800 pt-6 text-center text-xs text-graphite-500">
          © {year} FTZ Imports. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
