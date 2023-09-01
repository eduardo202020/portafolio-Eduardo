import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-16 lg:pt-28"
    >
      <h3 className="ml-6 absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      {/* <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
        }} */}
      <Image
        width={350}
        height={450}
        src="/extraImages/profilePic.jpg"
        className="-mb-32 md:mb-0 md:ml-16 flex-shrink-0 w-60 h-60 rounded-xl object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
        alt="Eduardo Guevara profile image"
      />

      <div className="px-0 md:px-20">
        <h4 className="text-3xl md:text-4xl font-semibold mt-8 lg:mt-2 font-outfit lg:ml-6 md:ml-6">
          ¿Quién soy?
        </h4>
        <p className="text-sm md:text-base lg:text-lg lg:mt-4 font-light px-4 md:px-7 pt-3 font-outfit">
          Bienvenido a mi rincón tecnologico
          <br />
          <br /> Soy un{" "}
          <span className="text-blue-500 font-semibold">
            desarrollador full stack
          </span>{" "}
          con una pasión por construir aplicaciones web escalables y amigables
          para el usuario. Me encanta crear soluciones elegantes para problemas
          complejos.
          <br /> Junto a mis esfuerzos tecnológicos, soy un ávido lector y
          disfruto adentrarme en temas como la psicología y la filosofía
          mientras disfruto de una{" "}
          <span className="text-blue-500 font-semibold">
            taza fresca de café.
          </span>
        </p>
      </div>
    </motion.div>
  );
}
