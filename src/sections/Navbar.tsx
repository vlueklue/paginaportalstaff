import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Modules', href: '#modules' },
  { name: 'Contact', href: '#contact' },
  { name: 'About', href: '#about' },
  { name: 'News', href: '#news' },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className={`transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
              <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="28" className={`text-xl font-bold ${scrolled ? 'fill-primary' : 'fill-white'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  MyStaff
                </text>
                <circle cx="115" cy="12" r="8" className={scrolled ? 'fill-primary' : 'fill-white'} />
                <path d="M115 4 Q125 4 125 12 Q125 20 115 20" stroke={scrolled ? '#1e4a7e' : 'white'} strokeWidth="2" fill="none" />
                <text x="105" y="32" className={`text-xs ${scrolled ? 'fill-primary' : 'fill-white'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  app
                </text>
              </svg>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium transition-all duration-200 relative group ${
                  scrolled
                    ? 'text-primary hover:text-primary-light'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  scrolled ? 'bg-primary' : 'bg-white'
                }`} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
