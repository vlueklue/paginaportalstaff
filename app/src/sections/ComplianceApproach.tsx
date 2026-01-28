import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const bulletPoints = [
  'Designed around robust document governance – not just forms and checklists.',
  'AI-driven categorization and metadata reduce manual admin and improve searchability.',
  'Document lifecycle management includes author reminders, approval flows, and publishing oversight.',
  'Alerts and notifications ensure staff are always working from the latest version.',
  'Built-in audit trails and access history meet ISO and industry compliance standards.',
  'Offline access enables field compliance in remote locations without signal or Wi-Fi.',
];

export default function ComplianceApproach() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Compliance-First Document Management Approach
            </h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            
            <ul className="space-y-4">
              {bulletPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Decorative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                    <Check className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">ISO Compliant</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Audit Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
