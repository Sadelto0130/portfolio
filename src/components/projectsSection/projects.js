import animora_img from '../../assets/petguard.jpeg'
import vetapp_img from '../../assets/vetapp.jpeg'
import cripto_img from '../../assets/cripto_cotizador.jpeg'

export const projects = [
  {
    title: "Animora Pet",
    year: "2025",
    img: animora_img,
    description:
      "Platform to manage pets, medical visits, reminders and multimedia.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    link: "https://animora-pet.netlify.app/",
  },
  {
    title: "VetApp",
    year: "2025",
    img: vetapp_img,
    description:
      "Web application to record veterinary visits and manage pet health history.",
    tech: ["React", "SQL", "Express", "Tailwind"],
    link: "https://vetapp.up.railway.app/",
  },
  {
    title: "Cripto Quote",
    year: "2024",
    img: cripto_img,
    description: "Real-time cryptocurrency price checker with modern UI.",
    tech: ["React", "Tailwind"],
    link: "https://cotizadorcriptovs.netlify.app/",
  },
];