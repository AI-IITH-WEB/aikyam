import React from "react";
import CircularComponent from "./common/CircularComponent";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AnimatedSection from "./common/AnimatedSection";

const Home = () => {
  return (
    <section id="home" className="min-h-[100vh]">
      <div className="flex flex-col gap-16 w-full min-h-[100vh] justify-center items-center bg-gradient-to-r from-gray-700 via-teal-800 to-teal-700 p-10 md:p-20">
        <AnimatedSection>
          <div className="flex gap-6 md:gap-12 2xl:gap-16 w-full justify-center items-center p-4">
            <img
              src={process.env.PUBLIC_URL + "/images/ai-department-logo.jpeg"}
              alt="AI dept logo"
              className="w-20 md:w-28 lg:w-[130px] 2xl:w-[230px] h-auto object-contain"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/iith-logo.jpeg"}
              alt="AI dept logo"
              className="w-64 md:w-96 lg:w-[400px] 2xl:w-[800px] h-auto object-contain"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex flex-col justify-center items-center gap-6 text-white text-center">
            <p className="font-medium text-3xl md:text-4xl 2xl:text-5xl">
              AIkyam: Advancing AI Inclusion & Empowerment
            </p>
            <p className="font-medium text-xl md:text-2xl 2xl:text-3xl">
              A Pre-Summit Forum under the India AI Impact Summit 2026
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <CircularComponent icon={faLocationDot} text="IIT Hyderabad" />
            <CircularComponent icon={faCalendar} text="16 Jan 2026" />
            <button className="text-white text-xl md:text-2xl 2xl:text-3xl font-medium px-8 py-4 rounded-full border border-solid transition-colors">
              Register
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Home;
