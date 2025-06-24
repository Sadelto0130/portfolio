import React from "react";
import me from "../../assets/me2.png";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img className="max-h-[450px] w-auto" src={me} alt="Victor Salazar" />
    </motion.div>
  );
};

export default HeroPic;
