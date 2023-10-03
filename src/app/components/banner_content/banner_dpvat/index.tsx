"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../../button";
import { useInView } from "react-intersection-observer";

const BannerDPVAT = () => {
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
      y: inView ? -100 : -100,
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
      opacity: 1,
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
      className="lg:max-w-2xl"
    >
      <div className="flex items-end">
        <h2 className="text-2xl font-semibold mb-3">
          Sofreu um acidente e não sabe se tem direito a alguma indenização?
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
        A DPVAT Campinas te ajuda a receber todas as indenizações a que tem
        direito após um acidente sem qualquer burocracia,{" "}
        <span className="text-primary font-bold">incluindo o seguro DPVAT</span>
        !
      </p>
      <p className="text-lg mb-3">
        Você irá se surpreender ao descobrir que pode ter direitos muito maiores
        que o DPVAT.
      </p>
      <p className="text-lg mb-8">
        Fale gratuitamente com nossa equipe e descubra todos os seus direitos.
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

export default BannerDPVAT;
