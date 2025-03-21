import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onAnimationComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* Logo/Name reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 inline-block"
          >
            <svg 
              className="w-16 h-16 md:w-20 md:h-20 text-teal-500" 
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.0, ease: "easeInOut" }}
              />
              <motion.path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Ehasan Ahmed
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-1 text-neutral-600 dark:text-neutral-400"
          >
            Software Engineer
          </motion.div>
          
          {/* Animated underline */}
          <motion.div 
            className="h-0.5 bg-teal-500 mt-4 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 2 }}
          />
          
          {/* Skills reveal */}
          <motion.div 
            className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            {["Next.js", "Node.js", "Django Rest", "MultiChain", "Solidity"].map((skill, i) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 2.4 + (i * 0.1) }}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Auto-proceed after animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          onAnimationComplete={onAnimationComplete}
        />
      </div>
    </motion.div>
  );
};

export default IntroAnimation;