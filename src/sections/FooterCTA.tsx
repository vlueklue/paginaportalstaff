import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <section id="contact" className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Left Content - CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary py-16 px-8 md:px-16 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Transforma la Gestión de tu Capital Humano Hoy
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />

          <p className="text-white text-lg mb-8 max-w-md font-medium">
            Interfaz intuitiva • Todo en uno • Soporte local
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent hover:bg-accent-hover text-primary-dark px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg text-center"
            >
              Comienza tu prueba gratis
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
            >
              Agenda una demo
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block relative h-full min-h-[300px]"
        >
          <img
            src="/images/real-impact.jpg"
            alt="Healthcare professionals"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
