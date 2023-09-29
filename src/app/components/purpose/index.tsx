"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Purpose = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hide");
    }
  }, [inView, controls]);

  const imageVariant = {
    initial: {
      opacity: inView ? 1 : 0,
      x: inView ? -100 : 0,
    },
    animate: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -100,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const contentVariant = {
    initial: {
      opacity: inView ? 1 : 0,
      x: inView ? 100 : 0,
    },
    animate: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : 100,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <section id="about" className="bg-secondary">
      <div className="container-desktop py-5 pb-10 lg:py-16" ref={ref}>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-center text-white">
          <motion.div
            variants={imageVariant}
            initial="initial"
            animate="animate"
          >
            <Image
              src="/escritorio.jpg"
              width={500}
              height={400}
              alt="Escritório imagem"
              className="rounded-md border border-white p-2"
            />
          </motion.div>
          <motion.div
            variants={contentVariant}
            initial="initial"
            animate="animate"
            className="max-w-md"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
