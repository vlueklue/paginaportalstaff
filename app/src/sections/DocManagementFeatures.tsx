import { motion } from 'framer-motion';
import { Bell, FileStack, Tag, FileSearch, ClipboardCheck, Smartphone, ClipboardList, WifiOff } from 'lucide-react';

const features = [
  {
    icon: Bell,
    title: 'Staff alerts for new/updated documents',
  },
  {
    icon: FileStack,
    title: 'Automated version control & document history',
  },
  {
    icon: Tag,
    title: 'Auto-characterisation & tagging (AI-based)',
  },
  {
    icon: FileSearch,
    title: 'Searchable PDF rendering with mobile optimization',
  },
  {
    icon: ClipboardCheck,
    title: 'Document creation approval & author reminders',
  },
  {
    icon: Smartphone,
    title: 'Mobile-friendly policy & guideline access',
  },
  {
    icon: ClipboardList,
    title: 'Audit-ready access logs & compliance tracking',
  },
  {
    icon: WifiOff,
    title: 'Offline access to critical compliance documents',
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
            Document Management and compliance features
          </h2>
          <div className="w-16 h-1 bg-accent mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl">
            MyStaff app stands out with dedicated features from document lifecycle control, regulatory compliance and easy of access in both field and office environments, critical to highly regulated industries*
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
