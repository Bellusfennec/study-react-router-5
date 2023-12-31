import React from "react";
import { useNavigate } from "react-router-dom";
// Icons
import { ChevronLeftIcon } from "@heroicons/react/solid";

const BackButton = ({ label, children }) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handlerClick}
      className="group flex font-semibold text-sm leading-6 text-slate-600 hover:text-slate-400 trans transition-all duration-200"
    >
      <ChevronLeftIcon className="h-6" />
      {children || label}
    </button>
  );
};

export default BackButton;
