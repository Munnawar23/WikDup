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
      className="bg-sky-50 text-emerald-950 dark:bg-gray-900 dark:text-white py-2"
      id="services"
    >
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-4xl font-semibold tracking-tighter">
          Services
        </h2>

        <div className="flex flex-wrap justify-center gap-2 lg:space-x-4">
          {servicesData.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab.id === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab)}
              className="text-sm lg:text-base"
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
          className="mt-8 flex flex-col items-center gap-4 lg:flex-row"
        >
          <Card className="w-full max-w-xl lg:w-1/2">
            <CardContent className="p-6">
              <h3 className="mb-4 text-3xl lg:text-4xl font-semibold">
                {activeTab.content}
              </h3>
              <p className="text-lg tracking-tighter text-emerald-950 dark:text-white lg:text-2xl">
                {activeTab.description}
              </p>
            </CardContent>
          </Card>

          <div className="p-4 lg:w-1/2">
            <img
              className="h-auto w-auto lg:w-[90%] rounded-xl shadow-lg"
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
