"use client";

import React, { useState } from "react";
import servicesData from "@/data/servicesData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);

  return (
    <section
      id="services"
      className="flex flex-wrap items-center bg-sky-50 text-blue-900 dark:bg-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 py-16 md:py-24"
    >
      <div className="w-full container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight uppercase">
          Services
        </h2>

        <div className="flex flex-wrap justify-center gap-3 lg:space-x-4 mb-8">
          {servicesData.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab.id === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab)}
              className="text-sm w-[80%] md:w-auto lg:text-base"
            >
              {tab.title}
            </Button>
          ))}
        </div>

        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-6"
        >
          <Card className="w-[90%] max-w-xl lg:w-1/2 border border-gray-300 dark:border-gray-600">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl sm:text-2xl lg:text-3xl font-semibold">
                {activeTab.content}
              </h3>
              <p className="text-base lg:text-lg tracking-tight text-blue-900 dark:text-white">
                {activeTab.description}
              </p>
            </CardContent>
          </Card>

          <div className="lg:w-1/2 flex justify-center">
            <img
              className="w-[75%] sm:w-[70%] lg:w-[80%] h-auto rounded-xl shadow-lg"
              src={activeTab.imgSrc}
              alt={activeTab.title}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
