"use client";

import { useEffect } from "react";
import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HelpYou } from "./components/help_you";
import { Purpose } from "./components/purpose";
import { Services } from "./components/services";
import { WhatsAppButton } from "./components/whatsapp_button";
import AOS from "aos";
import "aos/dist/aos.css"; // Importe os estilos CSS

export default function Home() {
  useEffect(() => {
    // Inicialize o AOS
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos
    });
  }, []);

  return (
    <>
      <WhatsAppButton />

      <Header />
      <Banner />
      <HelpYou />
      <Services />
      <Purpose />
      <Footer />
    </>
  );
}
