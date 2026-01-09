import React from "react";
import AnimatedSection from "./common/AnimatedSection";

const Venue = () => {
  return (
    <secion
      id="venue"
      className="flex flex-col justify-center items-center gap-4 p-6"
    >
      <AnimatedSection>
        <p className="text-3xl text-teal-800 font-semibold">Venue</p>
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <div className="container mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.320650362759!2d78.11719917597166!3d17.587502097007853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf18f98827567%3A0xd2086289fd1428ac!2sConvention%20Centre%2C%20IITH!5e0!3m2!1sen!2sin!4v1767934750510!5m2!1sen!2sin"
            // width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="md:w-[600px]"
          />
        </div>
      </AnimatedSection>
    </secion>
  );
};

export default Venue;
