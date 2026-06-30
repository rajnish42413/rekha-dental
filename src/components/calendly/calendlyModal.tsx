
"use client";

import { PopupModal, useCalendlyEventListener } from "react-calendly";
import { useRouter } from "next/navigation";

interface Props {
  url: string;
  open: boolean;
  onClose: () => void;
}

export default function CalendlyModal({
  url,
  open,
  onClose,
}: Props) {
  const router = useRouter();

  useCalendlyEventListener({
    onEventScheduled: () => {
      router.push("/payment");
    },
  });

  if (!open) return null;

  return (
    <PopupModal
      url={url}
      onModalClose={onClose}
      open={open}
      rootElement={document.body}
    />
  );
}