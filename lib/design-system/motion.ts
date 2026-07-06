export const motionTokens = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    medium: 0.5,
    slow: 0.8,
    hero: 1.2,
    page: 0.7,
  },
  ease: {
    out: [0.16, 1, 0.3, 1], // Apple-like ease-out
    in: [0.87, 0, 0.13, 1],
    inOut: [0.65, 0, 0.35, 1],
    spring: { type: "spring", stiffness: 300, damping: 30 },
    smoothSpring: { type: "spring", stiffness: 100, damping: 20 },
  }
};

export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease.out }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: motionTokens.duration.medium, ease: motionTokens.ease.out }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }
};
