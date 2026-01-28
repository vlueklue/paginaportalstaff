import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function YellowInfoBar() {
  return (
    <section className="bg-yellow-bar py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 items-center relative">
          {/* Left Card - Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black rounded-2xl p-6 md:p-8"
          >
            <p className="text-white text-base md:text-lg leading-relaxed">
              Los equipos de primera línea en roles de producción, calidad y seguridad están bajo presión constante para cumplir con regulaciones complejas, pero los documentos en los que confían, como los PNT y los protocolos de seguridad, a menudo están <span className="font-bold">enterrados, desactualizados o son inconsistentes</span>.
            </p>
          </motion.div>

          {/* Center Arrow */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Right Card - Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8"
          >
            <p className="text-primary text-base md:text-lg leading-relaxed">
              Ahí es donde entra la aplicación Portal Staff: pone la versión correcta en las manos adecuadas al instante, rastrea el cumplimiento automáticamente y <span className="font-bold text-primary-dark">mantiene a todo su equipo alineado y listo para auditorías</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
