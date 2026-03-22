'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navItems = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Services', href: '#services' },
  { name: 'Réalisations', href: '#realisations' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#accueil');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled ? 'pt-0 px-0 bg-white border-b border-ink/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.04)]' : 'pt-[1.75rem] px-[1.75rem]'
      }`}
    >
      {/* ── NAV BAR ── */}
      <div
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled
            ? 'max-w-[1440px] mx-auto px-[6vw]'
            : 'bg-transparent px-0'
        }`}
      >
        {/* Thin separator line — hero only */}
        {!scrolled && (
          <div className="absolute bottom-0 left-[2rem] right-[2rem] h-px bg-ink/[0.08]" />
        )}

        <div className={`relative mx-auto flex items-center justify-between transition-all duration-700 ${
          scrolled ? 'h-[80px] px-3' : 'h-[130px] px-4'
        }`}>
          {/* Logo */}
          <Link href="/" className="relative z-50 shrink-0">
            <Image
              src="/logo.webp"
              alt="WiDôme"
              width={130}
              height={52}
              className={`transition-all duration-500 object-contain ${scrolled ? 'h-11' : 'h-24'}`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center transition-all duration-500 ${
            scrolled ? 'gap-0' : 'gap-1'
          }`}>
            {navItems.map((item, i) => (
              <div key={item.href} className="flex items-center">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(item.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.href);
                  }}
                  className={`relative px-4 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                    scrolled ? 'text-[13px]' : 'text-[16px]'
                  } ${
                    activeSection === item.href
                      ? 'text-ink font-semibold'
                      : `${scrolled ? 'text-ink/40 hover:text-ink' : 'text-ink/70 hover:text-ink'} font-medium`
                  }`}
                >
                  {item.name}
                </a>
                {i < navItems.length - 1 && (
                  <span className={`mx-2 rounded-full ${scrolled ? 'bg-ink/10 w-[3px] h-[3px]' : 'bg-ink/25 w-[5px] h-[5px]'}`} />
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-1.5">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); setActiveSection('#contact'); }}
              className={`hidden md:inline-flex items-center font-semibold transition-all duration-500 active:scale-[0.97] ${
                scrolled
                  ? 'pl-5 pr-1.5 py-1.5 text-[12px] bg-ink text-white hover:bg-ink/85 rounded-full gap-3'
                  : 'pl-7 pr-2 py-2 text-[15px] bg-ink text-white hover:bg-ink/85 rounded-[14px] gap-4'
              }`}
            >
              Devis gratuit
              <span className={`inline-flex items-center justify-center bg-sky text-white ${
                scrolled ? 'w-8 h-8 rounded-full' : 'w-11 h-11 rounded-[10px]'
              }`}>
                <ArrowUpRight className={`${scrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
              </span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${scrolled ? 'text-ink hover:bg-ink/5' : 'text-ink hover:bg-ink/10'}`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0f8ff 30%, #E6F4FE 60%, #d4edfc 100%)' }}
          >
            {/* Animated orbital rings — brand signature */}
            <div className="absolute bottom-[-10%] right-[-25%] w-[70vw] aspect-square pointer-events-none">
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full animate-[orbitSpin_30s_linear_infinite]">
                <defs>
                  <linearGradient id="mobileOrbit1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#45C1F5" />
                    <stop offset="50%" stopColor="#1A2035" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#45C1F5" />
                  </linearGradient>
                </defs>
                <ellipse cx="200" cy="200" rx="195" ry="120" stroke="url(#mobileOrbit1)" strokeWidth="1" />
                <circle cx="395" cy="200" r="4" fill="#45C1F5" />
              </svg>
            </div>
            <div className="absolute bottom-[-10%] right-[-25%] w-[70vw] aspect-square pointer-events-none">
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full animate-[orbitSpin_25s_linear_infinite_reverse]">
                <defs>
                  <linearGradient id="mobileOrbit2" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1A2035" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#45C1F5" />
                    <stop offset="100%" stopColor="#1A2035" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <ellipse cx="200" cy="200" rx="195" ry="80" stroke="url(#mobileOrbit2)" strokeWidth="0.8" strokeDasharray="4 6" />
                <circle cx="5" cy="200" r="3" fill="#1A2035" fillOpacity="0.2" />
              </svg>
            </div>
            <div className="absolute bottom-[-10%] right-[-25%] w-[70vw] aspect-square pointer-events-none">
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full animate-[orbitSpin_40s_linear_infinite]">
                <ellipse cx="200" cy="200" rx="195" ry="155" stroke="rgba(69,193,245,0.15)" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Large watermark */}
            <div className="absolute bottom-[8%] right-[-5%] pointer-events-none select-none">
              <span className="text-[28vw] font-black tracking-tighter text-ink/[0.02] leading-none">Wi</span>
            </div>

            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'radial-gradient(circle, rgba(26,32,53,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #45C1F5, transparent)' }} />

            {/* Header */}
            <div className="relative z-10 flex justify-between items-center px-8 pt-8">
              <Image src="/logo.webp" alt="WiDôme" width={100} height={40} className="h-10 w-auto" />
              <button onClick={() => setIsOpen(false)} className="w-11 h-11 rounded-full bg-white border border-ink/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-ink/40 hover:text-ink hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Service pills */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="relative z-10 flex gap-2 px-8 mt-8"
            >
              {['Informatique', 'Réseaux', 'Télécom'].map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-white/60 border border-sky/10 text-[10px] font-bold text-sky uppercase tracking-wider">{s}</span>
              ))}
            </motion.div>

            {/* Nav items */}
            <div className="relative z-10 flex-1 flex flex-col items-start justify-center px-10 gap-0">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full"
                >
                  <a
                    href={item.href}
                    className={`group flex items-center gap-5 py-4 border-b border-ink/[0.04] transition-all ${
                      activeSection === item.href ? 'text-sky' : 'text-ink/30 hover:text-ink'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(item.href);
                    }}
                  >
                    <span className={`text-[13px] font-bold tabular-nums transition-colors ${activeSection === item.href ? 'text-sky' : 'text-ink/15'}`}>0{i + 1}</span>
                    <span className="text-[40px] font-bold tracking-tight leading-none">{item.name}</span>
                    <ArrowUpRight className={`w-5 h-5 ml-auto transition-all ${activeSection === item.href ? 'text-sky opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="relative z-10 px-8 pb-8 flex flex-col gap-5"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 pl-8 pr-2 py-2 rounded-full bg-ink text-white font-bold text-lg hover:bg-sky transition-all duration-300 shadow-[0_8px_24px_rgba(26,32,53,0.2)]"
                onClick={(e) => { e.preventDefault(); setIsOpen(false); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); setActiveSection('#contact'); }}
              >
                Devis gratuit
                <span className="w-10 h-10 rounded-full bg-sky group-hover:bg-white/20 flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>
              <div className="flex items-center justify-center gap-5 text-ink/60 text-[13px] font-medium">
                <a href="tel:+33473252582" className="flex items-center gap-2 hover:text-sky transition-colors">
                  <span className="w-6 h-6 rounded-full bg-sky/15 flex items-center justify-center"><Phone className="w-3 h-3 text-sky" /></span>
                  04 73 25 25 82
                </a>
                <span className="w-px h-4 bg-ink/15" />
                <a href="mailto:contact@widome.fr" className="flex items-center gap-2 hover:text-sky transition-colors">
                  <span className="w-6 h-6 rounded-full bg-sky/15 flex items-center justify-center"><Mail className="w-3 h-3 text-sky" /></span>
                  contact@widome.fr
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
