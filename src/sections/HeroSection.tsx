import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, Pill, Factory, Landmark, GraduationCap } from 'lucide-react';

const industries = [
  { id: 'healthcare', name: 'Salud', icon: Heart, image: '/images/hero-healthcare.jpg' },
  { id: 'pharmaceutical', name: 'Farmacéutico', icon: Pill, image: '/images/hero-healthcare.jpg' },
  { id: 'manufacturing', name: 'Manufactura', icon: Factory, image: '/images/hero-healthcare.jpg' },
  { id: 'finance', name: 'Finanzas', icon: Landmark, image: '/images/hero-healthcare.jpg' },
  { id: 'education', name: 'Educación', icon: GraduationCap, image: '/images/hero-education.jpg' },
];



const clients = [
  { name: 'NHS Mid and South Essex', subtext: 'Fundación NHS Trust' },
  { name: 'University Hospitals Bristol and Weston', subtext: 'Fundación NHS Trust' },
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
            alt="Fondo Hero"
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
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Potenciando la <span className="text-accent underline decoration-white/20">Eficiencia</span> en la Primera Línea
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
            >
              Portal Staff es la plataforma líder para gestionar equipos operativos, asegurando cumplimiento, comunicación clara y procesos optimizados en tiempo real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center space-x-2 shadow-lg shadow-black/20">
                <Play className="w-5 h-5 fill-current" />
                <span>Ver Demo</span>
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all bg-white/10 backdrop-blur-sm">
                Saber más
              </button>
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
                alt="Vista previa de la app"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white text-primary px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                  <Play className="w-4 h-4" />
                  <span className="font-medium">Ver ahora</span>
                </button>
              </div>
              <div className="absolute top-4 right-4 text-white text-right">
                <p className="text-sm font-medium">Una app que salva vidas, tiempo y recursos.</p>
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
                      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${isActive
                        ? 'bg-primary text-white shadow-md'
                        : 'hover:bg-gray-50 text-gray-700'
                        }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${isActive ? 'border-white' : 'border-primary'
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
