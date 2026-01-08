import React from "react";
import AnimatedSection from "./common/AnimatedSection";

const About = () => {
  return (
    <section id="about" className="p-10">
      <AnimatedSection>
        <div className="container mx-auto px-4 flex flex-col gap-6 items-center justify-center">
          <p className="text-3xl font-semibold text-teal-800">
            About the Event
          </p>
          <p className="text-xl font-normal text-center">
            Preeminent faculty members and researchers working on ML/AI will
            present recent advances in the field, propose central open problems,
            and exchange ideas in inclusive discussion meetings.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
