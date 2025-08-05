export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export const rotate = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

export const activeIndicatorVariants = {
  hidden: { width: '0%', opacity: 0 },
  visible: {
    width: '100%',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: { width: '0%', opacity: 0 },
};

export const contentVariants = {
  initial: (direction: number) => ({ opacity: 0, x: direction * 50 }),
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: -direction * 50,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  }),
};

export const collapseVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: { duration: 0.1 },
      height: { duration: 0.1 },
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { duration: 0.1 },
      height: { duration: 0.1 },
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const listItemVariant = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};
