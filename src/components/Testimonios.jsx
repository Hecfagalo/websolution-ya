import { motion } from "framer-motion";
import { testimonios } from "../data/content";

export default function Testimonios() {
  return (
    <section id="testimonios" className="scroll-mt-24 py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-10">Lo que dicen nuestros clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonios.map((t, i) => (
          <motion.div key={t.id} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15, duration: 0.45 }} viewport={{ once: true }} className="bg-white shadow-md rounded-2xl p-6">
            <p className="italic text-gray-700">“{t.texto}”</p>
            <p className="mt-4 font-semibold text-primary">{t.cliente}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
