import React from "react";
import AnimatedSection from "./common/AnimatedSection";
import { PanelDiscussion1Members, PanelDiscussion2Members } from "../constants";

const PanelDiscussion = ({ title }) => {
  const panelDiscussionMembers =
    title === "Panel Discussion I"
      ? PanelDiscussion1Members
      : PanelDiscussion2Members;
  return (
    <div className="p-4 bg-white border-t border-teal-200 flex flex-col gap-4">
      <div className="flex flex-col gap-4 items-center">
        <AnimatedSection>
          <p className="text-2xl text-teal-800 font-semibold md:px-12 pt-4">
            Moderator
          </p>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="w-[100px] h-[100px] md:w-[75px] md:h-[80px] rounded-full flex-shrink-0 overflow-hidden">
              <img
                src={
                  process.env.PUBLIC_URL +
                  panelDiscussionMembers?.moderator?.profileImage
                }
                className="h-full w-full rounded-full object-cover object-top"
                alt="profileImage"
              />
            </div>
            <p className="font-bold text-lg">
              {panelDiscussionMembers?.moderator?.name}
            </p>
          </div>
        </AnimatedSection>
      </div>
      <AnimatedSection delay={200}>
        <p className="text-2xl text-teal-800 font-semibold md:px-12 pt-4">
          Panel Members
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-12 md:px-12 pt-4 pb-10 gap-6">
        {panelDiscussionMembers?.panelMembers.map((member) => (
          <div
            key={member?.id}
            className="col-span-12 lg:col-span-6 rounded-lg border border-solid border-teal-800 overflow-hidden transition-all duration-300 hover:shadow-lg md:hover:scale-[1.02]"
          >
            <AnimatedSection delay={200}>
              <a
                href={member?.linkendInProfile || member?.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <div className="w-[100px] h-[100px] md:w-[75px] md:h-[80px] rounded-full flex-shrink-0 overflow-hidden">
                      <img
                        src={process.env.PUBLIC_URL + member?.profileImage}
                        className="h-full w-full rounded-full object-cover object-top"
                        alt="profileImage"
                      />
                    </div>
                    <p className="font-bold text-lg">{member?.name}</p>
                  </div>
                  <p>{member?.bio}</p>
                </div>
              </a>
            </AnimatedSection>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelDiscussion;
