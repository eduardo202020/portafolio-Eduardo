import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 py-3 -mx-6 md:p-3 flex items-start justify-around md:mx-auto z-50 xl:items-center backdrop-blur-sm bg-slate-800/30 ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          type: "tween",
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}

        <SocialIcon
          url="https://github.com/eduardo202020"
          fgColor="#a9a9a9"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/jhunior-guevara-889483162"
          fgColor="#a9a9a9"
          bgColor="transparent"
          network="linkedin"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          type: "tween",
        }}
        className="flex flex-row items-center text-white cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="whatsapp"
          fgColor="#a9a9a9"
          bgColor="transparent"
          url="https://wa.me/51991004126
"
        />
        {/* <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </p> */}
        <p className="hidden md:inline-flex text-sm text-[#a9a9a9]">
          <a href="https://wa.me/51991004126">Contactar</a>
        </p>
      </motion.div>
    </header>
  );
}
