'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Terminal, Network, Wifi } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="p-7 pt-0">
      <div className="w-full rounded-[20px] overflow-hidden relative">
        {/* Background */}
        <div className="absolute inset-0 bg-[#f7fbff]" />

        {/* Large branded watermark */}
        <div className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 select-none pointer-events-none">
          <span className="text-[20vw] font-black tracking-tighter text-ink/[0.018] leading-none whitespace-nowrap">WiD&ocirc;me</span>
        </div>

        {/* Animated orbital rings — brand signature */}
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[320px] h-[320px] pointer-events-none hidden lg:block">
          <svg viewBox="0 0 320 320" fill="none" className="w-full h-full">
            <ellipse cx="160" cy="160" rx="155" ry="60" stroke="rgba(69,193,245,0.1)" strokeWidth="0.8" transform="rotate(-20 160 160)">
              <animateTransform attributeName="transform" type="rotate" from="-20 160 160" to="340 160 160" dur="30s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="160" cy="160" rx="140" ry="50" stroke="rgba(59,130,246,0.07)" strokeWidth="0.6" strokeDasharray="4 6" transform="rotate(25 160 160)">
              <animateTransform attributeName="transform" type="rotate" from="25 160 160" to="-335 160 160" dur="25s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="160" cy="160" rx="120" ry="70" stroke="rgba(69,193,245,0.06)" strokeWidth="0.5" transform="rotate(-45 160 160)">
              <animateTransform attributeName="transform" type="rotate" from="-45 160 160" to="315 160 160" dur="35s" repeatCount="indefinite" />
            </ellipse>
            <circle cx="160" cy="160" r="3" fill="rgba(69,193,245,0.25)">
              <animate attributeName="r" dur="3s" repeatCount="indefinite" values="3;4;3" />
            </circle>
            <circle r="2" fill="rgba(69,193,245,0.2)">
              <animateMotion dur="30s" repeatCount="indefinite" path="M315,160 A155,60 -20 1 1 5,160 A155,60 -20 1 1 315,160" />
            </circle>
          </svg>
        </div>

        {/* Accent gradient line at top */}
        <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #45C1F5, #3B82F6, #45C1F5, transparent)' }} />

        <div className="max-w-6xl mx-auto px-8 md:px-12 relative z-10">
          {/* ─── HERO BLOCK: Brand statement ─── */}
          <div className="pt-14 pb-10 border-b border-ink/[0.06]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <Link href="/" className="group inline-block mb-5">
                  <Image src="/logo.webp" alt="WiDôme" width={130} height={52} className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <p className="text-2xl md:text-3xl font-light text-ink/80 tracking-tight leading-snug max-w-md">
                  Votre partenaire<br /><span className="font-bold text-ink">numérique</span> dans le Puy-de-D&ocirc;me<span className="text-sky font-bold">.</span>
                </p>
              </div>

              {/* Service pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Terminal, label: 'Informatique' },
                  { icon: Network, label: 'Réseaux' },
                  { icon: Wifi, label: 'Télécom' },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-ink/[0.06] text-[12px] font-semibold text-ink/50 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                    <Icon className="w-3.5 h-3.5 text-sky" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── MIDDLE: Nav + Contact + CTA ─── */}
          <div className="flex flex-wrap justify-between gap-x-12 gap-y-8 py-8 border-b border-ink/[0.06]">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[['Accueil', '#accueil'], ['Services', '#services'], ['Réalisations', '#realisations'], ['Contact', '#contact']].map(([l, h]) => (
                <a key={h} href={h} onClick={(e) => { e.preventDefault(); document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' }); }} className="text-[13px] font-medium text-ink/40 hover:text-sky transition-colors cursor-pointer">{l}</a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5 text-[13px] text-ink/40">
              <a href="https://www.google.com/maps/search/?api=1&query=3+Rue+de+Riom+63530+Volvic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-ink transition-colors group">
                <span className="w-7 h-7 rounded-full bg-sky/10 group-hover:bg-sky/20 flex items-center justify-center transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-sky" />
                </span>
                3 Rue de Riom, 63530 Volvic
              </a>
              <a href="tel:+33473252582" className="flex items-center gap-2 hover:text-ink transition-colors group">
                <span className="w-7 h-7 rounded-full bg-sky/10 group-hover:bg-sky/20 flex items-center justify-center transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sky" />
                </span>
                04 73 25 25 82
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/franck-besserve-822147100/' },
                { Icon: Mail, href: 'mailto:contact@widome.fr' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 rounded-full bg-white border border-ink/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center text-ink/25 hover:text-white hover:bg-ink hover:border-ink hover:shadow-[0_4px_16px_rgba(26,32,53,0.15)] transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 pl-6 pr-1.5 py-1.5 bg-ink text-white font-semibold text-[12px] rounded-full hover:bg-sky hover:shadow-[0_4px_20px_rgba(69,193,245,0.3)] transition-all duration-300 cursor-pointer ml-1"
              >
                Devis gratuit
                <span className="w-8 h-8 rounded-full bg-sky group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          {/* ─── BOTTOM ─── */}
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-ink/25">&copy; {new Date().getFullYear()} WiD&ocirc;me. Tous droits r&eacute;serv&eacute;s.</p>
            <div className="flex items-center gap-5 text-[11px] text-ink/25">
              <Link href="/mentions-legales" className="hover:text-ink/50 transition-colors">Mentions l&eacute;gales</Link>
              <Link href="/confidentialite" className="hover:text-ink/50 transition-colors">Confidentialit&eacute;</Link>
              <span className="w-px h-3 bg-ink/10" />
              <span>Site r&eacute;alis&eacute; par <a href="https://otika.fr" target="_blank" rel="noopener noreferrer" className="text-ink/40 font-semibold hover:text-sky transition-colors">OTIKA</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
