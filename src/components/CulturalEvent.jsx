import React, { useState } from "react";
import AnimatedSection from "./common/AnimatedSection";
import { CulturalEventArtists } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import parse from "html-react-parser";

const CulturalEvent = () => {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (artist) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [artist]: !prev[artist],
    }));
  };

  return (
    <div className="p-4 bg-white border-t border-teal-200 flex flex-col gap-4">
      <AnimatedSection>
        <p className="text-2xl text-teal-800 font-semibold md:px-12 pt-4">
          Performing Artists
        </p>
      </AnimatedSection>
      <div className="flex flex-col gap-8 md:gap-6 md:px-12 pt-4 pb-10">
        {CulturalEventArtists?.map((artist, index) => (
          <AnimatedSection key={artist?.id} delay={index * 50}>
            <div className="rounded-lg border border-solid border-teal-800 overflow-hidden transition-all duration-300 hover:shadow-lg md:hover:scale-[1.02]">
              <div
                className={`flex justify-between items-center p-4 font-medium text-xl transition-all duration-300 md:hover:bg-teal-600 md:hover:text-white cursor-pointer ${
                  openAccordions[artist?.id] ? "bg-teal-600 text-white" : ""
                }`}
                onClick={() => toggleAccordion(artist?.id)}
              >
                <div className="flex gap-4 items-center">
                  <div className="w-[65px] h-[70px] md:w-[75px] md:h-[80px] rounded-full flex-shrink-0 overflow-hidden">
                    <img
                      src={process.env.PUBLIC_URL + artist.profileSrc}
                      className="h-full w-full rounded-full object-cover"
                      style={{ objectPosition: artist.objectPosition || 'center' }}
                      alt="profileImage"
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="text-base md:text-lg font-semibold">
                      {artist?.name}
                    </p>
                    <p className="text-sm md:text-base">{artist?.tagLine}</p>
                  </div>
                </div>
                <div className="transition-transform duration-300 ml-4 flex-shrink-0">
                  <FontAwesomeIcon
                    icon={
                      openAccordions[artist?.id] ? faChevronUp : faChevronDown
                    }
                    className={`transform transition-transform duration-300 ${
                      openAccordions[artist?.id] ? "rotate-0" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openAccordions[artist?.id]
                    ? "opacity-100 p-4 md:p-10"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="w-[100px] h-[150px] md:w-[280px] md:h-[350px] float-left mr-4 mb-4">
                  <img
                    src={process.env.PUBLIC_URL + artist.profileSrc}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ objectPosition: artist.objectPosition || 'center' }}
                    alt="profileImage"
                  />
                </div>
                <p>{parse(artist?.details)}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default CulturalEvent;
