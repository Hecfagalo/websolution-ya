export const servicios = [
  { id:1, titulo: "Web Plan Básico", desc: "Ideal para emprendedores", img: "/servicio1.jpg" },
  { id:2, titulo: "Web Profesional", desc: "Para negocios en crecimiento", img: "/servicio2.jpg" },
  { id:3, titulo: "E-commerce", desc: "Tu tienda online lista", img: "/servicio3.jpg" },
];

export const testimonios = [
  { id:1, texto: "Excelente servicio, lo recomiendo mucho.", cliente: "María" },
  { id:2, texto: "Muy profesionales y atentos.", cliente: "Carlos" },
  { id:3, texto: "Me ayudaron a crecer con mi negocio.", cliente: "Ana" },
];

export const site = {
  nombre: "WebSolution",
  lema: "Tu negocio crece, tu web también",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER,
};
