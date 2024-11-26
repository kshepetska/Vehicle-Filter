"use client";
import React from "react";
import { Arrow } from "@/app/assets/svgComponents/Arrow";

const PrevButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="absolute z-[9] top-4 left-4 p-2 hover:shadow-primary hover:scale-105 bg-white bg-opacity-10 rounded-full backdrop-blur transition-all duration-300 ease-in-out"
    >
      <Arrow fill="#F7931A" />
    </button>
  );
};

export default PrevButton;
