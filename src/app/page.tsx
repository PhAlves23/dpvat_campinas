import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Purpose } from "./components/purpose";
import { Services } from "./components/services";
import { WhatsAppButton } from "./components/whatsapp_button";

export default function Home() {
  return (
    <>
      <WhatsAppButton />

      <Header />
      <Banner />
      <Services />
      <Purpose />
      <Footer />
    </>
  );
}
