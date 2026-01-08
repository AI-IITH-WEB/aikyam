import React from "react";
import { EventScheduleConstants } from "../constants";
import AnimatedSection from "./common/AnimatedSection";

const EventSchedule = () => {
  return (
    <section
      id="schedule"
      className="flex flex-col justify-center items-center gap-4 bg-[#F3F4F4] p-6"
    >
      <AnimatedSection>
        <p className="text-3xl text-teal-800 font-semibold">Event Schedule</p>
      </AnimatedSection>
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 py-10 md:px-40">
            {EventScheduleConstants?.map((event, index) => (
              <AnimatedSection key={event?.id} delay={index * 50}>
                <div className="flex flex-col gap-2 border border-solid border-teal-800 rounded-lg p-4 font-medium text-xl transition-all duration-300 hover:bg-teal-600 hover:text-white hover:shadow-lg hover:scale-[1.02] hover:border-teal-600">
                  <p className="">{event?.time}</p>
                  <p className="">{event?.title}</p>
                  {event?.description && (
                    <p className="">{event?.description}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
