import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Novidades from "@/components/Novidades";
import Produtos from "@/components/Produtos";
import AssistenciaTecnica from "@/components/AssistenciaTecnica";
import Sobre from "@/components/Sobre";
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
        <Novidades />
        <Produtos />
        <AssistenciaTecnica />
        <Sobre />
        <Avaliacoes />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
