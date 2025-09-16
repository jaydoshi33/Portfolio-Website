'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
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

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        className="container mx-auto max-w-6xl text-center"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="block">Hi, I'm </span>
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Jay Doshi
          </span>
        </motion.h1>
        
        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          I design and build exceptional digital experiences that make an impact.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
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

        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
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
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
