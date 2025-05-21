import React from 'react';

const About = () => {
  return (
    <div className="h-screen w-full bg-black text-white font-sans overflow-hidden flex flex-col">
      {/* Hero section */}
      <div className="p-6 md:p-12 lg:p-16 border-b border-gray-800 flex-none">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-5xl leading-tight">
          WikDup is a next-gen technology firm for forward-thinking businesses that need to{' '}
          <span className="underline">solve problems</span>,{' '}
          <span className="underline">build products</span>,{' '}
          <span className="underline">launch solutions</span>, and{' '}
          <span className="underline">deliver services</span>.
        </h1>
      </div>

      {/* What you can expect + Our company section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 lg:p-16 border-b border-gray-800 flex-grow">
        <div className="md:text-right">
          <h2 className="text-2xl font-semibold md:text-3xl">What you can expect:</h2>
        </div>
        <div className="text-lg md:text-xl space-y-6 leading-relaxed">
          <p>
            We partner with the companies and startups who make the world go round —
            they drive the digital revolution, transform industries, build cutting-edge experiences,
            and open new possibilities.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </p>
        </div>
      </div>

      {/* Footer with social links */}
      <div className="p-6 md:p-12 lg:p-16 flex-none">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-lg md:text-xl leading-relaxed">
            Products. Services. Vibes.<br />
            We're WikDup — pioneering the next frontier of technology.
          </p>

          <div className="flex items-center">
            <h3 className="text-xl font-medium mr-4">S:</h3>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:underline">Instagram</a>
              <a href="#" className="text-white hover:underline">Behance</a>
              <a href="#" className="text-white hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
