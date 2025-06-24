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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-color2" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
