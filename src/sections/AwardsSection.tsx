import { motion } from 'framer-motion';

const awards = [
  {
    name: 'Hetty',
    subtext: 'Premios a la Innovación Inesperada 2022',
    colors: 'from-pink-500 via-purple-500 to-indigo-500',
  },
  {
    name: 'Health Tech Digital',
    subtext: 'GANADOR DE PREMIOS 2023',
    colors: 'from-blue-600 to-cyan-500',
  },
  {
    name: 'Finalista Workforce',
    subtext: '2024',
    colors: 'from-green-500 to-teal-500',
  },
  {
    name: 'Premios HSJ',
    subtext: 'FINALISTA 2025',
    colors: 'from-orange-500 to-red-500',
  },
];

export default function AwardsSection() {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              NUESTROS<br />PREMIOS
            </h2>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${award.colors} flex flex-col items-center justify-center text-white text-center p-3 shadow-lg cursor-pointer`}
              >
                <span className="text-[10px] md:text-xs font-bold leading-tight">{award.name}</span>
                <span className="text-[8px] md:text-[10px] leading-tight mt-1 opacity-90">{award.subtext}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
