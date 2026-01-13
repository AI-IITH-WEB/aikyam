import React from "react";
import AnimatedSection from "./common/AnimatedSection";
import parse from "html-react-parser";

const PlaneryTalk = ({ speaker }) => {
  return (
    <div className="p-4 bg-white border-t border-teal-200 flex flex-col gap-4">
      <AnimatedSection delay={200}>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] flex-shrink-0 overflow-hidden">
            <img
              src={process.env.PUBLIC_URL + speaker.profileImage}
              className="h-full w-full object-cover object-top"
              alt="profileImage"
            />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <p className="font-bold text-lg">{speaker?.name}</p>
            <p>{speaker.tagLine}</p>
          </div>
          {speaker?.bio && <div className="pt-4">{parse(speaker?.bio)}</div>}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PlaneryTalk;
