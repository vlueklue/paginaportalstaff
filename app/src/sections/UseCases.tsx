import { motion } from 'framer-motion';
import { TrendingUp, Search, Scale, Users, Package } from 'lucide-react';

const useCases = [
  {
    icon: TrendingUp,
    title: 'Sales & Operations',
    description: 'For pricing management, tariffs regulations, antitrust laws',
    position: 'top',
  },
  {
    icon: Search,
    title: 'Quality Control',
    description: 'For product quality management regulation',
    position: 'left-top',
  },
  {
    icon: Scale,
    title: 'Legal',
    description: 'For risk mitigation, operational & economical regulations, reputation & fraud',
    position: 'left-bottom',
  },
  {
    icon: Users,
    title: 'HR',
    description: 'For code of conduct, employee security and internal communication',
    position: 'right-bottom',
  },
  {
    icon: Package,
    title: 'Supply Chain',
    description: 'Development & equipment, environment, health & safety, customs regulation',
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
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Impressive use cases
          </h2>
          <div className="w-16 h-1 bg-accent mt-4" />
        </motion.div>

        {/* Circular Diagram */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-primary/20">
                <div className="text-center">
                  <span className="text-primary font-bold text-lg">MyStaff</span>
                  <span className="text-primary text-sm block">app</span>
                </div>
              </div>
            </motion.div>

            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
              <motion.circle
                cx="400"
                cy="300"
                r="200"
                fill="none"
                stroke="#1e4a7e"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>

            {/* Use Case Cards */}
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const positions: Record<string, { top: string; left: string }> = {
                'top': { top: '0%', left: '50%' },
                'left-top': { top: '25%', left: '5%' },
                'left-bottom': { top: '65%', left: '5%' },
                'right-bottom': { top: '65%', left: '75%' },
                'right-top': { top: '25%', left: '75%' },
              };
              const pos = positions[useCase.position];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="absolute"
                  style={{ 
                    top: pos.top, 
                    left: pos.left,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="bg-white rounded-xl p-5 shadow-lg border border-primary/10 max-w-[220px] hover:shadow-xl transition-shadow duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-primary font-bold text-center mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 text-sm text-center leading-snug">{useCase.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-4">
            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-full flex justify-center mb-8"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary/20">
                <div className="text-center">
                  <span className="text-primary font-bold">MyStaff</span>
                  <span className="text-primary text-xs block">app</span>
                </div>
              </div>
            </motion.div>

            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-md border border-primary/10"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-primary font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
