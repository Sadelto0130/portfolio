import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import criptoImage from "../../assets/cripto_cotizador.jpeg";
import vetappImage from "../../assets/vetapp.jpeg";
import underConstructionImage from "../../assets/web_construction.jpg";
import petguardImage from "../../assets/petguard.jpeg";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";
import ProjectsCarousel from "./ProjectsCarrusel.jsx";


const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        <ProjectsText />
      </div>
      <ProjectsCarousel />
    </div>
  );
};

export default ProjectsMain;
