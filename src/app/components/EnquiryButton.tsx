"use client";

import React from "react";
import { useEnquiryModal } from "./EnquiryModalContext";

const EnquiryButton: React.FC = () => {
  const { open } = useEnquiryModal();

  return (
    <button
      onClick={open}
      className="
        fixed top-1/2 right-0 z-50
        -translate-y-1/2
        bg-gradient-to-b from-blue-600 to-blue-700
        text-white font-semibold tracking-wide
        px-3 py-2
        shadow-lg
        hover:from-blue-700 hover:to-blue-800
        hover:shadow-xl
        transition-all duration-300
      "
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "translateY(-50%) rotate(180deg)",
        borderRadius: "0", // ensures no rounded edges at all
      }}
    >
      Enquiry Now
    </button>
  );
};

export default EnquiryButton;
