"use client";
import React from "react";
import Link from "next/link";
import { Arrow } from "@/app/assets/svgComponents/Arrow";

const NextButton: React.FC<{ href: string; disabled: boolean }> = ({
  href,
  disabled,
}) => (
  <Link
    href={href}
    className={`flex items-center border border-primary gap-4 justify-between mt-8 px-4 py-2 text-primary font-semibold rounded bg-transparent transition-all duration-300 ease-in-out ${
      disabled
        ? "cursor-not-allowed opacity-50"
        : "hover:shadow-primary hover:scale-105"
    }`}
  >
    See result{" "}
    <Arrow
      transform="rotate(180)"
      fill="#F7931A"
    />
  </Link>
);

export default NextButton;
