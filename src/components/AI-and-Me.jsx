import React from "react";

const AIAndMe = ({ event }) => {
  return (
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
              style={{ listStyleType: "disc" }}
              className="flex flex-col gap-4 px-6 lg:px-10"
            >
              {event?.detailsPoints?.map((detail, index) => (
                <li key={index + 1}>{detail}</li>
              ))}
            </ul>
          )}
          {event?.hasSubmissionLinks && (
            <div className="flex flex-col gap-2">
              <p>Submission Links:</p>
              {event?.submissionLinks?.map((submissionLink) => (
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
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIAndMe;
