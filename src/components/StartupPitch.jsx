import React from "react";

const StartupPictch = () => {
  return (
    <div className="p-4 bg-white border-t border-teal-200 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-4">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/carouselImages/pitch-competition-1-HR.png"
          }
          alt="event image"
          height={400}
          width={400}
        />
      </div>
      <div className="py-4 lg:px-10 lg:py-0 col-span-12 lg:col-span-8 flex flex-col gap-4">
        <div>
          <p>
            As our nation is building momentum for the upcoming{" "}
            <span className="font-semibold">India AI Impact Summit</span> in
            February 2026, the Department of AI at IIT Hyderabad is thrilled to
            announce a flagship{" "}
            <span className="font-semibold">
              Startup Pitch Competition (Theme: AI for All)
            </span>
            , hosted at IIT Hyderabad on{" "}
            <span className="font-semibold">January 16, 2026</span>.
          </p>
          <p>
            This competition is a key part of our pre-summit celebrations, and
            we are seeking the brightest AI-driven startups to showcase their
            innovative solutions.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Why should startups apply?</p>
          <ul style={{ listStyleType: "disc" }} className="flex flex-col gap-2 px-4 lg:px-8">
            <li>
              <span className="font-semibold">High-Stakes Rewards:</span> The
              top three pitches will be handsomely rewarded{" "}
              <span className="font-semibold">(prizes worth ₹ 1 lakh)</span>
            </li>
            <li>
              <span className="font-semibold">National Exposure:</span>A unique
              platform to present their value and impact before the main Summit.
            </li>
            <li>
              <span className="font-semibold">Ecosystem Growth:</span>Rewarding
              engagement opportunities both during and after the event to help
              their businesses flourish.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Event Details:</p>
          <ul>
            <li><span className="font-semibold">Date:</span> January 16, 2026</li>
            <li><span className="font-semibold">Theme:</span> AI for All</li>
            <li><span className="font-semibold">Format:</span> Short-format, 5 minutes "Power Pitches" followed by
            networking.</li>
          </ul>
        </div>
        <div>
          <p>
            The registration link is here:{" "}
            <a
              href="https://forms.gle/yTzFnSCZ9vkcutsb8"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:shadow-lg text-teal-700 hover:scale-[1.02] hover:text-teal-700 w-[70%] overflow-hidden text-ellipsis"
            >
              https://forms.gle/yTzFnSCZ9vkcutsb8
            </a>
          </p>
          <p><span className="font-semibold">Deadline to register:</span> <span className="font-semibold underline text-teal-700">13 January 2026</span></p>
        </div>
      </div>
    </div>
  );
};

export default StartupPictch;
