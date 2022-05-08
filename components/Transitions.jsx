import React from "react";
import { motion } from "framer-motion";
const easing = [0.6, -0.05, 0.01, 0.99];
const animationConfiguration = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: { opacity: 0 },
};

const Transitions = ({ children }) => {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
};

export default Transitions;
