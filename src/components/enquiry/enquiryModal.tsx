"use client";

import { useState } from "react";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { EnquiryPayload, submitEnquiry } from "@/api/enquiry";
import PremiumInput from "../general/customInput";
import PremiumTextarea from "../general/premiumTextarea";
import SectionHeader from "../general/sectionHeader";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryPayload>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const handleClose = () => {
    reset();
    setApiError(null);
    setIsSuccess(false);
    onClose();
  };
  const onSubmit = async (data: EnquiryPayload) => {
    setIsSubmitting(true);
    setApiError(null);
    try {
      await submitEnquiry(data);
      setIsSuccess(true);
      reset();
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setApiError(error.message);
      } else {
        setApiError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Modal
    open={isOpen}
    onCancel={handleClose}
    footer={null}
    centered
    width={520}
    className="enquiry-modal"
    styles={{
      body: {
        padding: "2rem",
        background: "#FDFBF7",
      },
    }}
    >
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#16412D]/10 text-[#16412D]">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-[#16412D]">
            Enquiry Submitted!
          </h3>
          <p className="mt-2 text-sm text-[#16412D]/70">
            Thank you. We will get back to you shortly.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6 text-center">
            <SectionHeader
              title="Get in touch"
              subtitle="Our team will contact you soon."
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <PremiumInput
              label="Full Name *"
              placeholder="John Doe"
              error={errors.name?.message}
              {...register("name", { required: "Name is required" })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PremiumInput
                label="Phone Number *"
                placeholder="Enter phone number"
                type="tel"
                error={errors.phone?.message}
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+\s-]{8,15}$/,
                    message: "Invalid phone number formatting",
                  },
                })}
              />

              <PremiumInput
                label="Email Address"
                placeholder="john@example.com"
                type="email"
                error={errors.email?.message}
                {...register("email", {required:"Email is required"})}
              />
            </div>

            <PremiumInput
              label="Required Service"
              placeholder="e.g., Dental Checkup, Teeth Whitening"
              error={errors.service?.message}
              {...register("service", {required:"Service is required"})}
            />

            <PremiumTextarea
              label="Your Message"
              placeholder="How can we help you?"
              error={errors.message?.message}
              {...register("message", {required:"Message is required"})}
            />

            {apiError && (
              <div className="p-3 text-sm text-red-600 bg-red-50 rounded-xl border border-red-200">
                {apiError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 rounded-xl bg-brand px-6 py-2.5 text-md font-medium text-white shadow-lg transition-all duration-300 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Enquiry"
              )}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
