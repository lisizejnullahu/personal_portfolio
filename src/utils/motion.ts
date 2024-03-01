interface TextVariantAnimation {
  hidden: {
    y: number
    opacity: number
  }
  show: {
    y: number
    opacity: number
    transition: {
      type: string
      duration: number
      delay: number
    }
  }
}

export const textVariant = (delay: number): TextVariantAnimation => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

interface FadeInAnimation {
  hidden: {
    x: number | string
    y: number | string
    opacity: number
  }
  show: {
    x: number
    y: number
    opacity: number
    transition: {
      type: string
      delay: number
      duration: number
      ease: string
    }
  }
}

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): FadeInAnimation => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

interface ZoomInAnimation {
  hidden: {
    scale: number
    opacity: number
  }
  show: {
    scale: number
    opacity: number
    transition: {
      type: string
      delay: number
      duration: number
      ease: string
    }
  }
}

export const zoomIn = (delay: number, duration: number): ZoomInAnimation => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

interface SlideInAnimation {
  hidden: {
    x: string
    y: string
  }
  show: {
    x: number
    y: number
    transition: {
      type: string
      delay: number
      duration: number
      ease: string
    }
  }
}

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): SlideInAnimation => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0',
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : '0',
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

interface StaggerContainerAnimation {
  hidden: {}
  show: {
    transition: {
      staggerChildren: number
      delayChildren?: number
    }
  }
}

export const staggerContainer = (
  staggerChildren: number,
  delayChildren?: number
): StaggerContainerAnimation => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
