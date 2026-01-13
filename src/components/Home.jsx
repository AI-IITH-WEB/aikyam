import React from "react";
import CircularComponent from "./common/CircularComponent";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AnimatedSection from "./common/AnimatedSection";
import { RegistrationFormLink } from "../constants";
import ImageCarousel from "./Carousel";

const Home = () => {
  return (
    <section id="home" className="min-h-[100vh]">
      <div className="flex flex-col gap-16 w-full min-h-[100vh] justify-center items-center bg-gradient-to-r from-gray-700 via-teal-800 to-teal-700 p-10 md:p-20">
        <AnimatedSection delay={200}>
          <div className="flex flex-col justify-center items-center gap-6 text-white text-center">
            <div className="flex gap-4 items-center justify-center">
            <img src={process.env.PUBLIC_URL + "/images/banner-logo.jpg"} alt="bannerImage" className="w-[85%] md:w-[65%]" />
            <img src={process.env.PUBLIC_URL + "/images/ai-impact-logo.png"} alt="impactImage" className="w-[25%] md:w-[15%]" />
            </div>
            <p className="font-medium text-3xl md:text-4xl">
              Conclave on AI for Inclusion & Empowerment
            </p>
            <p className="font-medium text-xl md:text-2xl">
              A Pre-Summit Forum under the India AI Impact Summit 2026
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            <CircularComponent
              icon={faLocationDot}
              text="IIT Hyderabad"
              link="#venue"
            />
            <CircularComponent icon={faCalendar} text="16 January 2026" />
            <a href={RegistrationFormLink} target="_blank" rel="noopener noreferrer">
              <button className="text-white text-xl md:text-2x font-medium px-8 py-4 rounded-full border border-solid transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                Register
              </button>
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <ImageCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Home;
