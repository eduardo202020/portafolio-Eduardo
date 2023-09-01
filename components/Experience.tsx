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
        Experiencia
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 ">
        {/* <ExperienceCard
          clogo="/companyLogo/zeza-logo.png"
          title="Frontend developer intern"
          company="at, zeza.tech"
          point1="Contributed to the development of UI and components using Next.js for Xpower Boost, a cutting-edge no-code AI/ML platform with widespread applications across various industries."
          point2="Implemented interactive features using React and harnessed the capabilities of AgGrid to optimize data display and enhance user engagement."
          startDate="April, 2023"
          endDate="July, 2023"
        /> */}
        {/* <ExperienceCard
          clogo="/companyLogo/lhc.jpeg"
          title="Founder"
          company="localhostcoders community"
          point1="Started a community for tech enthusiasts and developers, since then creating content and designing posts!"
          point2="Reached to 3600+ followers on Instagram with organic growth (IG: @localhostcoders)"
          startDate="Dec, 2020"
          endDate="Present"
        />
        <ExperienceCard
          clogo="/companyLogo/github-white.png"
          title="Open-source contributor"
          company="GitHub"
          point1="Participated in Hacktoberfest and started with open source contributions"
          point2="Contributed to the projects like restorePhotos, WeMakeDevs, Abbreve, etc."
          startDate="Oct, 2020"
          endDate="Present"
        />
        <ExperienceCard
          clogo="/companyLogo/wemakedevs.jpeg"
          title="Core team member"
          company="WeMakeDevs community"
          point1="Managing the social media accounts of WeMakeDevs community"
          point2="Part of the core team for intiatives run by the community like Hashnode challenges, etc."
          startDate="Aug, 2022"
          endDate="Present"
        />
        <ExperienceCard
          clogo="/companyLogo/jkiapt.jpeg"
          title="Placement co-ordinator"
          company="Training and Placement Cell, JKIAPT"
          point1="Lead the placement cell of my college and helped students to get placed in top companies"
          point2="Organized various events and workshops for the students to enhance their skills"
          startDate="July, 2022"
          endDate="Present"
        />
        <ExperienceCard
          clogo="/companyLogo/hashnode.png"
          title="Technical content writer"
          company="Nikhil's Blog (nickk2305.hashnode.dev)"
          point1="Writing technical blogs on various topics like JavaScript, NodeJS, ExpressJS, DevOps, etc."
          point2="Got featured on CoCode community for Blog-a-thon contest for my blog on 'Middleware in ExpressJS'."
          startDate="Dec, 2022"
          endDate="Present"
        /> */}
      </div>
    </motion.div>
  );
}
