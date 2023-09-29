"use client";
import { headerLinks } from "@/app/mocks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import {
  menuDesktopItemVariants,
  menuMobileItemVariants,
  menuVariants,
} from "@/app/utils/motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLGScreen = useMediaQuery({ minWidth: 1024 });
  const [showMenu, setShowMenu] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    if (isLGScreen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isLGScreen]);

  useEffect(() => {
    if (isOpen && !isLGScreen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isOpen, isLGScreen]);

  const handleSelectedMenuItem = () => {
    if (!isLGScreen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos - prevScrollPos.current;
      if (isScrollingUp <= -0 || currentScrollPos === 0) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`sticky left-0 right-0 top-0 lg:sticky bg-gray-50 shadow-sm  z-50  ${
        showMenu
          ? "opacity-100 transition-all duration-300"
          : "opacity-0 z-[-1] transition-all duration-200"
      }`}
    >
      <header
        className={`flex justify-between items-center container-desktop h-20`}
      >
        <div className="w-full lg:w-auto flex justify-between items-center">
          <a href="#">
            <Image
              src="/logo.svg"
              width={154}
              height={64}
              alt="Logo DPVAT Campinas"
            />
          </a>

          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
          </div>
        </div>

        <nav>
          {isOpen && (
            <motion.ul
              variants={menuVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              className="z-50 flex items-center gap-3 fixed inset-0 flex-col justify-center font-semibold text-white bg-orange-50 border-t border-t-orange-400 lg:border-0 top-20 text-2xl lg:bg-transparent lg:text-base lg:flex-row lg:static"
            >
              {headerLinks?.map(({ id, title, url }) => (
                <motion.li
                  variants={
                    isLGScreen
                      ? menuDesktopItemVariants
                      : menuMobileItemVariants
                  }
                  key={title}
                  onClick={handleSelectedMenuItem}
                >
                  <a
                    href={url}
                    className="text-blue-900 py-3 px-3 hover:bg-gray-200 hover:border-b-primary transition-all duration-300 cursor-pointer block"
                  >
                    {title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </nav>

        <Link
          href="https://api.whatsapp.com/send?phone=5519999985348"
          target="_blank"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hidden lg:block bg-orange-400 text-white py-3 px-6 rounded-full"
          >
            Entrar em contato
          </motion.button>
        </Link>
        {/* <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram size={32} className="text-secondary" />
        </Link> */}
      </header>
    </div>
  );
};
