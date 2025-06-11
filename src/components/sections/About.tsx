"use client";

import { ABOUT } from "@/data/aboutData";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="flex flex-wrap items-center bg-sky-50 text-blue-900 dark:bg-gray-900 dark:text-white border-b border-gray-600 dark:border-gray-200 py-16 md:py-24"
    >
      <div className="w-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="mb-8 text-4xl font-semibold tracking-tighter">
          About Us
        </h2>

        {/* Profile images */}
        <div className="mb-10 flex flex-wrap justify-center gap-6">
          {ABOUT.profileImages.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
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

        {/* About text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl w-full px-4"
        >
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardContent className="p-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-blue-900 dark:text-white">
              {ABOUT.aboutUsText}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
