import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a
              href="#accessibility"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Declaración de Accesibilidad
            </a>
            <span className="text-white/40">|</span>
            <a
              href="#privacy"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Política de Privacidad
            </a>
          </div>

          <p className="text-white/60 text-sm">
            © 2025 Portal Staff. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
