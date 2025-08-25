  // Find the active label based on the current route
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: {
    y: -10,
    scale: 1.02,
    transition: { type: 'spring', stiffness: 300 },
  },
  tap: { scale: 0.98 },
};

export const iconVariants = {
  hover: {
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.6 },
  },
};

export const techItemVariants = {
  hover: {
    x: 5,
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300 },
  },
};
