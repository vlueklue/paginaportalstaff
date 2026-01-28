import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';

const categoryBreakdown = [
  { name: 'Agency / Temp Labour Costs', minPercent: 0.6, maxPercent: 1.2 },
  { name: 'Maintenance & Operational Downtime', minPercent: 0.6, maxPercent: 1.5 },
  { name: 'Training & Certification', minPercent: 0.8, maxPercent: 1.0 },
  { name: 'Administrative Overheads', minPercent: 0.4, maxPercent: 0.8 },
  { name: 'Compliance / Safety Risk Costs', minPercent: 0.3, maxPercent: 0.5 },
  { name: 'Quality Control / Rework Costs', minPercent: 0.4, maxPercent: 1.0 },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function useCountUp(end: number, duration: number = 500) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
}

export default function SavingsCalculator() {
  const [spendValue, setSpendValue] = useState(200); // In millions
  const operationalSpend = spendValue * 1000000;
  
  const totalMinSavings = operationalSpend * 0.031;
  const totalMaxSavings = operationalSpend * 0.06;
  
  const animatedMinSavings = useCountUp(Math.floor(totalMinSavings), 800);
  const animatedMaxSavings = useCountUp(Math.floor(totalMaxSavings), 800);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estimate Savings with MyStaff app
            </h2>
            <div className="w-16 h-1 bg-accent mb-6" />
            
            <p className="text-white/80 text-lg mb-8">
              Use the slider to input your organisation's operational spend and see estimated savings.
            </p>

            {/* Slider */}
            <div className="mb-8">
              <label className="block text-white/80 mb-2">
                Operational Spend (£0 - £400M)
              </label>
              <div className="text-3xl font-bold mb-4">
                {formatCurrency(operationalSpend)}
              </div>
              <Slider
                value={[spendValue]}
                onValueChange={(value) => setSpendValue(value[0])}
                max={400}
                min={0}
                step={1}
                className="w-full"
              />
            </div>

            {/* Results Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-primary font-bold text-xl mb-2">
                Total Estimated Annual Savings: {formatCurrency(animatedMinSavings)} - {formatCurrency(animatedMaxSavings)}
              </h3>
              
              <div className="mt-4">
                <h4 className="text-gray-700 font-semibold mb-3">Category Breakdown:</h4>
                <div className="space-y-2">
                  {categoryBreakdown.map((category, index) => {
                    const minAmount = operationalSpend * (category.minPercent / 100);
                    const maxAmount = operationalSpend * (category.maxPercent / 100);
                    return (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{category.name}:</span>
                        <span className="text-primary font-medium">
                          {formatCurrency(minAmount)} - {formatCurrency(maxAmount)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src="/images/doctor-savings.jpg"
                alt="Doctor using MyStaff app"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
