'use client';

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Mouse } from 'lucide-react';
import Image from 'next/image';

// Parallax component for scroll-based animations
function ParallaxImage({ scrollYProgress, offset = 0.5 }: { scrollYProgress: MotionValue<number>, offset?: number }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * offset]);
  
  return (
    <motion.div
      style={{ y }}
      className="relative w-full h-full"
    >
      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-background shadow-2xl">
        <Image
          src="/profile.jpg"
          alt="Jay Doshi"
          fill
          sizes="(max-width: 768px) 256px, (max-width: 1200px) 320px, 384px"
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}

// Scroll indicator with animation
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 1, 0],
        y: [0, 10, 20],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
    >
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <Mouse className="h-4 w-4" />
        <span>Scroll to explore</span>
      </div>
      <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1">
        <motion.div
          className="w-1 h-2 bg-foreground rounded-full"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const textReveal = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      
      <motion.div 
        className="container mx-auto max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="text-center lg:text-left lg:w-1/2">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-hidden"
          >
            <motion.span 
              className="block"
              variants={textReveal}
              custom={0}
            >
              Hi, I&apos;m
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent block font-bold drop-shadow-lg leading-tight py-1"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              variants={textReveal}
              custom={1}
              whileHover={{
                scale: 1.02,
                textShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            >
              Jay Doshi
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 mb-10"
          >
            I design and build exceptional digital experiences that make an impact.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild className="group">
              <Link href="#work">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* Profile Image with Parallax */}
        <motion.div 
          variants={item}
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl -z-10" />
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <ParallaxImage scrollYProgress={scrollYProgress} offset={0.3} />
          <motion.div 
            className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 1,
              type: "spring",
              stiffness: 500,
              damping: 15 
            }}
          >
            Available for work
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </motion.div>
    </section>
  );
}

export default Hero;
