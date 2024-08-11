export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const divVariants =(delay) => {
  return {
    hidden : {
      opacity: 0,
    },
    visible:{
    opacity:1,
    transition:{
      staggerChildren:0.012,
      duration: 1.4,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    }
    }
  }
}

export const span =() => {

  return {
    hidden : {
      opacity: 0,
    },
    visible:{
    opacity:1,
  },
  transition:{
    staggerChildren:0.02,
    type: 'tween',
    duration: 1.4,
    ease: [0.25, 0.25, 0.25, 0.75],
}
}
}