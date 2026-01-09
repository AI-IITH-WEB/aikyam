import React, { useState } from "react";
import { EventScheduleConstants } from "../constants";
import AnimatedSection from "./common/AnimatedSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const EventSchedule = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (eventId) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

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
                <div className="rounded-lg border border-solid border-teal-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  {/* Main Event Header */}
                  <div
                    className={`flex justify-between items-center p-4 font-medium text-xl transition-all duration-300 hover:bg-teal-600 hover:text-white ${
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
                      <div className="p-4 bg-white border-t border-teal-200 grid grid-cols-12">
                        {event?.image && (
                          <div className="col-span-12 lg:col-span-4">
                            <img
                              src={process.env.PUBLIC_URL + event?.image}
                              alt="event image"
                              height={400}
                              width={400}
                            />
                          </div>
                        )}
                        {event?.detailsTitle && (
                          <div className="py-4 lg:px-10 lg:py-0 col-span-12 lg:col-span-8 flex flex-col gap-4">
                            <p className="text-base">{event?.detailsTitle}</p>
                            {event?.detailsPoints && (
                              <ul
                                style={{ "list-style-type": "disc" }}
                                className="flex flex-col gap-4 px-6 lg:px-10"
                              >
                                {event?.detailsPoints?.map((detail) => (
                                  <li>{detail}</li>
                                ))}
                              </ul>
                            )}
                            {event?.hasSubmissionLinks && (
                              <div className="flex flex-col gap-2">
                                <p>Submission Links:</p>
                                {event?.submissionLinks?.map(
                                  (submissionLink) => (
                                    <div className="flex gap-2" key={submissionLink?.id}>
                                      <p className="whitespace-nowrap">{submissionLink?.title}:</p>
                                      <a
                                        href={submissionLink?.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-all duration-300 hover:shadow-lg text-teal-700 hover:scale-[1.02] hover:text-teal-700 w-[70%] overflow-hidden text-ellipsis"
                                      >
                                        {submissionLink?.link}
                                      </a>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
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
