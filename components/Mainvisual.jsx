import { motion } from "framer-motion";
import React from "react";
const easing = [0.5, 1, 0.89, 1];
const animationConfiguration = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: easing,
    },
  },
  exit: { opacity: 0 },
};

const Mainvisual = () => {
  return (
    <div className="c-mainvisual">
      <motion.h1 variants={animationConfiguration}>
        I am a front-end developer living in
        <br />
        Nagoya, Japan.
      </motion.h1>
    </div>
  );
};

export default Mainvisual;
