import { motion } from 'framer-motion';
import { FileText, TrendingDown, Share2, Clock, BarChart3, Users } from 'lucide-react';

const stats = [
  {
    icon: FileText,
    title: 'Actualizaciones automatizadas por IA para toda la documentación de regulaciones y políticas.',
  },
  {
    icon: TrendingDown,
    title: 'Reducción de más del 60% en documentos legados no gestionados.',
  },
  {
    icon: Share2,
    title: 'Integración fluida con fuentes internas y externas.',
  },
  {
    icon: Clock,
    title: 'Ahorros significativos de tiempo en auditorías y revisiones.',
  },
  {
    icon: BarChart3,
    title: 'Tableros de cumplimiento en tiempo real totalmente rastreables.',
  },
  {
    icon: Users,
    title: '>90% de adopción del personal en implementaciones reales.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function RealImpact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Impacto Real,<br />Resultados Probados
              </h2>
              <div className="w-16 h-1 bg-accent mt-4" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-primary font-medium leading-snug pt-2">
                      {stat.title}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/real-impact.jpg"
                alt="Profesionales de la salud usando la app Portal Staff"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
