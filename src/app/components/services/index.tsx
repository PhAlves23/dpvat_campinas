import { servicesItems } from "@/app/mocks";
import { CardServices } from "../card_services";

export const Services = () => {
  return (
    <section className="bg-orange-50">
      <div className="container-desktop py-5 lg:py-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-3">Nossos serviços</h2>
          <p className="mb-5 text-lg">
            Ajudamos para que você receba tudo o que tem direito após um
            acidente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-5">
          {servicesItems?.map(({ id, image, title, description, path }) => {
            return (
              <CardServices
                key={id}
                image={image}
                title={title}
                description={description}
                path={path}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
