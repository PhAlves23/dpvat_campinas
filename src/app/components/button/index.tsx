"use client";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  icon?: IconType;
  variants?: "primary" | "secondary";
}

export const Button = ({
  children,
  icon: Icon,
  variants = "primary",
}: ButtonProps) => {
  const variantsStyle = {
    base: "w-full py-2 px-6 rounded-full text-lg",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={clsx(
        variantsStyle.base,
        variantsStyle[variants],
        Icon ? "flex justify-center font-semibold items-center gap-5" : ""
      )}
    >
      {children}
      {Icon && <Icon size={20} />}
    </motion.button>
  );
};
