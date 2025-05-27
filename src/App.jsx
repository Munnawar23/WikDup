import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-sky-50 text-emerald-950">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
