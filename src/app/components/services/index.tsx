"use client";

import { servicesItems } from "@/app/mocks";
import { CardServices } from "../card_services";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const Services = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hide");
    }
  }, [inView, controls]);

  const h2Variant = {
    initial: {
      opacity: inView ? 1 : 0,
      y: inView ? -100 : 0,
    },
    animate: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : -100,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const pVariant = {
    initial: {
      opacity: inView ? 1 : 0,
      y: inView ? -80 : 0,
    },
    animate: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : -80,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <section id="services" className="bg-orange-50">
      <div className="container-desktop py-5 lg:py-16" ref={ref}>
        <div className="flex flex-col justify-center items-center">
          <motion.h2
            variants={h2Variant}
            initial="initial"
            animate="animate"
            className="text-4xl font-bold mb-3"
          >
            Nossos serviços
          </motion.h2>
          <motion.p
            variants={pVariant}
            initial="initial"
            animate="animate"
            className="mb-5 text-lg text-center"
          >
            Ajudamos para que você receba tudo o que tem direito após um
            acidente
          </motion.p>
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
