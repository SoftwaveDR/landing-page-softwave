import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../../../data/contact";
import "./WhatsAppFloat.css";

function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Contactar a Softwave por WhatsApp">
      <FaWhatsapp aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppFloat;

