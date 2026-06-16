import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Manifesto from "@/components/Manifesto";
import Novidades from "@/components/Novidades";
import Videos from "@/components/Videos";
import Produtos from "@/components/Produtos";
import AssistenciaTecnica from "@/components/AssistenciaTecnica";
import Sobre from "@/components/Sobre";
import Galeria from "@/components/Galeria";
import Avaliacoes from "@/components/Avaliacoes";
import Localizacao from "@/components/Localizacao";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Manifesto />
        <Novidades />
        <Videos />
        <Produtos />
        <AssistenciaTecnica />
        <Sobre />
        <Galeria />
        <Avaliacoes />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
