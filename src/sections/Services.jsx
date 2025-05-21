import React, { useState } from 'react';
import servicesData from '../data/servicesData';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const displayedService = servicesData.find(s => s.id === activeService);

  return (
    <div
      id="services"
      className="min-h-screen w-full py-8 px-6 flex flex-col"
      style={{ backgroundColor: '#f5f1e9', color: 'black' }} // beige background with black text
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center">
          <h1 className="text-xl ml-14 font-medium">WikDup - Services</h1>
          <div className="w-2 h-2 bg-black rounded-full ml-2"></div>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>Think, Build, Scale</li>
          </ul>
        </nav>

        <div className="flex items-center">
          <a
            href="mailto:yourname@example.com"
            className="text-black px-4 py-2 rounded hover:bg-black hover:text-white transition-colors duration-300"
          >
            Let's Talk
          </a>
        </div>
      </header>

      {/* Content */}
      <div
        className="flex flex-grow mt-6"
        onMouseLeave={() => setActiveService(null)}
      >
        {/* Left side - image and description */}
        <div className="w-[45%] flex flex-col ml-12 items-start">
          {displayedService && (
            <>
              <div className="relative mb-4">
                <img
                  src={displayedService.image}
                  alt={displayedService.name}
                  className="w-full max-w-md h-80 object-cover rounded-lg shadow-md mt-2"
                />
              </div>
              <div>
                <h3 className="font-medium text-2xl">
                  {displayedService.description.title}
                </h3>
                <p className="max-w-md text-lg mt-1">
                  {displayedService.description.text}
                </p>
                {displayedService.url && (
                  <a
                    href={displayedService.url}
                    className="text-xs mt-2 inline-block text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {displayedService.url}
                  </a>
                )}
              </div>
            </>
          )}
        </div>

        {/* Right side - service names */}
        <div className="w-1/2 flex flex-col justify-start">
          {servicesData.map(service => (
            <div
              key={service.id}
              className={`text-6xl font-medium mb-6 transition-colors duration-300 cursor-pointer ${
                activeService === service.id ? 'text-black' : 'text-gray-400'
              }`}
              onMouseEnter={() => setActiveService(service.id)}
            >
              {service.name}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom centered line */}
      <div className="mt-auto  ml-20 text-black text-xl font-semibold">
       <h1 className='text-5xl mt-16'>Our Works</h1> 
      </div>
    </div>
  );
};

export default Services;
