"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export const WhatsAppButton = () => {
  return (
    <div className="fixed right-8 bottom-16 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-600 w-16 h-16 flex justify-center items-center rounded-full cursor-pointer"
      >
        <Link
          href="https://api.whatsapp.com/send?phone=551987299161"
          target="_blank"
        >
          <Image
            src="/whatsapp.svg"
            width={62}
            height={62}
            alt="WhatsApp imagem"
          />
        </Link>
      </motion.button>
    </div>
  );
};
