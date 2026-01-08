import React from "react";
import { EventScheduleConstants } from "../constants";

const EventSchedule = () => {
  return (
    <section id="schedule" className="flex flex-col justify-center items-center gap-4 bg-[#F3F4F4] p-6">
      <p className="text-3xl text-teal-800 font-semibold">Event Schedule</p>
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 py-10 px-40">
            {EventScheduleConstants?.map((event) => (
              <div className="flex flex-col gap-2 border border-solid border-teal-800 rounded-lg p-4 font-medium text-xl" key={event?.id}>
                <p className="">{event?.time}</p>
                <p className="">{event?.title}</p>
                {event?.description && <p className="">{event?.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
