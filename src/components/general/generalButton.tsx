"use client";

import React from "react";

interface GeneralButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function GeneralButton({
  children,
  className = "",
  ...props
}: GeneralButtonProps) {
  return (
    <button
      {...props}
      className={`
        bg-brand
        cursor-pointer 
        text-white  duration-200
        text-sm
        px-6 
        h-10 lg:h-10 
        transition 
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}
