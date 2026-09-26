export const CONTACT_EMAIL = "contacto@softwave.com";

export const WHATSAPP_MESSAGE =
  "Hola, quiero conocer más sobre Get Code, sus planes y complementos.";

// Al disponer del número comercial, agrega `phone=CODIGOPAISNUMERO&` antes de `text`.
export const WHATSAPP_URL = `https://wa.me/?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

