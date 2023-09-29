import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Purpose } from "./components/purpose";
import { Services } from "./components/services";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Purpose />
    </>
  );
}
