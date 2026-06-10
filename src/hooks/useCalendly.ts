"use client";

export default function useCalendly() {
  const openCalendly = (url: string) => {
    window.open(url, "_blank");
  };

  return {
    openCalendly,
  };
}