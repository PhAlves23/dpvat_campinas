"use client";

import Image from "next/image";
import { Button } from "../button";
import { FiArrowRight } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface BannerProps {
  bannerText: JSX.Element;
}

export const Banner = ({ bannerText }: BannerProps) => {
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
        <div className="flex justify-center items-center">
          <div className="pt-24 lg:pt-56">{bannerText}</div>
          <div
            className="hidden md:block lg:absolute lg:right-0 lg:bottom-0"
            data-aos="fade-left"
          >
            <img
              src="/banner-image.webp"
              width={418}
              height={513}
              alt="dsadasdas"
            />
            {/* <Image
            className="hidden lg:block lg:absolute lg:right-0 lg:bottom-0"
            src="/banner-image.webp"
            width={418}
            height={513}
            alt="Banner Image"
            loading="lazy"
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
