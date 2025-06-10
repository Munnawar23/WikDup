"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projectsData";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="w-full bg-sky-50 dark:bg-gray-900 text-emerald-950 dark:text-white mx-auto px-4 py-12 md:px-8"
      id="projects"
    >
      <div>
        <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
          Projects
        </h2>
      </div>

      <div className="space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center md:flex-row-reverse md:items-start"
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Left: Just the image */}
            <div className="w-full md:w-1/2">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* Right: Plain text (no Card) */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4">
              <p className="mb-2 text-lg">{project.year}</p>
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-2 text-3xl lg:text-4xl">{project.description}</p>
              <p className="mb-4 text-lg lg:text-2xl">{project.details}</p>

              <table className="min-w-full text-lg lg:text-xl">
                <tbody>
                  <tr>
                    <td className="px-6 py-4 font-medium">Duration</td>
                    <td className="px-6 py-4">{project.figures.duration}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Tech Stack</td>
                    <td className="px-6 py-4">{project.figures.techStack}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
