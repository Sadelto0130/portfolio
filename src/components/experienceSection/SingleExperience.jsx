import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-color2">{experience.project}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <p className="text-white">{experience.description}</p>
      <ul className="list-disc mt-4 pl-4 text-lightGrey">
        {experience.technologies.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
