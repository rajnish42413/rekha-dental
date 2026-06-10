import { WHATSAPP_NUMBER } from "@/utils/endpoints";
import { FaWhatsapp } from "react-icons/fa6";


const message = encodeURIComponent(
  "Hi, I’m interested in your services"
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

export default function WhatsAppButton() {
  return (
    <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-7 right-7 z-50 group"
    aria-label="Chat on WhatsApp"
  >
    <div className="bg-[#CBA553] text-white p-2 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-95">
      <FaWhatsapp size={36}/>
    </div>
  </a>
  );
}