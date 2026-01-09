import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CircularComponent = ({ icon, text, link }) => {
  return (
    <div className="flex gap-2 rounded-full text-white justify-center items-center px-8 py-4 border border-solid font-medium text-xl md:text-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <a href={link} className="flex justify-center items-center gap-2">
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
      </a>
    </div>
  );
};

export default CircularComponent;
