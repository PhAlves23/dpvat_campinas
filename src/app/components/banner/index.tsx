"use client";

import Image from "next/image";
import { Button } from "../button";
import { FiArrowRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Banner = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hide");
    }
  }, [inView, controls]);

  const personVariant = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    hide: {
      x: inView ? 500 : 0,
      opacity: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const textVariant = {
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

  const buttonVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.5,
      },
    },
  };

  return (
    <div className="bg-secondary text-white">
      <div
        className="container-desktop p-5 pb-10 gap-10 lg:gap-0 lg:py-28 lg:h-[37.5rem] flex flex-col lg:flex-row relative"
        ref={ref}
      >
        <motion.div
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="lg:max-w-2xl z-10"
        >
          <div className="flex items-end">
            <h2 className="text-2xl font-semibold mb-3">
              Sofreu um acidente e não sabe se tem direito a alguma indenização?
            </h2>
            <motion.div
              className="w-full"
              variants={personVariant}
              initial="hide"
              animate="show"
            >
              <Image
                className="pb-3 md:hidden"
                src="/banner-image.webp"
                width={150}
                height={184}
                alt="Banner Image"
              />
            </motion.div>
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
          <motion.div
            variants={buttonVariant}
            initial="initial"
            animate="animate"
            className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10"
          >
            <Button icon={FiArrowRight}>Quem somos</Button>
            <Button icon={FiArrowRight}>Como te ajudamos</Button>
          </motion.div>
        </motion.div>
        <motion.div variants={personVariant} initial="hide" animate="show">
          <Image
            className="hidden lg:block lg:absolute lg:right-0 lg:bottom-0"
            src="/banner-image.webp"
            width={418}
            height={513}
            alt="Banner Image"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};
