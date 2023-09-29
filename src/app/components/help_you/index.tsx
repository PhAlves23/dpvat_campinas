import { Button } from "../button";
import { helpYouItems } from "@/app/mocks";
import { FiArrowRight, FiSearch, FiHeart } from "react-icons/fi";
import { FaPiggyBank } from "react-icons/fa";
import { MethodItem } from "../method_item";

export const HelpYou = () => {
  return (
    <section className="w-full">
      {/* <div className="container-desktop py-5 lg:py-16"> */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:min-h-[700px] bg-orange-50 p-10 flex justify-center items-start">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold mb-3 text-secondary">
                Como ajudamos nossos clientes
              </h2>
              <p className="text-lg text-secondary mb-5">
                Nosso método é extremamente eficiente e já ajudou centenas de
                pessoas a receber suas indenizações de maneira rápida e justa.
                Veja abaixo como ele funciona:
              </p>
              <div className="flex flex-col gap-10 mb-10">
                <MethodItem icon={FiSearch}>
                  Identificamos todos os direitos do cliente após o acidente.
                </MethodItem>
                <MethodItem icon={FiHeart}>
                  Facilitamos todo o processo de indenização até o recebimento.
                </MethodItem>
                <MethodItem icon={FaPiggyBank}>
                  Maximizamos os ganhos indenizatórios.
                </MethodItem>
              </div>
              <Button icon={FiArrowRight} variants="secondary">
                Conheça o nosso método
              </Button>
            </div>
          </div>
          <div className="min-h-[300px] lg:min-h-[700px] bg-[url('/menino_lupa.webp')] bg-no-repeat bg-cover bg-center"></div>
          <div className="order-2 lg:order-1 min-h-[300px] lg:min-h-[700px] bg-[url('/aperto.webp')] bg-no-repeat bg-cover bg-center"></div>
          <div className=" order-1 lg:order-2 lg:min-h-[700px] bg-secondary p-10">
            <h2 className="text-4xl font-bold mb-10 text-white">
              Benefícios com
              <span className="text-primary font-bold"> DPVAT Campinas</span>!
            </h2>

            <div className="flex flex-col gap-5">
              {helpYouItems?.map(({ id, title, description }) => {
                return (
                  <div key={id}>
                    <div className="">
                      <h3 className="text-lg font-bold text-white">{title}</h3>
                      <p className="text-sm text-white">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
