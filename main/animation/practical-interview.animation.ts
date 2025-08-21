import { Variants } from 'framer-motion';
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

export const dropdownAnimation = {
  wrapper: {
    open: {
      scaleY: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.1,
      },
    },
  },
  icon: {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  },
  item: {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: 'afterChildren',
      },
    },
  },
};

export const motionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.07,
        staggerDirection: -1,
        when: 'afterChildren',
        ease: 'easeIn',
      },
    },
  } as Variants,

  card: {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.97,
      rotate: -0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 13,
        stiffness: 150,
        mass: 0.5,
        bounce: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.95,
      rotate: 0.5,
      transition: {
        duration: 0.25,
        ease: 'easeIn',
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotate: 0,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
        duration: 0.3,
      },
    },
  } as Variants,

  message: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
        mass: 0.5,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  } as Variants,
};




export function slideInOut(){
  document.documentElement.animate([
  {
    opacity: 1,
    transform: 'translate(0,0)',
  },
  {
    opacity: 0,
    transform: 'translate(-100%,0)',
  }
  ],{
    duration: 500,
    easing:'ease',
    fill:'forwards',
    pseudoElement :"::view-transition-old(root)",

  });
  document.documentElement.animate([
    {
      opacity: 0,
      transform: 'translate(100%,0)',
    },
    {
      opacity: 1,
      transform: 'translate(0,0)',
    }
    ],{
      duration: 500,
      easing:'ease',
      fill:'forwards',
      pseudoElement :"::view-transition-new(root)",

    });
}