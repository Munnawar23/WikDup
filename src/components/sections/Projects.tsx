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
      id="projects"
      className="flex flex-col items-center bg-sky-50 text-black dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 py-16 md:py-24 px-4 md:px-8"
    >
      <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-blue-900 dark:text-white uppercase">
        Projects
      </h2>

      <div className="space-y-24 w-full">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center md:flex-row-reverse md:items-start"
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Left: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[220px] sm:h-[300px] md:h-[400px] rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4">
              <p className="mb-2 text-sm text-black dark:text-gray-300">
                {project.year}
              </p>
              <h3 className="mb-2 text-xl font-semibold text-blue-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-2 text-2xl lg:text-3xl font-medium text-blue-900 dark:text-white">
                {project.description}
              </p>
              <p className="mb-4 text-base lg:text-lg text-black dark:text-gray-300">
                {project.details}
              </p>

              <table className="min-w-full text-base lg:text-lg border-t border-b border-gray-300 dark:border-gray-600">
                <tbody>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-6 py-4 font-medium">Tech Stack</td>
                    <td className="px-6 py-4 text-black dark:text-gray-300">
                      {project.figures.techStack}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <td className="px-6 py-4 font-medium">Platform</td>
                    <td className="px-6 py-4 text-black dark:text-gray-300">
                      {project.figures.platform}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Location</td>
                    <td className="px-6 py-4 text-black dark:text-gray-300">
                      {project.figures.location}
                    </td>
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
