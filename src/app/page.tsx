"use client";

import { useEffect, useState } from "react";
import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HelpYou } from "./components/help_you";
import { Purpose } from "./components/purpose";
import { Services } from "./components/services";
import { WhatsAppButton } from "./components/whatsapp_button";
import AOS from "aos";
import "aos/dist/aos.css"; // Importe os estilos CSS
import BannerDPVAT from "./components/banner_content/banner_dpvat";

export default function Home() {
  const [bannerText, setBannerText] = useState<React.JSX.Element>(
    <BannerDPVAT />
  );
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
      <Banner bannerText={bannerText} />
      <HelpYou />
      <Services setBannerText={setBannerText} />
      <Purpose />
      <Footer />
    </>
  );
}
