import Image from "next/image";

export const Purpose = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container-desktop py-5 pb-10 lg:py-16">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-center text-white">
          <Image
            src="/escritorio.jpg"
            width={500}
            height={400}
            alt="Escritório imagem"
            className="rounded-md border border-white p-2"
          />
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-5">Nosso propósito</h2>
            <p>
              Prover aos nossos clientes acidentados uma{" "}
              <span className="text-orange-400 font-bold">
                recuperação mais humana e digna
              </span>
              , através de um suporte financeiro alavancado pelo conhecimento e
              recebimento de todos os seus direitos e uma rede de suporte
              inteiramente a seu dispor durante essa jornada!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
