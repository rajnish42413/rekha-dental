"use client";

import Image from "next/image";
import { useState } from "react";
import { IoCheckmark, IoCopyOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeader from "../general/sectionHeader";
import { message } from "antd";
import { CLOUDINARY_BASE, UPI_ID, WHATSAPP_NUMBER } from "@/utils/endpoints";

export default function PaymentVerificationClient() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    message.success("UPI ID copied.");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(`Hello Rekha Dental,

I have booked an appointment.

My UTR Number:

I have attached the screenshot of my payment for verification.

Thank you.`);

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="min-h-screen  px-4 py-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="PAYMENT VERIFICATION"
          title="Secure your appointment."
          subtitle=" Your appointment slot has been temporarily reserved. Please complete
            the payment and share the transaction details with us on WhatsApp
            for confirmation."
        />

        <div className="lg:mt-16 mt-8 grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-[0_10px_60px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#9A7B4F]">
                  Scan & Pay
                </p>

                <h2 className="mt-2 font-playfair text-xl lg:text-3xl text-[#1E1E1E]">
                  UPI Payment
                </h2>
              </div>

              <div className="rounded-lg bg-[#F5EFE6] px-4 py-2 text-xs text-[#8B6B45]">
                UPI Only
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <div className="rounded-lg border border-[#E8DED1] bg-[#FAF7F2] p-5">
                <Image
                  src={`${CLOUDINARY_BASE}/rekha-dental/payment/paymentQR`}
                  alt="UPI QR"
                  width={320}
                  height={320}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-[#E8DED1] bg-[#F8F4EE] lg:p-6 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9A7B4F]">
                    Booking Fee
                  </p>

                  <h3 className="mt-2 text-xl lg:text-4xl text-[#1E1E1E]">
                    ₹400
                  </h3>
                </div>

                <div
                  className="
        rounded-lg
        border
        border-[#D8C2A0]
        bg-[#EFE4D3]
        px-3
        py-1.5
        text-xs
        font-medium
        uppercase
        text-[#7A5A32]
      "
                >
                  Advance
                </div>
              </div>

              <div className="mt-5 border-t border-[#E6DBCD] pt-5">
                <p className="text-sm leading-7 text-[#6B655E]">
                  This booking fee is required to reserve your appointment slot.
                  Please note that booking fees are
                  <span className="font-semibold text-[#1E1E1E]">
                    {" "}
                    non-refundable
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-[#E8DED1] bg-[#FAF7F2] lg:p-5 p-4">
              <p className="text-sm text-[#8A8A8A]">UPI ID</p>

              <div className="mt-2 flex items-center justify-between gap-4">
                <p className="break-all lg:text-lg text-sm font-medium text-[#1E1E1E]">
                  {UPI_ID}
                </p>

                <button
                  onClick={handleCopy}
                  className="flex h-11 w-11 active:scale-95 duration-200 cursor-pointer items-center justify-center rounded-full bg-brand text-white transition-all"
                >
                  {copied ? (
                    <IoCheckmark size={18} />
                  ) : (
                    <IoCopyOutline size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-[#1D4D3B] lg:p-8 p-6 text-white shadow-[0_10px_60px_rgba(0,0,0,0.08)]">
            <p className="text-sm uppercase tracking-[0.2em] text-[#D6B98C]">
              Verification Process
            </p>

            <h2 className="mt-6 font-playfair text-xl lg:text-4xl leading-tight">
              Complete payment and send us the details.
            </h2>

            <div className="lg:mt-10 mt-6 lg:space-y-6 spacce-y-6">
              {[
                "Scan the QR code using any UPI app.",
                "Complete the payment successfully.",
                "Take a screenshot of the payment confirmation.",
                "Click the WhatsApp button below.",
                "Send your UTR number and screenshot.",
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D6B98C] text-sm font-semibold text-[#1D4D3B]">
                    {index + 1}
                  </div>

                  <p className="leading-7 text-[#E7E7E7] text-md">{step}</p>
                </div>
              ))}
            </div>
            <div className="lg:mt-10 mt-6 rounded-lg border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-[#EAEAEA]">
                Appointment confirmation is subject to payment verification.
                Unverified bookings may be cancelled.
              </p>
            </div>

            <button
              onClick={handleWhatsAppRedirect}
              className="lg:mt-10 mt-6 duration-200 tesxt-sm active:scale-95 cursor-pointer flex w-full items-center justify-center gap-3 rounded-lg bg-[#D6B98C] px-6 py-4 text-[#1D1D1D] transition-all"
            >
              <FaWhatsapp size={22} />
              Send Details on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
