import { motion } from 'framer-motion';

const modules = [
  {
    title: 'Policies & Procedures',
    description: 'Intelligent access, version control, and compliance tracking',
    image: '/images/frame_02_8s.jpg',
    type: 'phone',
  },
  {
    title: 'Document Creation',
    description: 'End-to-end workflow with full audit trails',
    image: '/images/frame_05_20s.jpg',
    type: 'desktop',
  },
  {
    title: 'Customer Information',
    description: 'Manage & distribute customer-facing materials (leaflets, posters)',
    image: '/images/frame_06_23s.jpg',
    type: 'phone',
  },
  {
    title: 'App',
    description: 'Mobile & web access with alerts, favorites & offline mode',
    image: '/images/frame_02_8s.jpg',
    type: 'phone',
  },
  {
    title: 'Analytics',
    description: 'Real-time compliance dashboards & engagement reporting',
    image: '/images/frame_05_20s.jpg',
    type: 'desktop',
  },
  {
    title: 'Notifications',
    description: 'Automated alerts for new docs, updates & compliance issues',
    image: '/images/frame_06_23s.jpg',
    type: 'notification',
  },
  {
    title: 'QR Code-Based Access',
    description: 'Instant, contactless access via QR codes—ideal for single-use & frontline use',
    image: '/images/frame_12_66s.jpg',
    type: 'qr',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function CoreModules() {
  return (
    <section id="modules" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Core Product Modules
          </h2>
          <div className="w-16 h-1 bg-accent mt-4" />
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100"
            >
              {/* Image Section */}
              <div className="relative h-40 bg-gray-50 overflow-hidden">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content Section */}
              <div className="bg-card-blue p-5">
                <h3 className="text-white font-bold text-lg mb-2">{module.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
