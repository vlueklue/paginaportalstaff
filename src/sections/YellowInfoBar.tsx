import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function YellowInfoBar() {
  return (
    <section className="bg-yellow-bar py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 items-center relative">
          {/* Left Card - Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black rounded-2xl p-6 md:p-8"
          >
            <p className="text-white text-base md:text-lg leading-relaxed">
              Frontline teams in production, quality, and safety roles are under constant pressure to stay compliant with complex regulations, but the documents they rely on, like SOPs and safety protocols, are often <span className="font-bold">buried, outdated, or inconsistent</span>.
            </p>
          </motion.div>

          {/* Center Arrow */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Right Card - Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8"
          >
            <p className="text-primary text-base md:text-lg leading-relaxed">
              That's where MyStaff app comes in: it puts the right version in the right hands instantly, tracks compliance, automatically, and <span className="font-bold text-primary-dark">keeps your whole team aligned and audit-ready</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
