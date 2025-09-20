import { motion } from "framer-motion";
import { site } from "../data/content";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 bg-primary text-center text-white py-28 px-4">
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="mx-auto w-24 h-24 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.h1
        className="text-4xl font-bold"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {site.nombre}
      </motion.h1>
      <motion.p
        className="mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {site.lema}
      </motion.p>
      <motion.a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-secondary text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Contáctanos por WhatsApp
      </motion.a>
    </section>
  );
}
