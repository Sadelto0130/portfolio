import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import criptoImage from "../../assets/cripto_cotizador.jpeg";
import vetappImage from "../../assets/vetapp.jpeg";
import underConstructionImage from "../../assets/web_construction.jpg";
import petguardImage from "../../assets/petguard.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const projects = [
  {
    name: "Animora Pet",
    year: "2025",
    align: "left",
    image: petguardImage,
    link: "https://animora-pet.netlify.app/",
  },
  {
    name: "VetAPP",
    year: "2025",
    align: "right",
    image: vetappImage,
    link: "https://vetapp.up.railway.app/",
  },
  {
    name: "Cripto Quote",
    year: "2024",
    align: "left",
    image: criptoImage,
    link: "https://cotizadorcriptovs.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
