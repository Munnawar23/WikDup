import React, { useState } from 'react';
import servicesData from '../data/servicesData';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);

  return (
    <section className='bg-sky-50 p-6 text-emerald-950' id='services'>
      <div className="container mx-auto">
        <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>Services</h2>

        <div className="flex items-center justify-center lg:space-x-4">
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold tracking-tighter transition-colors text-sm lg:text-2xl ${
                activeTab.id === tab.id
                  ? "border-b-2 border-blue-100 text-blue-700"
                  : "text-emerald-950"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col items-center lg:flex-row"
        >
          <div className="p-4 lg:w-1/2">
            <h2 className='mb-4 text-3xl lg:text-4xl'>{activeTab.content}</h2>
            <p className='text-lg tracking-tighter text-emerald-950 lg:text-2xl'>
              {activeTab.description}
            </p>
          </div>
          <div className="p-4 lg:w-1/2">
            <img
              className='h-auto w-auto lg:w-[90%] rounded-lg'
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
