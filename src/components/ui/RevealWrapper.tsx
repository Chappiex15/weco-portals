'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
}

export function RevealWrapper({ children, className = '', delay = 0 }: RevealWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px", amount: 0.1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000, // framer-motion uses seconds
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
