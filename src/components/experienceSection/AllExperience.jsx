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
    technologies: ["React", "Emotion", "Vite"],
  },
  {
    project: "VetAPP",
    date: "2025-Jan to 2025-Mar",
    description:
      "VetApp is a fullstack app for managing pets and veterinary records with image uploads and user authentication.",
    technologies: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
  },
  {
    project: "Animora Pet",
    date: "2025-Agu to 2025-Oct",
    description:
      "Animora is a blog dedicated to exposing and raising awareness about cases of animal abuse.",
    technologies: ["React", "Vite", "PostgreSQL", "Express.js"],
  },
  {
    project: "LandingBuilder Pro",
    date: "2025-Nov",
    description:
      "Dynamic landing page featuring animated sections and a fully integrated contact flow using WhatsApp Cloud API and Resend.",
    technologies: ["Next.js", "TailwindCSS", "WhatsApp Cloud API", "Resend"],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experienceData.map((exp, index) => {
        const isLast = index === experienceData.length - 1;
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={exp} />
            {!isLast && (
              <motion.div
                initial={{opacity: 0, x: 40}}
                whileInView= {{opacity: 1, x: 0}}
                transition={{ duration: 0.6, ease: "easeOut"}}
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;
