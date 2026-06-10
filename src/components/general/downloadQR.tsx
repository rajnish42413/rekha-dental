"use client";

import { useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

export default function DownloadTermsQR() {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!qrRef.current) return;

    try {
      const dataUrl = await toPng(qrRef.current, {
        pixelRatio: 4,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "terms-of-service-qr.png";
      link.click();
    } catch (error) {
      console.error("Failed to generate QR:", error);
    }
  };

  const termsUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/terms-of-service`
      : "";

  return (
    <>
      <div className="fixed left-[-9999px] top-0">
        <div ref={qrRef} className="inline-block bg-white p-4">
          <QRCode value={termsUrl} size={250} />
        </div>
      </div>
      <button
        onClick={handleDownload}
        className=" bg-brand px-3 lg:px-5 lg:py-3 py-1.5 text-xs lg:text-sm font-medium text-white transition-all duration-200 active:scale-95 cursor-pointer"
      >
        Download QR
      </button>
    </>
  );
}
