import React, { useState } from "react";
import { EventScheduleConstants } from "../constants";
import AnimatedSection from "./common/AnimatedSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import CulturalEvent from "./CulturalEvent";
import AIAndMe from "./AI-and-Me";
import PanelDiscussion from "./PanelDiscussion";

const EventSchedule = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (eventId) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  const renderEventDetailsBasedOnTitle = (event) => {
    const title = event?.title;
    if (title === "AI and Me") {
      return <AIAndMe event={event} />
    } else if (title === "Cultural Event") {
      return <CulturalEvent />
    } else if (title === "Panel Discussion I") {
      return <PanelDiscussion title={title} />
    }
  }

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
          <div className="flex flex-col gap-4 py-10 lg:px-4 xl:px-40">
            {EventScheduleConstants?.map((event, index) => (
              <AnimatedSection key={event?.id} delay={index * 50}>
                <div className={`rounded-lg border border-solid border-teal-800 overflow-hidden transition-all duration-300 hover:shadow-lg ${((event?.isCulturalEvent || event?.isPanelDiscussion) && openAccordions[event?.id]) ? "" : "md:hover:scale-[1.02]"}`}>
                  {/* Main Event Header */}
                  <div
                    className={`flex justify-between items-center p-4 font-medium text-xl transition-all duration-300 md:hover:bg-teal-600 md:hover:text-white ${
                      openAccordions[event?.id] ? "bg-teal-600 text-white" : ""
                    } ${event?.hasToggle ? "cursor-pointer" : ""}`}
                    onClick={() =>
                      event?.hasToggle && toggleAccordion(event?.id)
                    }
                  >
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">{event?.time}</p>
                      <p className="">{event?.title}</p>
                      {event?.description && (
                        <p className="text-base font-normal mt-1">
                          {event?.description}
                        </p>
                      )}
                    </div>
                    {event?.hasToggle && (
                      <div className="transition-transform duration-300 ml-4 flex-shrink-0">
                        <FontAwesomeIcon
                          icon={
                            openAccordions[event?.id]
                              ? faChevronUp
                              : faChevronDown
                          }
                          className={`transform transition-transform duration-300 ${
                            openAccordions[event?.id] ? "rotate-0" : ""
                          }`}
                        />
                      </div>
                    )}
                  </div>

                  {/* Accordion Content */}
                  {event?.hasToggle && (
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openAccordions[event?.id]
                          ? "opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      {renderEventDetailsBasedOnTitle(event)}
                    </div>
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
