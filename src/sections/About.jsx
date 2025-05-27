import { ABOUT } from "../data/aboutData";
import { motion } from "framer-motion";

const About = () => {
  const imageVarients = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="flex h-auto items-center justify-center flex-col bg-sky-50 px-6 text-emerald-950"
      id="about"
    >
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter text-emerald-950">
        About Us
      </h2>

      <div className="mb-10 flex items-center justify-center gap-4">
        {ABOUT.profileImages.map((image, index) => (
          <motion.img
            variants={imageVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: image.delay }}
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-1/4 h-[150px] lg:h-[300px] rounded-3xl shadow-lg object-cover"
          />
        ))}
      </div>

      <motion.p
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 max-w-4xl text-center text-xl lg:text-4xl text-emerald-950"
      >
        {ABOUT.aboutUsText}
      </motion.p>
    </section>
  );
};

export default About;
