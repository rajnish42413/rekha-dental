"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface PremiumInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const PremiumInput = forwardRef<HTMLInputElement, PremiumInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#16412D]">
          {label}
        </label>

        <input
          ref={ref}
          {...props}
          className={clsx(
            "w-full rounded-2xl border border-[#DDD3C8] bg-white px-5 py-4 text-[15px] text-[#16412D] outline-none transition-all duration-300",
            "placeholder:text-gray-400",
            "focus:border-[#16412D] focus:ring-4 focus:ring-[#16412D]/10",
            error && "border-red-400 focus:border-red-500 focus:ring-red-100",
            className
          )}
        />

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PremiumInput.displayName = "PremiumInput";

export default PremiumInput;