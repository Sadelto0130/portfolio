import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const experienceData = [
  {
    project: "Crypto Quote",
    date: "2024",
    description:
      "Cripto Cotizador is a React app that shows real-time cryptocurrency prices with a clean, responsive interface.",
    technologies: [
      "React",
      "Emotion",
      "Vite"
    ],
  },
  {
    project: "VetAPP",
    date: "2025-Jan to 2025-Mar",
    description:
      "VetApp is a fullstack app for managing pets and veterinary records with image uploads and user authentication.",
    technologies: [
      "React", 
      "TailwindCSS", 
      "Node.js", 
      "PostgreSQL"
    ],
  },
  {
    project: "BetQuote",
    date: "2025-May to present",
    description:
      "BetQuote is a React app that calculates betting outcomes based on odds and wager amounts.",
    technologies: [
      "React", 
      "TailwindCSS", 
      "Vite", 
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experienceData.map((exp, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={exp} />
            {index < 2 ? (
              <motion.div
              variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.7 }}>
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;
