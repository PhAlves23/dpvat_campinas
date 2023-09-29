//HEADER
export const menuMobileItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.3,
    },
  },
};

export const menuDesktopItemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.3,
    },
  },
};

export const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
