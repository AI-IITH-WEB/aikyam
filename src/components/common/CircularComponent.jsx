import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CircularComponent = ({ icon, text}) => {
  return (
    <div className="flex gap-2 rounded-full text-white justify-center items-center px-8 py-4 border border-solid font-medium text-xl md:text-2xl 2xl:text-3xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  )
};

export default CircularComponent;