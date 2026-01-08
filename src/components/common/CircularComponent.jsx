import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CircularComponent = ({ icon, text}) => {
  return (
    <div className="flex gap-2 rounded-full text-white justify-center items-center px-4 py-2 border border-solid text-xl">
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  )
};

export default CircularComponent;