"use client";

import { ABOUT } from "@/data/aboutData";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

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
      className="flex items-center justify-center flex-col bg-sky-50 dark:bg-gray-900 px-6 text-emerald-950 dark:text-white py-16"
      id="about"
    >
      <h2 className="mb-8 text-center text-4xl font-semibold tracking-tighter">
        About Us
      </h2>

      <div className="mb-10 flex flex-wrap justify-center gap-6">
        {ABOUT.profileImages.map((image, index) => (
          <motion.div
            key={index}
            variants={imageVarients}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: image.delay }}
          >
            <Avatar className="h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] rounded-3xl shadow-lg">
              <AvatarImage src={image.src} alt={image.alt} className="object-cover" />
              <AvatarFallback>Img</AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 max-w-4xl px-4"
      >
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardContent className="p-6 text-center text-xl lg:text-3xl leading-relaxed text-emerald-950 dark:text-white">
            {ABOUT.aboutUsText}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default About;
