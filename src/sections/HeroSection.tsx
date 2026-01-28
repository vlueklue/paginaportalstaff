import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, Pill, Factory, Landmark, GraduationCap } from 'lucide-react';

const industries = [
  { id: 'healthcare', name: 'Healthcare', icon: Heart, image: '/images/hero-healthcare.jpg' },
  { id: 'pharmaceutical', name: 'Pharmaceutical', icon: Pill, image: '/images/hero-healthcare.jpg' },
  { id: 'manufacturing', name: 'Manufacturing', icon: Factory, image: '/images/hero-healthcare.jpg' },
  { id: 'finance', name: 'Finance', icon: Landmark, image: '/images/hero-healthcare.jpg' },
  { id: 'education', name: 'Education', icon: GraduationCap, image: '/images/hero-education.jpg' },
];

const awards = [
  { name: 'Hetty', subtext: 'Unexpected Innovation Awards 2022', color: 'bg-gradient-to-br from-pink-500 to-purple-600' },
  { name: 'Health Tech Digital', subtext: 'WINNER AWARDS 2023', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
  { name: 'Workforce Finalist', subtext: '2024', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
  { name: 'HSJ Awards', subtext: 'FINALIST 2025', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
];

const clients = [
  { name: 'NHS Mid and South Essex', subtext: 'NHS Foundation Trust' },
  { name: 'University Hospitals Bristol and Weston', subtext: 'NHS Foundation Trust' },
  { name: 'North Bristol', subtext: 'NHS Trust' },
  { name: 'Nuffield Health', subtext: '' },
];

export default function HeroSection() {
  const [activeIndustry, setActiveIndustry] = useState('healthcare');
  const activeImage = industries.find(i => i.id === activeIndustry)?.image || industries[0].image;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={activeImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-[42px] font-bold leading-tight mb-6"
            >
              A critical tool to support frontline governance
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-white/90 mb-8 max-w-xl"
            >
              An award-winning AI driven platform redefining the way documents are managed and distributed for frontline workers.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Try MyStaff app - See How It Works
            </motion.button>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={`${award.color} rounded-full w-20 h-20 flex flex-col items-center justify-center text-white text-center p-2 shadow-lg`}
                >
                  <span className="text-[10px] font-bold leading-tight">{award.name}</span>
                  <span className="text-[8px] leading-tight mt-1">{award.subtext}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Industry Selector */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Video Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src="/images/frame_02_8s.jpg"
                alt="App preview"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white text-primary px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                  <Play className="w-4 h-4" />
                  <span className="font-medium">Watch Now</span>
                </button>
              </div>
              <div className="absolute top-4 right-4 text-white text-right">
                <p className="text-sm font-medium">Life saving, Time saving, Resource saving app.</p>
              </div>
            </div>

            {/* Industry Selector */}
            <div className="bg-white rounded-2xl shadow-xl p-4">
              <div className="space-y-2">
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  const isActive = activeIndustry === industry.id;
                  return (
                    <button
                      key={industry.id}
                      onClick={() => setActiveIndustry(industry.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white shadow-md'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        isActive ? 'border-white' : 'border-primary'
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-primary'}`} />
                      </div>
                      <span className="text-lg font-medium">{industry.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Client Logos */}
            <div className="text-right space-y-2">
              {clients.map((client, index) => (
                <div key={index} className="text-white">
                  <p className="font-bold text-lg">{client.name}</p>
                  {client.subtext && <p className="text-sm text-white/80">{client.subtext}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
