import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants.js";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3,
  },
  {
    skill: "JavaScript",
    icon: TbBrandJavascript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Vite",
    icon: SiVite,
  },
  {
    skill: "Node.js",
    icon: FaNodeJs,
  },
  {
    skill: "Express.js",
    icon: SiExpress,
  },
  {
    skill: "PostgreSQL",
    icon: DiPostgresql,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
];

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
