import { motion } from 'framer-motion';

const features = [
  {
    number: '1',
    title: 'Instant Access',
    description: 'Reduces time-based risk exposure by giving staff immediate access to the latest guidance.',
    image: '/images/feature-instant-access.jpg',
    highlight: 'immediate access',
  },
  {
    number: '2',
    title: 'High Uptake',
    description: "Over 90% of staff use MyStaff app. A risk control only works if it's used - and this one is.",
    image: '/images/feature-high-uptake.jpg',
    highlight: '90%',
  },
  {
    number: '3',
    title: 'Material Depth',
    description: 'Covers the full range of operational, and regulatory knowledge across the organisation.',
    image: '/images/feature-material-depth.jpg',
    highlight: 'operational, and regulatory knowledge',
  },
  {
    number: '4',
    title: 'Material Compliance',
    description: 'Ensures documents are accurate, current, and traceable automating policy lifecycle and oversight.',
    image: '/images/feature-material-compliance.jpg',
    highlight: 'accurate, current, and traceable',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function PlatformFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            A tool for controlling knowledge, engagement, and compliance – <span className="text-red-500">in one platform</span>
          </h2>
          <div className="w-16 h-1 bg-accent mt-4" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {feature.number}
                </div>
                
                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-6 bg-white">
                <p className="text-gray-700 leading-relaxed">
                  {feature.description.split(feature.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="font-bold text-primary">{feature.highlight}</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
