"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Arrow } from "../assets/svgComponents/Arrow";

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  label: string;
  options: Option[];
  selected: string | null;
  setSelected: (value: string | null) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selected,
  setSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      <label className="block text-sm font-semibold text-primary mb-2">
        {label}
      </label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row gap-2 justify-between w-[200px] p-3 rounded-md bg-white bg-opacity-10 backdrop-blur-md text-white font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/30"
      >
        {selected
          ? options.find((option) => option.value === selected)?.label
          : "Select"}
        <Arrow
          transform={isOpen ? "rotate(90)" : "rotate(-90)"}
          fill="#F7931A"
        />
      </div>

      {isOpen && (
        <Suspense fallback={<div>Loading options...</div>}>
          <div className="absolute w-full bg-white bg-opacity-10 backdrop-blur-md text-white rounded-md shadow-md mt-1 z-10 max-h-[40vh] overflow-y-scroll overflow-x-hidden thin-scrollbar">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className="p-3 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
              >
                {option.label}
              </div>
            ))}
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default Dropdown;
