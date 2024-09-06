"use client";

import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section className="section h-[80vh] text-[5rem] leading-none md:text-9xl md:h-screen flex flex-col justify-center">
      <div className="md:-translate-y-14">
        <h1>
		<motion.span
		  	variants={animationVariants}
			initial="hidden"
			animate="visible"
		  >Your</motion.span>{" "}
		  <motion.span
		  	variants={animationVariants}
			initial="hidden"
			animate="visible"
			transition={{delay: 0.2}}
		  >Story,</motion.span>
        </h1>
        <h1>
          <motion.span
		  	variants={animationVariants}
			initial="hidden"
			animate="visible"
			transition={{delay: 0.8}}
		  >Seamlessly</motion.span>{" "}
          <motion.span
		  	variants={animationVariants}
			initial="hidden"
			animate="visible"
			transition={{delay: 1}}
		  >Edited.</motion.span>
        </h1>
      </div>
    </motion.section>
  );
}
