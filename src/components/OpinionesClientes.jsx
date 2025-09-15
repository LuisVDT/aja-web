import { motion } from "framer-motion";

const casosExito = [
  {
    iniciales: "MC",
    nombre: "María Carmen R.",
    caso: "Despido Injustificado",
    resultado: "✓ Caso Ganado",
    comentario:
      "Después de 8 meses sin recibir mi liquidación, el equipo logró recuperar todo lo que me correspondía más los intereses. Su profesionalismo y dedicación fueron excepcionales.",
    color: "from-blue-400 to-blue-600",
  },
  {
    iniciales: "JL",
    nombre: "Jorge Luis M.",
    caso: "Horas Extra No Pagadas",
    resultado: "✓ Caso Ganado",
    comentario:
      "Mi empresa no me pagaba horas extras desde hace 2 años. Gracias a su asesoría, recuperé más de $180,000 pesos. Los recomiendo completamente.",
    color: "from-green-400 to-green-600",
  },
  {
    iniciales: "AT",
    nombre: "Ana Torres",
    caso: "Hostigamiento Laboral",
    resultado: "✓ Caso Ganado",
    comentario:
      "Me sentí acompañada durante todo el proceso. La atención personalizada marcó la diferencia.",
    color: "from-purple-400 to-purple-600",
  },
];

export default function OpinionesClientes() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Casos de Éxito</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Lo que dicen nuestros clientes satisfechos
        </p>
      </div>

      <div className="overflow-hidden relative max-w-[80%] mx-auto">
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...casosExito, ...casosExito].map((caso, i) => (
            <div
              key={i}
              className="testimonial-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 min-w-[350px] max-w-md flex-shrink-0"
            >
              {/* Ícono de comillas */}
              <div className="quote-icon w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Comentario */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                “{caso.comentario}”
              </p>

              {/* Perfil */}
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${caso.color} rounded-full flex items-center justify-center text-white font-semibold mr-4`}
                >
                  {caso.iniciales}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{caso.nombre}</div>
                  <div className="text-sm text-gray-500">{caso.caso}</div>
                  <div className="text-xs text-green-600 font-medium">{caso.resultado}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
