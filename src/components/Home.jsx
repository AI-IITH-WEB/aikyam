import React from "react";
import CircularComponent from "./common/CircularComponent";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home" className="min-h-[100vh]">
      <div className="flex flex-col gap-10 w-full min-h-[100vh] justify-center items-center bg-gradient-to-r from-gray-700 via-teal-800 to-teal-700 p-20">
        <div className="flex gap-12 w-full justify-center items-center p-4">
          <img
            src="/images/ai-department-logo.jpeg"
            alt="AI dept logo"
            width={170}
            height={170}
          />
          <img
            src="/images/iith-logo.jpeg"
            alt="AI dept logo"
            width={600}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 text-white">
          <p className="font-extrabold text-4xl">
            AIkyam:{" "}
            <span className="text-4xl font-bold">
              Advancing AI Inclusion & Empowerment{" "}
            </span>
          </p>
          <p className="font-semibold text-2xl">
            A Pre-Summit Forum under the India AI Impact Summit 2026
          </p>
        </div>
        <div className="flex gap-4">
          <CircularComponent icon={faLocationDot} text="IIT Hyderabad" />
          <CircularComponent icon={faCalendar} text="16 Jan 2026" />
          <button className="text-white text-xl px-6 py-2 rounded-full border border-solid transition-colors">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
