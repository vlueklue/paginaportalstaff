import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Logo or Brand Name could go here if requested, but prompt just said "Logo de Portal Staff" in footer. 
              Assuming text or keeping it simple as per previous design which just had copyright. 
              Prompt says: Logo, Links, Socials, Contact, Copyright.
              I will assume a simple text logo if image not available, or just the copyright/links structure requested.
          */}

          <div className="text-white font-bold text-xl tracking-tight">
            Portal Staff
          </div>

          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">Funcionalidades</a>
            <a href="#" className="hover:text-accent transition-colors">Precios</a>
            <a href="#" className="hover:text-accent transition-colors">Nosotros</a>
            <a href="#" className="hover:text-accent transition-colors">Blog</a>
            <a href="#" className="hover:text-accent transition-colors">Contacto</a>
          </div>

          <div className="text-gray-500 text-sm">
            © 2025 Portal Staff. Todos los derechos reservados.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
