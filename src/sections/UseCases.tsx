import { motion } from 'framer-motion';
import { TrendingUp, Search, Scale, Users, Package } from 'lucide-react';

const useCases = [
  {
    icon: TrendingUp,
    title: 'Ventas y Operaciones',
    description: 'Para gestión de precios, regulaciones de tarifas, leyes antimonopolio',
    position: 'top',
  },
  {
    icon: Search,
    title: 'Control de Calidad',
    description: 'Para la regulación de la gestión de calidad del producto',
    position: 'left-top',
  },
  {
    icon: Scale,
    title: 'Legal',
    description: 'Para mitigación de riesgos, regulaciones operativas y económicas, reputación y fraude',
    position: 'left-bottom',
  },
  {
    icon: Users,
    title: 'Recursos Humanos',
    description: 'Para código de conducta, seguridad del empleado y comunicación interna',
    position: 'right-bottom',
  },
  {
    icon: Package,
    title: 'Cadena de Suministro',
    description: 'Desarrollo y equipos, medio ambiente, salud y seguridad, regulación aduanera',
    position: 'right-top',
  },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-24 bg-bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Casos de uso impactantes
          </h2>
          <div className="w-16 h-1 bg-accent mt-4 mx-auto" />
        </motion.div>

        {/* Horizontal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-primary/5 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-bg-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-primary font-bold text-xl mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    </section >
  );
}
