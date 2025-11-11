import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "./projects.js";

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(null);
  const intervalRef = useRef(null);

  // ✅ Autoplay cada 4 segundos
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      next();
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="w-full py-16 relative">

      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-[#FF6F6F] mb-4">
        Projects
      </h2>

      {/* Carrusel */}
      <div className="relative flex items-center justify-center">
        {/* Arrow left */}
        <button
          onClick={() => {
            prev();
            startAutoPlay();
          }}
          className="absolute left-4 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>

        {/* Slide */}
        <div className="overflow-hidden w-[80%] max-w-3xl rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="cursor-pointer"
              onClick={() => setModal(projects[index])}
            >
              <img
                src={projects[index].img}
                alt={projects[index].title}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow right */}
        <button
          onClick={() => {
            next();
            startAutoPlay();
          }}
          className="absolute right-4 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full"
        >
          <ChevronRight size={28} className="text-white" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
              startAutoPlay();
            }}
            className={`h-3 w-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-[#FF6F6F]" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ✅ MODAL */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="bg-[#0d2c45] p-6 rounded-xl shadow-2xl w-full max-w-lg text-white relative"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 bg-white/20 p-2 rounded-full"
                onClick={() => setModal(null)}
              >
                <X size={20} />
              </button>

              <img
                src={modal.img}
                className="rounded-lg mb-4 w-full object-cover h-52"
                alt={modal.title}
              />

              <h3 className="text-3xl font-bold text-[#FF6F6F]">
                {modal.title}
              </h3>
              <p className="mt-2 text-white/80">{modal.description}</p>

              <h4 className="mt-4 font-semibold text-[#FF6F6F]">Tech stack:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {modal.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={modal.link}
                target="_blank"
                className="mt-6 inline-block bg-[#FF6F6F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#ff5151] transition"
              >
                Visit Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
