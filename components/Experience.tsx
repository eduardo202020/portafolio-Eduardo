import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl pl-6">
        Estudios
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 pr-4">
        <ExperienceCard
          clogo="/companyLogo/uni2.png"
          title="Universidad Nacional de Ingenieria"
          company="en Lima"
          startDate="Abril, 2014"
          endDate="Presente"
        />
        <ExperienceCard
          clogo="/companyLogo/platzi.jpg"
          title="Estudiante"
          company="Platzi"
          startDate="Diciembre, 2020"
          endDate="Presente"
        />
        <ExperienceCard
          clogo="/companyLogo/Udemy.png"
          title="Estudiante"
          company="Udemy"
          startDate="Marzo, 2021"
          endDate="Presente"
        />
      </div>
    </motion.div>
  );
}
