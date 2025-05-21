import { PROJECTS } from "../data/projectData";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className="flex flex-col gap-8 md:flex-row-reverse md:items-start md:gap-12 mb-24"
    >
      <div className="w-full md:w-1/2">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full rounded-3xl shadow-md"
        />
      </div>
      
      <div className="w-full md:w-1/2 space-y-4" style={{ color: "black" }}>
        <h2 className="text-lg font-medium">{project.year}</h2>
        <h3 className="text-2xl font-semibold">
          <a
            href={project.figures.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {project.title}
          </a>
        </h3>
        <p className="text-xl">{project.description}</p>
        <p className="text-lg">{project.details}</p>
        
        <table className="w-full text-left text-base" style={{ color: "black" }}>
          <tbody>
            <tr className="mb-3">
              <td className="py-2 font-medium">Tech Stack</td>
              <td className="py-2">{project.figures.techStack}</td>
            </tr>
            <tr className="mb-3">
              <td className="py-2 font-medium">Duration</td>
              <td className="py-2">{project.figures.duration}</td>
            </tr>
            <tr className="mb-3">
              <td className="py-2 font-medium">Created By</td>
              <td className="py-2">
                <a
                  href={project.figures.creatorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.figures.createdBy}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  // Section animation
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section
      id="projects"
      className="w-full bg-beige-100 py-12 px-4 md:px-8"
      style={{ backgroundColor: "#f5f1e9", color: "black" }}
      ref={sectionRef}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isSectionInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="mt-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectShowcase;