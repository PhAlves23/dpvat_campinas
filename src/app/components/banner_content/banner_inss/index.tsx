"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../../button";
import { useInView } from "react-intersection-observer";

const BannerINSS = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hide");
    }
  }, [inView, controls]);

  const textVariant = {
    initial: {
      opacity: inView ? 1 : 0,
      y: inView ? -100 : 0,
    },
    animate: {
      opacity: inView ? 0 : 1,
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
    <motion.div
      variants={textVariant}
      initial="initial"
      animate="animate"
      className="lg:max-w-2xl z-10"
    >
      <div className="flex items-end">
        <h2 className="text-2xl font-semibold mb-3">
          Enfrentando dúvidas sobre seus direitos e benefícios junto ao INSS
          após um acidente?
        </h2>

        <div className="w-full lg:w-0" data-aos="fade-left">
          <img
            src="/banner-image.webp"
            width={150}
            height={184}
            alt="dsadasdas"
            className="pb-3 md:hidden"
          />
          {/* <Image
          className="pb-3 md:hidden"
          src="/banner-image.webp"
          width={150}
          height={184}
          alt="Banner Image"
        /> */}
        </div>
      </div>
      <p className="text-lg mb-3">
        A DPVAT Campinas é seu parceiro confiável para receber todas as
        compensações a que você tem direito, sem complicações.
      </p>
      <p className="text-lg mb-3">
        Você ficará surpreso ao saber que pode ter direitos mais amplos do que
        imagina, não apenas em relação ao DPVAT, mas também em questões
        relacionadas ao INSS.
      </p>
      <p className="text-lg mb-8">
        Converse gratuitamente com nossa equipe de Assessoria do INSS e descubra
        todas as vantagens e opções disponíveis para garantir seu bem-estar e
        segurança financeira.
      </p>
      <motion.div
        variants={buttonVariant}
        initial="initial"
        animate="animate"
        className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10"
      >
        <a className="w-full" href="#about">
          <Button icon={FiArrowRight}>Quem somos</Button>
        </a>
        <a className="w-full" href="#help-you">
          <Button icon={FiArrowRight}>Como te ajudamos</Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default BannerINSS;
