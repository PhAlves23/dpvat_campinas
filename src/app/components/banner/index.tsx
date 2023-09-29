import Image from "next/image";
import { Button } from "../button";
import { FiArrowRight } from "react-icons/fi";

export const Banner = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container-desktop p-5 pb-10 gap-10 lg:gap-0 lg:py-28 lg:h-[75vh] flex flex-col lg:flex-row relative">
        <div className="lg:max-w-2xl z-10">
          <div className="flex items-end">
            <h2 className="text-2xl font-semibold mb-3">
              Sofreu um acidente e não sabe se tem direito a alguma indenização?
            </h2>
            <Image
              className="pb-3 md:hidden"
              src="/banner-image.webp"
              width={150}
              height={184}
              alt="Banner Image"
            />
          </div>
          <p className="text-lg mb-3">
            A DPVAT Campinas te ajuda a receber todas as indenizações a que tem
            direito após um acidente sem qualquer burocracia,{" "}
            <span className="text-primary font-bold">
              incluindo o seguro DPVAT
            </span>
            !
          </p>
          <p className="text-lg mb-3">
            Você irá se surpreender ao descobrir que pode ter direitos muito
            maiores que o DPVAT.
          </p>
          <p className="text-lg mb-8">
            Fale com a nossa equipe e descubra os seus direitos gratuitamente!
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
            <Button icon={FiArrowRight}>Quem somos</Button>
            <Button icon={FiArrowRight}>Como te ajudamos</Button>
          </div>
        </div>
        <Image
          className="hidden lg:block lg:absolute lg:right-0 lg:bottom-0"
          src="/banner-image.webp"
          width={418}
          height={513}
          alt="Banner Image"
        />
      </div>
    </div>
  );
};
