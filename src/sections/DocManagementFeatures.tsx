import { motion } from 'framer-motion';
import { Bell, FileStack, Tag, FileSearch, ClipboardCheck, Smartphone, ClipboardList, WifiOff } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Alertas al personal por documentos nuevos/actualizados',
  },
  {
    icon: FileStack,
    title: 'Control de versiones automatizado e historial de documentos',
  },
  {
    icon: Tag,
    title: 'Autocaracterización y etiquetado (basado en IA)',
  },
  {
    icon: FileSearch,
    title: 'Visualización de PDF con búsqueda y optimización móvil',
  },
  {
    icon: ClipboardCheck,
    title: 'Aprobación de creación de documentos y recordatorios para autores',
  },
  {
    icon: Smartphone,
    title: 'Acceso móvil a políticas y directrices',
  },
  {
    icon: ClipboardList,
    title: 'Registros de acceso listos para auditoría y seguimiento de cumplimiento',
  },
  {
    icon: WifiOff,
    title: 'Acceso sin conexión a documentos críticos de cumplimiento',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
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

export default function DocManagementFeatures() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Gestión Documental y características de cumplimiento
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl">
            La aplicación Portal Staff destaca con funciones dedicadas al control del ciclo de vida de los documentos, el cumplimiento normativo y la facilidad de acceso tanto en el campo como en la oficina, algo crítico para industrias altamente reguladas*
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  borderColor: '#f4b942',
                  transition: { duration: 0.2 }
                }}
                className="bg-card-blue rounded-2xl p-6 border-2 border-accent shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-center font-semibold text-lg leading-snug">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
