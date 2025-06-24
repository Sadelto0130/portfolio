import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const numeroTelefono = "573024781543";
const texto = `Hola, estoy interesado en tus servicios. Me gustaría saber más sobre lo que ofreces`;
const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(texto)}`;

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-[#25d3658e] hover:bg-[#1ebe5b] transition-all duration-300"
      >
        <FaWhatsapp className="text-xl" />
        <span className="text-base font-medium">+57 302 478 1543</span>
      </a>
      <SingleInfo text="sadelto3011@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="Cartagena, Colombia" Image={IoLocation} />
    </div>
  );
};

export default ContactInfo;
