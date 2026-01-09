import React from "react";
import AnimatedSection from "./common/AnimatedSection";

const About = () => {
  return (
    <section id="about" className="p-10">
      <div className="container mx-auto px-4 flex flex-col gap-6 items-center justify-center">
        <AnimatedSection>
          <p className="text-3xl font-semibold text-teal-800">
            About the Event
          </p>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="text-lg font-normal">
            The Indian Institute of Technology Hyderabad is proud to host the
            Pre–AI Impact Summit on 16 January 2026 at its Convention Centre, as
            part of the national build-up to the India AI Impact Summit, to be
            held in New Delhi in February 2026. As one of seven nodal institutes
            selected across India, IIT Hyderabad is playing a key role in
            contributing to the academic, technological, and societal
            perspectives to the national AI dialogue. The Pre-Summit serves as a
            platform to bring together students, researchers, industry leaders,
            startups, policymakers, and civil society to translate the broader
            vision of the India AI Impact Summit such as AI for inclusion,
            empowerment, and public good, into meaningful discussions and
            real-world insights. Through plenary talks and panel discussions
            with experts from industry and academia, technology and startup
            showcases, and student-driven initiatives such as “AI and Me”, IIT
            Hyderabad is showcasing its research, innovation, and commitment
            towards AI.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="text-lg font-normal">
            The Pre–AI Impact Summit at IIT Hyderabad serves as one of the key
            contributor to the India AI Impact Summit by translating national AI
            priorities into grounded discussions and real-world insights. The
            learnings, innovations, and perspectives emerging from this platform
            will help enrich and strengthen the policy, collaboration, and
            impact-driven conversations at the Delhi summit.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
