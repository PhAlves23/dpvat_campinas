"use client";
import { Button } from "../button";
import { helpYouItems } from "@/app/mocks";
import { FiArrowRight, FiSearch, FiHeart } from "react-icons/fi";
import { FaPiggyBank } from "react-icons/fa";
import { MethodItem } from "../method_item";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const HelpYou = () => {
  const controls = useAnimation();

  const [helpYouRef, inView] = useInView({});
  const [benefitsRef, benefitsInView] = useInView({});

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hide");
    }
  }, [inView, controls]);

  const titleVariant = {
    initial: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -100,
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

  const item1Variant = {
    initial: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
    },
    animate: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const item2Variant = {
    initial: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
    },
    animate: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
  };

  const item3Variant = {
    initial: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
    },
    animate: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100,
      transition: {
        duration: 0.8,
        delay: 0.7,
      },
    },
  };

  const buttonVariant = {
    initial: {
      y: inView ? 0 : 60,
      opacity: inView ? 1 : 0,
    },
    animate: {
      y: inView ? 0 : 60,
      opacity: inView ? 1 : 0,
      transition: {
        duration: 0.8,
        delay: 0.9,
      },
    },
  };

  const benefitsTitleVariant = {
    initial: {
      opacity: benefitsInView ? 1 : 0,
      x: benefitsInView ? 0 : 20,
    },
    animate: {
      opacity: benefitsInView ? 1 : 0,
      x: benefitsInView ? 0 : 20,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  const benefitsItemsVariant = {
    initial: {
      opacity: benefitsInView ? 1 : 0,
      x: benefitsInView ? 0 : 20,
    },
    animate: {
      opacity: benefitsInView ? 1 : 0,
      x: benefitsInView ? 0 : 20,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <section id="help-you" className="w-full">
      {/* <div className="container-desktop py-5 lg:py-16"> */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="lg:min-h-[700px] bg-orange-50 p-10 flex justify-center items-start"
            ref={helpYouRef}
          >
            <div className="max-w-md">
              <motion.h2
                variants={titleVariant}
                initial="initial"
                animate="animate"
                className="text-4xl font-bold mb-3 text-secondary"
              >
                Como ajudamos nossos clientes
              </motion.h2>
              <motion.p
                variants={titleVariant}
                initial="initial"
                animate="animate"
                className="text-lg text-secondary mb-5"
              >
                Nosso método é extremamente eficiente e já ajudou centenas de
                pessoas a receber suas indenizações de maneira rápida e justa.
                Veja abaixo como ele funciona:
              </motion.p>
              <div className="flex flex-col gap-10 mb-10">
                <motion.div
                  variants={item1Variant}
                  initial="initial"
                  animate="animate"
                >
                  <MethodItem icon={FiSearch}>
                    Identificamos todos os direitos do cliente após o acidente.
                  </MethodItem>
                </motion.div>
                <motion.div
                  variants={item2Variant}
                  initial="initial"
                  animate="animate"
                >
                  <MethodItem icon={FiHeart}>
                    Facilitamos todo o processo de indenização até o
                    recebimento.
                  </MethodItem>
                </motion.div>
                <motion.div
                  variants={item3Variant}
                  initial="initial"
                  animate="animate"
                >
                  <MethodItem icon={FaPiggyBank}>
                    Maximizamos os ganhos indenizatórios.
                  </MethodItem>
                </motion.div>
              </div>
              <motion.div
                variants={buttonVariant}
                initial="initial"
                animate="animate"
              >
                <Button icon={FiArrowRight} variants="secondary">
                  Conheça o nosso método
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="min-h-[300px] lg:min-h-[700px] bg-[url('/menino_lupa.webp')] bg-no-repeat bg-cover bg-center"></div>
          <div className="order-2 lg:order-1 min-h-[300px] lg:min-h-[700px] bg-[url('/aperto.webp')] bg-no-repeat bg-cover bg-center"></div>
          <div
            className=" order-1 lg:order-2 lg:min-h-[700px] bg-secondary p-10"
            ref={benefitsRef}
          >
            <motion.h2
              variants={benefitsTitleVariant}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold mb-10 text-white"
            >
              Benefícios com
              <span className="text-primary font-bold"> DPVAT Campinas</span>!
            </motion.h2>

            <motion.div
              variants={benefitsItemsVariant}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-5"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
