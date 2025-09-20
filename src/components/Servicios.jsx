import { motion } from "framer-motion";
import { servicios } from "../data/content";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-24 py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-10">Nuestros servicios</h2>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {servicios.map((s) => (
          <motion.div key={s.id} variants={item} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition">
            <img src={s.img} alt={s.titulo} className="rounded-xl mb-4 object-cover w-full h-40" loading="lazy" />
            <h3 className="text-lg font-semibold">{s.titulo}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
