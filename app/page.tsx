'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Terminal, Network, Phone, CheckCircle, X } from 'lucide-react';
import dynamic from 'next/dynamic';
const Globe = dynamic(() => import('@/components/ui/globe'), { ssr: false, loading: () => <div style={{ width: '1040px', height: '1040px' }} /> });



const services = [
  {
    tag: 'Informatique',
    title: 'Équipez,\nprotégez,\nperformez.',
    description: 'Cybersécurité, sauvegarde des données, messagerie professionnelle, postes de travail, serveurs, écrans et copieurs. WiDôme déploie et maintient l\'ensemble de votre parc informatique dans le Puy-de-Dôme.',
    items: ['Cybersécurité & pare-feu', 'Sauvegarde des données', 'Messagerie pro', 'PCs, Serveurs, Écrans', 'Copieurs & multifonctions'],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2600&auto=format&fit=crop',
    color: '#3B82F6',
  },
  {
    tag: 'Réseaux',
    title: 'Connectez\nchaque\nespace.',
    description: 'Réseaux WiFi et câblés, amplification 4G-5G, terminaux de paiement TPE et baies réseaux. Une infrastructure réseau fiable et performante pour votre activité professionnelle.',
    items: ['Réseaux WiFi & câblés', 'Amplification 4G-5G', 'Terminaux de paiement TPE', 'Baies réseaux'],
    image: 'https://images.unsplash.com/photo-1606765962248-7ff407b51667?q=80&w=2600&auto=format&fit=crop',
    color: '#45C1F5',
  },
  {
    tag: 'Télécom',
    title: 'Communiquez\nsans\nlimite.',
    description: 'Accès internet Fibre et 5G, téléphonie fixe et mobile, télévision sur IP. WiDôme vous accompagne dans le choix et le déploiement de vos solutions télécom professionnelles.',
    items: ['Accès internet Fibre, 5G', 'Téléphonie fixe & mobile', 'Télévision sur IP'],
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=2600&auto=format&fit=crop',
    color: '#1A2035',
  },
  {
    tag: 'WiFi Pro',
    title: 'Le WiFi\nqui travaille\npour vous.',
    description: 'Solution WiFi clé en main pour la restauration, l\'hôtellerie et les campings. Accès gratuit ou payant, portail captif personnalisé, navigation sécurisée et conformité légale garantie.',
    items: ['Solution clé en main', 'Accès gratuit ou payant', 'Portail captif personnalisé', 'Navigation sécurisée', 'Conformité légale'],
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2600&auto=format&fit=crop',
    color: '#45C1F5',
  },
];

const ServiceAccordion = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-3 h-[560px] md:h-[620px]">
      {services.map((service, i) => {
        const isActive = active === i;
        return (
          <div
            key={service.tag}
            onMouseEnter={() => setActive(i)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              isActive ? 'flex-[4]' : 'flex-[0.5]'
            }`}
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.tag}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              quality={75}
              className={`object-cover transition-all duration-700 ${isActive ? 'scale-100' : 'scale-110'}`}
            />
            {/* Overlay */}
            <div className={`absolute inset-0 transition-all duration-700 ${
              isActive
                ? 'bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10'
                : 'bg-ink/60 hover:bg-ink/50'
            }`} />

            {/* Collapsed state — vertical tag */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <span className="text-white font-bold text-[15px] tracking-wide whitespace-nowrap -rotate-90">{service.tag}</span>
            </div>

            {/* Expanded state — content */}
            <div className={`absolute inset-0 flex flex-col justify-end p-8 md:p-10 transition-all duration-700 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
            }`}>
              {/* Tag pill */}
              <span
                className="inline-flex items-center self-start px-4 py-1.5 rounded-full text-[12px] font-semibold text-white border border-white/25 mb-5 backdrop-blur-sm"
              >
                {service.tag}
              </span>

              <h3 className="text-3xl md:text-4xl font-black text-white leading-[1.05] tracking-tight mb-4 whitespace-pre-line">
                {service.title}
              </h3>

              <p className="text-white/70 text-[14px] leading-relaxed max-w-md mb-5">
                {service.description}
              </p>

              {/* Service items */}
              <div className="flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-white/80 text-[12px] font-medium border border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const projectData = [
  {
    description: "Hôtel-Restaurant 4★",
    title: "Mildiss — Setup informatique complet",
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80",
    ctaText: "Découvrir le projet",
    ctaLink: "/portfolio",
    content: () => {
      return (
        <p>
          Installation complète du setup informatique pour l&apos;Hôtel-Restaurant 4 étoiles Mildiss. <br /><br />
          Déploiement des caisses enregistreuses connectées, configuration du parc informatique (postes de réception, back-office, bornes) et mise en réseau de l&apos;ensemble de l&apos;établissement. Une solution clé en main pensée pour fluidifier le quotidien opérationnel d&apos;un établissement haut de gamme.
        </p>
      );
    },
  },
  {
    description: "Matériaux écologiques",
    title: "Kenzai — Baie informatique",
    src: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=1600&q=80",
    ctaText: "Découvrir le projet",
    ctaLink: "/portfolio",
    content: () => {
      return (
        <p>
          Installation et câblage d&apos;une baie informatique complète pour Kenzai, distributeur spécialisé dans les matériaux écologiques pour la construction. <br /><br />
          Structuration du réseau interne, organisation du brassage cuivre et fibre, mise en place des switchs managés et sécurisation de l&apos;infrastructure. Un socle réseau fiable pour accompagner la croissance d&apos;une entreprise engagée dans la construction durable.
        </p>
      );
    },
  },
  {
    description: "Organisme de formation",
    title: "ADREC — Baie informatique",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    ctaText: "Découvrir le projet",
    ctaLink: "/portfolio",
    content: () => {
      return (
        <p>
          Déploiement d&apos;une baie informatique pour ADREC, organisme de formation qui accompagne les particuliers dans leurs projets de formation et d&apos;évolution professionnelle. <br /><br />
          Installation du cœur de réseau, raccordement des salles de formation, configuration des accès sécurisés pour les formateurs et les stagiaires. Une infrastructure pensée pour la fiabilité et la simplicité d&apos;usage au quotidien.
        </p>
      );
    },
  },
  {
    description: "Entreprise",
    title: "BV Développement",
    src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1600&q=80",
    ctaText: "Découvrir le projet",
    ctaLink: "/portfolio",
    content: () => {
      return (
        <p>
          Accompagnement informatique et réseau pour BV Développement. <br /><br />
          Projet en cours — détails à venir.
        </p>
      );
    },
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const earthGlobeRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const beforeAfterRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !heroRef.current) return;

    let ctx: any;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      if (cancelled) return;

    ctx = gsap.context(() => {

      // Entry reveal — text appears
      const tl = gsap.timeline();
      tl.from('.architectural-headline span', {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out'
      })
        .from('.hero-ui-element', {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out'
        }, "-=0.6");

      // ── Earth Globe Scroll Zoom ──
      if (earthGlobeRef.current && heroContainerRef.current) {
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=150%',
            scrub: 0.3,
            pin: heroContainerRef.current,
            pinSpacing: true,
          }
        });

        // Globe: zoom in as you scroll down
        scrollTl.fromTo(earthGlobeRef.current,
          { scale: 1, y: '0%' },
          { scale: 2.2, y: '-30%', ease: 'power1.inOut' },
          0
        );

        // Text content: fade out as globe zooms in
        if (heroContentRef.current) {
          scrollTl.fromTo(heroContentRef.current,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -60, ease: 'power2.in' },
            0
          );
        }
      }

      // Case Studies Scroll Reveal
      const cards = gsap.utils.toArray('.project-card-monolith') as HTMLElement[];
      cards.forEach((card) => {
        gsap.from(card, {
          rotationX: 45,
          y: 100,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1,
          }
        });
      });
    }, heroRef.current!);

    // ── Project Orbit Scroll Animation ──
    const orbitWrapper = document.querySelector('.project-orbit-wrapper');
    const orbitPinned = document.querySelector('.project-orbit-pinned');
    const slides = gsap.utils.toArray('.project-slide') as HTMLElement[];
    const gradientOrb = document.querySelector('.gradient-orb');

    if (orbitWrapper && orbitPinned && slides.length > 1 && gradientOrb) {
      const totalSlides = slides.length;
      const anglePerSlide = 25; // degrees of rotation per slide

      // Set transform origin to the orb center (left side)
      slides.forEach((slide) => {
        slide.style.transformOrigin = '-40% 50%';
      });

      const step = 1 / (totalSlides - 1);

      const orbitTl = gsap.timeline({
        scrollTrigger: {
          trigger: orbitWrapper,
          start: 'top top',
          end: `+=${totalSlides * 80}%`,
          scrub: 0,
          pin: orbitPinned,
          pinSpacing: true,
        }
      });

      slides.forEach((slide, i) => {
        if (i > 0) {
          const t = (i - 1) * step;

          // All three happen at the exact same moment, near-instant
          orbitTl.to(gradientOrb, {
            rotation: `+=${anglePerSlide}`,
            duration: step,
            ease: 'none',
          }, t);

          orbitTl.to(slides[i - 1], {
            rotation: -anglePerSlide,
            opacity: 0,
            duration: step * 0.5,
            ease: 'none',
          }, t);

          orbitTl.fromTo(slide,
            { rotation: anglePerSlide, opacity: 0 },
            { rotation: 0, opacity: 1, duration: step * 0.5, ease: 'none' },
            t + step * 0.5
          );
        }
      });
    }

    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [isMounted]);


  if (!isMounted) return (
    <div className="min-h-screen bg-white">
      {/* Skeleton matching hero layout to prevent CLS */}
      <div className="pt-[1.75rem] px-[1.75rem]">
        <div className="h-[90px]" />
      </div>
      <div className="p-7">
        <div className="w-full rounded-[20px] h-[calc(100vh-3.5rem)]" style={{ background: 'linear-gradient(135deg, #E6F4FE 0%, #d4edfc 40%, #c5e4f9 100%)' }} />
      </div>
    </div>
  );

  return (
    <main className="bg-white min-h-screen relative selection:bg-sky selection:text-white font-sans overflow-x-hidden">
      <Header />

      {/* ─── HERO CONTAINER (Nauta-style scroll zoom) ─────────────────── */}
      <section id="accueil" ref={heroRef} className="relative bg-white">
        <div ref={heroContainerRef} className="relative p-7">
          <div className="w-full relative rounded-[20px] overflow-hidden h-[calc(100vh-3.5rem)]"
            style={{ background: 'linear-gradient(135deg, #E6F4FE 0%, #d4edfc 40%, #c5e4f9 100%)' }}>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-[250px] pointer-events-none z-[5]"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(230,244,254,0.6) 40%, rgba(230,244,254,1))' }} />

            {/* WiFi icon — decorative background behind globe */}
            <div className="absolute top-[10%] left-0 right-0 z-[1] pointer-events-none">
              <svg viewBox="0 0 122.88 94.72" className="w-full h-auto opacity-[0.05]" preserveAspectRatio="xMidYMid meet" fill="#2563eb" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.46,31.23c-1.08,0.92-2.42,1.32-3.72,1.22c-1.31-0.1-2.58-0.7-3.5-1.78l-0.02-0.03c-0.91-1.07-1.3-2.41-1.2-3.7 c0.1-1.31,0.7-2.58,1.78-3.5l0.01-0.01c9.06-7.77,18.73-13.65,28.73-17.58c10.08-3.96,20.5-5.93,31-5.84 c10.35,0.09,20.74,2.19,30.9,6.36c9.81,4.03,19.4,10,28.55,17.97c0.11,0.08,0.21,0.17,0.29,0.26c0.96,0.92,1.5,2.13,1.58,3.37 c0.08,1.24-0.29,2.51-1.12,3.55c-0.08,0.12-0.18,0.23-0.29,0.33c-0.92,0.96-2.13,1.5-3.37,1.58c-1.3,0.09-2.65-0.33-3.71-1.26 c-8.27-7.23-16.9-12.62-25.68-16.25c-8.99-3.72-18.14-5.58-27.23-5.66c-9.2-0.08-18.38,1.68-27.31,5.2 C25.25,18.97,16.6,24.25,8.46,31.23L8.46,31.23z M61.44,72.27c3.1,0,5.9,1.26,7.93,3.29c2.03,2.03,3.29,4.84,3.29,7.93 c0,3.1-1.26,5.9-3.29,7.93c-2.03,2.03-4.84,3.29-7.93,3.29c-3.1,0-5.9-1.26-7.94-3.29c-2.03-2.03-3.29-4.84-3.29-7.93 c0-3.09,1.26-5.9,3.29-7.93l0,0C55.54,73.53,58.34,72.27,61.44,72.27L61.44,72.27z M42.07,66.17c-1.1,0.89-2.46,1.26-3.76,1.12 c-1.24-0.13-2.44-0.71-3.32-1.71c-0.1-0.1-0.19-0.21-0.26-0.32c-0.8-1.07-1.12-2.35-0.99-3.59c0.13-1.24,0.71-2.44,1.71-3.32 c0.09-0.09,0.19-0.17,0.29-0.24c4-3.23,8.18-5.7,12.47-7.37c4.35-1.7,8.82-2.57,13.33-2.58c4.45-0.01,8.89,0.81,13.27,2.5 c4.25,1.64,8.44,4.11,12.48,7.41c1.1,0.89,1.73,2.15,1.87,3.45c0.13,1.3-0.23,2.66-1.12,3.76l-0.01,0.01 c-0.89,1.09-2.14,1.72-3.45,1.86c-1.3,0.13-2.66-0.23-3.76-1.12l0,0c-3.14-2.57-6.35-4.47-9.56-5.73c-3.25-1.28-6.5-1.9-9.72-1.89 c-3.25,0.01-6.52,0.67-9.77,1.96C48.46,61.67,45.21,63.62,42.07,66.17L42.07,66.17z M25.81,49.65c-0.08,0.08-0.17,0.16-0.26,0.22 c-1.03,0.84-2.3,1.21-3.53,1.14c-1.27-0.08-2.51-0.63-3.44-1.63c-0.09-0.08-0.16-0.17-0.23-0.26c-0.84-1.03-1.21-2.3-1.14-3.53 c0.08-1.31,0.66-2.59,1.72-3.53c6.81-6.03,13.85-10.59,21.01-13.61c7.18-3.02,14.49-4.51,21.85-4.38c7.27,0.12,14.53,1.8,21.69,5.1 c6.97,3.21,13.86,7.96,20.59,14.3l0.13,0.12c0.95,0.95,1.44,2.2,1.48,3.46c0.04,1.31-0.42,2.63-1.39,3.66l-0.12,0.13 c-0.96,0.95-2.2,1.45-3.46,1.49c-1.31,0.04-2.63-0.42-3.66-1.39c-5.83-5.5-11.73-9.59-17.62-12.35c-5.95-2.78-11.9-4.19-17.8-4.29 c-5.99-0.1-12,1.15-17.96,3.69C37.64,40.58,31.66,44.48,25.81,49.65L25.81,49.65z"/>
              </svg>
            </div>

            {/* Earth Globe — bottom center, scroll-driven zoom */}
            <div
              ref={earthGlobeRef}
              className="absolute -bottom-[680px] left-1/2 -translate-x-1/2 z-[2] pointer-events-none will-change-transform"
              style={{ transformOrigin: 'center center' }}
            >
              <Globe />
            </div>

            {/* Text content — centered, fades in during scroll */}
            <div ref={heroContentRef} className="absolute inset-0 z-10 flex items-center justify-center pt-[130px] pb-[5%]">
              <div className="text-center max-w-3xl px-6">
                <div className="hero-ui-element inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/50 backdrop-blur-sm border border-sky/15 mb-10">
                  <span className="w-2 h-2 rounded-full bg-sky animate-pulse" />
                  <span className="text-[12px] md:text-[13px] font-bold tracking-[0.3em] uppercase text-sky">Informatique · Réseaux · Télécom</span>
                </div>

                <h1 className="architectural-headline flex flex-col leading-[1.1] mb-8" style={{ textTransform: 'none' }}>
                  <span className="text-4xl md:text-6xl lg:text-7xl text-ink font-light tracking-tight">Votre numérique,</span>
                  <span className="text-4xl md:text-6xl lg:text-7xl text-ink font-black tracking-tighter mt-1">simplifié<span className="text-sky">.</span></span>
                </h1>

                <p className="hero-ui-element text-lg md:text-xl text-stone/80 font-light leading-relaxed max-w-xl mx-auto mb-12">
                  Conseil, vente et maintenance pour TPE, PME et artisans dans le Puy-de-Dôme.{' '}
                  <span className="font-semibold text-ink">Un seul interlocuteur.</span>
                </p>

                <div className="hero-ui-element flex flex-col sm:flex-row items-center justify-center gap-5">
                  <Link
                    href="/contact"
                    className="group relative px-12 py-5 bg-ink text-white font-semibold text-[16px] rounded-full overflow-hidden shadow-[0_8px_32px_-8px_rgba(26,32,53,0.4)] hover:shadow-[0_12px_40px_-8px_rgba(26,32,53,0.5)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Consulter un expert <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-sky transition-all duration-300 -z-0 rounded-full" />
                  </Link>

                  <Link
                    href="/services"
                    className="px-6 py-4 text-[15px] font-semibold flex items-center gap-2 text-ink/60 hover:text-ink transition-colors duration-300 group"
                  >
                    Découvrir nos solutions
                    <ArrowRight className="w-4 h-4 text-sky group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY (SOCIAL PROOF) ─────────────────── */}
      <section className="bg-white relative z-20 px-7 mt-4">
        <div className="mx-auto w-full border-b border-ink/[0.06]" />
        <div className="flex items-center h-24 overflow-hidden">
          {/* Label */}
          <div className="shrink-0 pl-4 md:pl-8 pr-10 border-r border-ink/[0.06] h-full flex items-center">
            <span className="text-ink font-bold text-[17px] whitespace-nowrap">Ils nous font confiance</span>
          </div>

          {/* Infinite scroll logos */}
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee [--marquee-duration:40s]">
              <div className="marquee-content gap-14 px-6">
                {[
                  { name: 'Arvernha Resorts', url: 'https://www.arvernha-resorts.com/' },
                  { name: 'Camping de la Croze', url: 'https://www.campingdelacroze.com/' },
                  { name: 'Privilodges', url: 'https://www.privilodges.com/' },
                  { name: 'Hotel Mildiss', url: 'https://mildiss.fr/' },
                  { name: 'Royal Hotel Saint Mart', url: 'https://www.hotel-auvergne.com/' },
                  { name: 'Labonne Carrosserie', url: 'https://www.labonne-carrosserie.com/' },
                  { name: 'Serppav', url: 'https://www.serppav.eu/' },
                  { name: 'Audibat', url: 'https://www.audibat.com/' },
                  { name: 'Badhit', url: 'https://www.badhit.fr/' },
                  { name: 'Adrec Formation', url: 'https://www.adrec-formation.fr/' },
                  { name: 'Nellapp', url: 'https://e-learning.nellapp.com/' },
                  { name: 'Boris Lacher', url: 'https://www.boris-lacher.fr/' },
                  { name: 'ITC BE', url: 'https://www.itc-be.fr/' },
                  { name: 'Kenzai', url: 'https://www.kenzai.fr/' },
                  { name: 'Finidome', url: 'https://www.finidome.fr/' },
                  { name: 'Coffrabat', url: 'https://www.coffrabat.com/' },
                  { name: 'Adelyance', url: 'https://adelyancegroup.fr/' },
                  { name: 'Au Petit Bonheur', url: 'https://www.au-petit-bonheur-riom.com/' },
                  { name: 'Le Faisan Doré', url: 'https://www.lefaisandoreclermontferrand.fr/' },
                ].map((partner) => (
                  <a key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" className="text-xl font-extrabold text-ink/[0.15] tracking-tight uppercase whitespace-nowrap hover:text-sky transition-colors duration-300">{partner.name}</a>
                ))}
                {[
                  { name: 'Arvernha Resorts', url: 'https://www.arvernha-resorts.com/' },
                  { name: 'Camping de la Croze', url: 'https://www.campingdelacroze.com/' },
                  { name: 'Privilodges', url: 'https://www.privilodges.com/' },
                  { name: 'Hotel Mildiss', url: 'https://mildiss.fr/' },
                  { name: 'Royal Hotel Saint Mart', url: 'https://www.hotel-auvergne.com/' },
                  { name: 'Labonne Carrosserie', url: 'https://www.labonne-carrosserie.com/' },
                  { name: 'Serppav', url: 'https://www.serppav.eu/' },
                  { name: 'Audibat', url: 'https://www.audibat.com/' },
                  { name: 'Badhit', url: 'https://www.badhit.fr/' },
                  { name: 'Adrec Formation', url: 'https://www.adrec-formation.fr/' },
                  { name: 'Nellapp', url: 'https://e-learning.nellapp.com/' },
                  { name: 'Boris Lacher', url: 'https://www.boris-lacher.fr/' },
                  { name: 'ITC BE', url: 'https://www.itc-be.fr/' },
                  { name: 'Kenzai', url: 'https://www.kenzai.fr/' },
                  { name: 'Finidome', url: 'https://www.finidome.fr/' },
                  { name: 'Coffrabat', url: 'https://www.coffrabat.com/' },
                  { name: 'Adelyance', url: 'https://adelyancegroup.fr/' },
                  { name: 'Au Petit Bonheur', url: 'https://www.au-petit-bonheur-riom.com/' },
                  { name: 'Le Faisan Doré', url: 'https://www.lefaisandoreclermontferrand.fr/' },
                ].map((partner) => (
                  <a key={partner.name + '-dup'} href={partner.url} target="_blank" rel="noopener noreferrer" className="text-xl font-extrabold text-ink/[0.15] tracking-tight uppercase whitespace-nowrap hover:text-sky transition-colors duration-300">{partner.name}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full border-b border-ink/[0.06]" />
      </section>

      {/* ─── SERVICES — ACCORDION CARDS ────────── */}
      <section id="services" className="pt-32 pb-28 bg-white relative overflow-hidden">
        {/* Decorative animated curves background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute w-[140%] h-full -left-[20%] top-0" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#45C1F5" stopOpacity="0" />
                <stop offset="30%" stopColor="#45C1F5" stopOpacity="0.12" />
                <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="curveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.08" />
                <stop offset="70%" stopColor="#1A2035" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#1A2035" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Main curves */}
            <path d="M0 400 C 200 180, 500 620, 700 400 S 1200 180, 1400 400" stroke="url(#curveGrad1)" strokeWidth="1.2" fill="none">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
                M0 400 C 200 180, 500 620, 700 400 S 1200 180, 1400 400;
                M0 400 C 200 220, 500 580, 700 400 S 1200 220, 1400 400;
                M0 400 C 200 180, 500 620, 700 400 S 1200 180, 1400 400
              " />
            </path>
            <path d="M0 400 C 200 620, 500 180, 700 400 S 1200 620, 1400 400" stroke="url(#curveGrad1)" strokeWidth="1.2" fill="none">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
                M0 400 C 200 620, 500 180, 700 400 S 1200 620, 1400 400;
                M0 400 C 200 580, 500 220, 700 400 S 1200 580, 1400 400;
                M0 400 C 200 620, 500 180, 700 400 S 1200 620, 1400 400
              " />
            </path>

            {/* Secondary dashed curves */}
            <path d="M0 340 C 250 140, 450 540, 700 340 S 1150 140, 1400 340" stroke="url(#curveGrad2)" strokeWidth="0.6" strokeDasharray="5 8" fill="none">
              <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
                M0 340 C 250 140, 450 540, 700 340 S 1150 140, 1400 340;
                M0 360 C 250 180, 450 500, 700 360 S 1150 180, 1400 360;
                M0 340 C 250 140, 450 540, 700 340 S 1150 140, 1400 340
              " />
            </path>
            <path d="M0 460 C 250 660, 450 260, 700 460 S 1150 660, 1400 460" stroke="url(#curveGrad2)" strokeWidth="0.6" strokeDasharray="5 8" fill="none">
              <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
                M0 460 C 250 660, 450 260, 700 460 S 1150 660, 1400 460;
                M0 440 C 250 620, 450 300, 700 440 S 1150 620, 1400 440;
                M0 460 C 250 660, 450 260, 700 460 S 1150 660, 1400 460
              " />
            </path>

            {/* Center horizontal line */}
            <line x1="100" y1="400" x2="1300" y2="400" stroke="#1A2035" strokeWidth="0.4" strokeOpacity="0.06" />

            {/* Animated nodes */}
            <circle cx="700" cy="400" r="8" stroke="#3B82F6" strokeWidth="0.8" fill="none" strokeOpacity="0.15">
              <animate attributeName="r" dur="3s" repeatCount="indefinite" values="6;10;6" />
              <animate attributeName="stroke-opacity" dur="3s" repeatCount="indefinite" values="0.15;0.08;0.15" />
            </circle>
            <circle cx="700" cy="400" r="2.5" fill="#3B82F6" fillOpacity="0.12">
              <animate attributeName="r" dur="3s" repeatCount="indefinite" values="2;3.5;2" />
            </circle>

            <circle cx="350" cy="400" r="5" stroke="#45C1F5" strokeWidth="0.6" fill="none" strokeOpacity="0.1">
              <animate attributeName="r" dur="4s" repeatCount="indefinite" values="4;7;4" />
            </circle>
            <circle cx="1050" cy="400" r="5" stroke="#45C1F5" strokeWidth="0.6" fill="none" strokeOpacity="0.1">
              <animate attributeName="r" dur="4s" repeatCount="indefinite" values="4;7;4" />
            </circle>

            {/* Floating accent dots */}
            <circle cx="175" cy="300" r="2" fill="#45C1F5" fillOpacity="0.1">
              <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="300;280;300" />
            </circle>
            <circle cx="525" cy="500" r="2" fill="#3B82F6" fillOpacity="0.1">
              <animate attributeName="cy" dur="7s" repeatCount="indefinite" values="500;520;500" />
            </circle>
            <circle cx="875" cy="290" r="2" fill="#45C1F5" fillOpacity="0.1">
              <animate attributeName="cy" dur="9s" repeatCount="indefinite" values="290;310;290" />
            </circle>
            <circle cx="1225" cy="510" r="2" fill="#3B82F6" fillOpacity="0.1">
              <animate attributeName="cy" dur="6s" repeatCount="indefinite" values="510;490;510" />
            </circle>

            {/* Small geometric accents */}
            <rect x="246" y="396" width="8" height="8" stroke="#1A2035" strokeWidth="0.5" fill="none" strokeOpacity="0.08" transform="rotate(45 250 400)">
              <animate attributeName="stroke-opacity" dur="5s" repeatCount="indefinite" values="0.08;0.04;0.08" />
            </rect>
            <rect x="1146" y="396" width="8" height="8" stroke="#1A2035" strokeWidth="0.5" fill="none" strokeOpacity="0.08" transform="rotate(45 1150 400)">
              <animate attributeName="stroke-opacity" dur="5s" repeatCount="indefinite" values="0.04;0.08;0.04" />
            </rect>

            {/* Traveling dot along curve */}
            <circle r="2.5" fill="#45C1F5" fillOpacity="0.2">
              <animateMotion dur="8s" repeatCount="indefinite" path="M0 400 C 200 180, 500 620, 700 400 S 1200 180, 1400 400" />
            </circle>
            <circle r="2.5" fill="#3B82F6" fillOpacity="0.2">
              <animateMotion dur="8s" repeatCount="indefinite" path="M0 400 C 200 620, 500 180, 700 400 S 1200 620, 1400 400" />
            </circle>
          </svg>
        </div>

        <div className="container-business pb-16 relative z-10">
          <div className="max-w-3xl">
            <span className="text-sky font-bold tracking-[0.3em] text-[11px] uppercase mb-5 block">Nos expertises</span>
            <h2 className="text-4xl md:text-6xl text-ink tracking-tighter leading-[0.9] mb-8">
              <span className="font-extralight">Solution</span> <span className="font-black">globale</span><br /><span className="font-black italic text-stone">pour votre entreprise.</span>
            </h2>
            <p className="text-lg text-stone font-light max-w-xl leading-relaxed">
              Audit, installation, maintenance et assistance. Un seul interlocuteur dans le Puy-de-Dôme pour l&apos;ensemble de vos besoins numériques.
            </p>
          </div>
        </div>

        <div className="container-business">
          <ServiceAccordion />
        </div>
      </section>

      {/* ─── CHIFFRES CLÉS (3 bandeaux empilés) ─────────────────── */}
      <section className="bg-white relative z-20 px-7 mt-4">
        <div className="mx-auto w-full border-b border-ink/[0.06]" />

        {/* Réseau */}
        <div className="flex items-center h-24 overflow-hidden border-b border-ink/[0.06]">
          <div className="shrink-0 pl-4 md:pl-8 pr-10 border-r border-ink/[0.06] h-full flex items-center min-w-[180px]">
            <span className="text-ink font-bold text-[17px] whitespace-nowrap flex items-center gap-2">
              <Network className="w-4 h-4 text-sky shrink-0" />
              Réseau
            </span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee [--marquee-duration:20s]">
              <div className="marquee-content gap-0 px-6">
                {[...Array(2)].flatMap((_, dup) =>
                  [
                    { value: '60+', label: 'Installations réseaux' },
                    { value: '200+', label: 'Bornes WiFi' },
                    { value: '25 ans', label: "D'expérience" },
                    { value: '60+', label: 'Installations réseaux' },
                    { value: '200+', label: 'Bornes WiFi' },
                    { value: '25 ans', label: "D'expérience" },
                    { value: '60+', label: 'Installations réseaux' },
                    { value: '200+', label: 'Bornes WiFi' },
                    { value: '25 ans', label: "D'expérience" },
                  ].map((stat, i) => (
                    <div key={`r-${dup}-${i}`} className="flex items-center gap-4 px-10">
                      <span className="text-3xl md:text-4xl font-black text-ink tracking-tighter whitespace-nowrap">{stat.value}</span>
                      <p className="text-stone/50 text-[12px] font-bold uppercase tracking-wide whitespace-nowrap">{stat.label}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Télécom */}
        <div className="flex items-center h-24 overflow-hidden border-b border-ink/[0.06]">
          <div className="shrink-0 pl-4 md:pl-8 pr-10 border-r border-ink/[0.06] h-full flex items-center min-w-[180px]">
            <span className="text-ink font-bold text-[17px] whitespace-nowrap flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky shrink-0" />
              Télécom
            </span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee-reverse [--marquee-duration:22s]">
              <div className="marquee-content gap-0 px-6">
                {[...Array(2)].flatMap((_, dup) =>
                  [
                    { value: '180+', label: 'Téléphones installés' },
                    { value: '51', label: 'Sites déployés' },
                    { value: '112', label: 'Fibres connectées' },
                    { value: '180+', label: 'Téléphones installés' },
                    { value: '51', label: 'Sites déployés' },
                    { value: '112', label: 'Fibres connectées' },
                    { value: '180+', label: 'Téléphones installés' },
                    { value: '51', label: 'Sites déployés' },
                    { value: '112', label: 'Fibres connectées' },
                  ].map((stat, i) => (
                    <div key={`t-${dup}-${i}`} className="flex items-center gap-4 px-10">
                      <span className="text-3xl md:text-4xl font-black text-ink tracking-tighter whitespace-nowrap">{stat.value}</span>
                      <p className="text-stone/50 text-[12px] font-bold uppercase tracking-wide whitespace-nowrap">{stat.label}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Informatique */}
        <div className="flex items-center h-24 overflow-hidden">
          <div className="shrink-0 pl-4 md:pl-8 pr-10 border-r border-ink/[0.06] h-full flex items-center min-w-[180px]">
            <span className="text-ink font-bold text-[17px] whitespace-nowrap flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sky shrink-0" />
              Informatique
            </span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="animate-marquee [--marquee-duration:25s]">
              <div className="marquee-content gap-0 px-6">
                {[...Array(2)].flatMap((_, dup) =>
                  [
                    { value: '700+', label: 'PCs & 250 écrans installés' },
                    { value: '280+', label: 'PCs reconditionnés' },
                    { value: '800+ To', label: 'De données sauvegardées' },
                    { value: '6 ans', label: 'Durée de vie moyenne des PCs' },
                    { value: '700+', label: 'PCs & 250 écrans installés' },
                    { value: '280+', label: 'PCs reconditionnés' },
                    { value: '800+ To', label: 'De données sauvegardées' },
                    { value: '6 ans', label: 'Durée de vie moyenne des PCs' },
                  ].map((stat, i) => (
                    <div key={`i-${dup}-${i}`} className="flex items-center gap-4 px-10">
                      <span className="text-3xl md:text-4xl font-black text-ink tracking-tighter whitespace-nowrap">{stat.value}</span>
                      <p className="text-stone/50 text-[12px] font-bold uppercase tracking-wide whitespace-nowrap">{stat.label}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full border-b border-ink/[0.06]" />
      </section>

      {/* ─── CARROUSEL CHANTIERS ───────────────────── */}
      <section className="bg-white py-16 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none bg-gradient-to-r from-[#E6F4FE]/80 via-[#E6F4FE]/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-40 z-10 pointer-events-none bg-gradient-to-l from-[#E6F4FE]/80 via-[#E6F4FE]/40 to-transparent" />
        <div className="animate-marquee [--marquee-duration:35s]">
          <div className="marquee-content gap-3">
            {[
              '/adrec-margeride-2023.webp',
              '/img_9765_redimensionner.webp',
              '/mildiss-materiel-informatique.webp',
              '/img_9237.webp',
              '/img_0232.webp',
              '/mildiss-materiel-informatique-2.webp',
              '/img_20201029_180654.webp',
              '/mildiss-caisse-.webp',
              '/adrec-margeride-2023.webp',
              '/img_9765_redimensionner.webp',
              '/mildiss-materiel-informatique.webp',
              '/img_9237.webp',
              '/img_0232.webp',
              '/mildiss-materiel-informatique-2.webp',
              '/img_20201029_180654.webp',
              '/mildiss-caisse-.webp',
            ].map((src, i) => (
              <div key={`chantier-${i}`} className="shrink-0 w-[320px] h-[200px] rounded-2xl overflow-hidden">
                <Image src={src} alt={`Chantier ${i + 1}`} width={320} height={200} className="w-full h-full object-cover" loading="lazy" sizes="320px" quality={75} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIAL CASE STUDIES ───────────────────── */}
      <section id="realisations" className="relative bg-white pt-24">
        <div className="container-business pb-16">
          <span className="text-sky font-bold tracking-[0.3em] text-[11px] uppercase mb-5 block">Réalisations</span>
          <h2 className="text-4xl md:text-6xl text-ink tracking-tighter leading-[0.9]">
            <span className="font-extralight">Nos</span> <span className="font-black">projets</span><br /><span className="font-black italic text-stone">récents.</span>
          </h2>
        </div>
        <div className="project-orbit-wrapper" ref={projectsRef}>
          <div className="project-orbit-pinned relative h-screen overflow-hidden">

            {/* ── LEFT: Gradient semi-circle + orbiting ellipses ── */}
            <div className="absolute left-0 top-0 bottom-0 w-[50%] pointer-events-none">
              {/* Semi-circle gradient — rotates on scroll */}
              <div
                className="gradient-orb absolute top-1/2 -translate-y-1/2 -left-[45%] w-[90%] aspect-square rounded-full will-change-transform flex items-center justify-center"
                style={{
                  background: 'rgba(69,193,245,0.35)',
                  transformOrigin: 'center center',
                }}
              >
                {/* WiFi icon inside orb */}
                <img src="/wifi-line-icon.svg" alt="" className="w-[52%] h-auto opacity-[0.08] pointer-events-none select-none -translate-x-[25%]" />
              </div>

              {/* Orbiting ellipses container */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-[45%] w-[90%] aspect-square">
                {/* Orbit 1 — solid, slow */}
                <div className="absolute inset-[-15%] animate-[orbitSpin_30s_linear_infinite]">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <defs>
                      <linearGradient id="orbit1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#45C1F5" />
                        <stop offset="50%" stopColor="#1A2035" />
                        <stop offset="100%" stopColor="#45C1F5" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="200" cy="200" rx="195" ry="140" stroke="url(#orbit1Grad)" strokeWidth="1.2" transform="rotate(-15 200 200)" />
                    <circle cx="395" cy="200" r="4" fill="#45C1F5" transform="rotate(-15 200 200)" />
                    <rect x="5" y="197" width="6" height="6" stroke="#1A2035" strokeWidth="0.8" fill="none" transform="rotate(-15 200 200)" />
                  </svg>
                </div>

                {/* Orbit 2 — dotted, medium */}
                <div className="absolute inset-[-25%] animate-[orbitSpin_22s_linear_infinite_reverse]">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <defs>
                      <linearGradient id="orbit2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1A2035" />
                        <stop offset="50%" stopColor="#45C1F5" />
                        <stop offset="100%" stopColor="#1A2035" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="200" cy="200" rx="195" ry="120" stroke="url(#orbit2Grad)" strokeWidth="1" strokeDasharray="4 6" transform="rotate(25 200 200)" />
                    <circle cx="200" cy="5" r="4" stroke="#1A2035" strokeWidth="1" fill="none" transform="rotate(25 200 200)" />
                  </svg>
                </div>

                {/* Orbit 3 — solid thin, fast */}
                <div className="absolute inset-[-35%] animate-[orbitSpin_18s_linear_infinite]">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <defs>
                      <linearGradient id="orbit3Grad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#45C1F5" />
                        <stop offset="50%" stopColor="#9CA3AF" />
                        <stop offset="100%" stopColor="#1A2035" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="200" cy="200" rx="195" ry="160" stroke="url(#orbit3Grad)" strokeWidth="0.8" transform="rotate(-40 200 200)" />
                    <circle cx="200" cy="395" r="3" fill="#1A2035" transform="rotate(-40 200 200)" />
                    <polygon points="395,200 399,206 391,206" stroke="#45C1F5" strokeWidth="0.8" fill="none" transform="rotate(-40 200 200)" />
                  </svg>
                </div>

                {/* Orbit 4 — wide dotted */}
                <div className="absolute inset-[-8%] animate-[orbitSpin_35s_linear_infinite_reverse]">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <defs>
                      <linearGradient id="orbit4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9CA3AF" />
                        <stop offset="50%" stopColor="#45C1F5" />
                        <stop offset="100%" stopColor="#1A2035" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="200" cy="200" rx="195" ry="180" stroke="url(#orbit4Grad)" strokeWidth="0.6" strokeDasharray="3 8" transform="rotate(10 200 200)" />
                    <circle cx="5" cy="200" r="2.5" fill="#1A2035" transform="rotate(10 200 200)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Scrolling project content ── */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] flex flex-col justify-center pr-[5%] pl-[5%]">
              {projectData.map((project, i) => (
                <div
                  key={i}
                  className="project-slide absolute inset-0 flex flex-col justify-center pr-[5%] pl-[5%]"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  {/* Project image */}
                  <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mb-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]">
                    <Image src={project.src} alt={project.title} fill className="object-cover" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" quality={75} />
                  </div>

                  {/* Tag */}
                  <span className="text-sky font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                    {project.description}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-black text-ink tracking-tight leading-tight mb-5">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <div className="text-stone/70 text-[15px] leading-relaxed max-w-lg">
                    {project.content()}
                  </div>

                  {/* Counter */}
                  <div className="mt-8 flex items-center gap-3">
                    <span className="text-ink font-black text-[13px]">{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-12 h-[2px] bg-ink/10 rounded-full overflow-hidden">
                      <div className="h-full bg-sky rounded-full" style={{ width: `${((i + 1) / projectData.length) * 100}%` }} />
                    </div>
                    <span className="text-ink/30 text-[13px]">{String(projectData.length).padStart(2, '0')}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── AVANT / APRÈS ─────────────────── */}
      <section className="relative bg-white pt-32 pb-28 overflow-hidden" ref={beforeAfterRef}>
        {/* Decorative animated curves background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute w-[140%] h-full -left-[20%] top-0" viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="baGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#45C1F5" stopOpacity="0" />
                <stop offset="30%" stopColor="#45C1F5" stopOpacity="0.12" />
                <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="baGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.08" />
                <stop offset="70%" stopColor="#1A2035" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#1A2035" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Main curves */}
            <path d="M0 400 C 200 180, 500 620, 700 400 S 1200 180, 1400 400" stroke="url(#baGrad1)" strokeWidth="1.2" fill="none">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
                M0 400 C 200 180, 500 620, 700 400 S 1200 180, 1400 400;
                M0 400 C 200 220, 500 580, 700 400 S 1200 220, 1400 400;
                M0 400 C 200 180, 500 620, 700 400 S 1200 180, 1400 400
              " />
            </path>
            <path d="M0 400 C 200 620, 500 180, 700 400 S 1200 620, 1400 400" stroke="url(#baGrad1)" strokeWidth="1.2" fill="none">
              <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
                M0 400 C 200 620, 500 180, 700 400 S 1200 620, 1400 400;
                M0 400 C 200 580, 500 220, 700 400 S 1200 580, 1400 400;
                M0 400 C 200 620, 500 180, 700 400 S 1200 620, 1400 400
              " />
            </path>

            {/* Secondary dashed curves */}
            <path d="M0 340 C 250 140, 450 540, 700 340 S 1150 140, 1400 340" stroke="url(#baGrad2)" strokeWidth="0.6" strokeDasharray="5 8" fill="none">
              <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
                M0 340 C 250 140, 450 540, 700 340 S 1150 140, 1400 340;
                M0 360 C 250 180, 450 500, 700 360 S 1150 180, 1400 360;
                M0 340 C 250 140, 450 540, 700 340 S 1150 140, 1400 340
              " />
            </path>
            <path d="M0 460 C 250 660, 450 260, 700 460 S 1150 660, 1400 460" stroke="url(#baGrad2)" strokeWidth="0.6" strokeDasharray="5 8" fill="none">
              <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
                M0 460 C 250 660, 450 260, 700 460 S 1150 660, 1400 460;
                M0 440 C 250 620, 450 300, 700 440 S 1150 620, 1400 440;
                M0 460 C 250 660, 450 260, 700 460 S 1150 660, 1400 460
              " />
            </path>

            {/* Center horizontal line */}
            <line x1="100" y1="400" x2="1300" y2="400" stroke="#1A2035" strokeWidth="0.4" strokeOpacity="0.06" />

            {/* Animated nodes */}
            <circle cx="700" cy="400" r="8" stroke="#3B82F6" strokeWidth="0.8" fill="none" strokeOpacity="0.15">
              <animate attributeName="r" dur="3s" repeatCount="indefinite" values="6;10;6" />
              <animate attributeName="stroke-opacity" dur="3s" repeatCount="indefinite" values="0.15;0.08;0.15" />
            </circle>
            <circle cx="700" cy="400" r="2.5" fill="#3B82F6" fillOpacity="0.12">
              <animate attributeName="r" dur="3s" repeatCount="indefinite" values="2;3.5;2" />
            </circle>

            <circle cx="350" cy="400" r="5" stroke="#45C1F5" strokeWidth="0.6" fill="none" strokeOpacity="0.1">
              <animate attributeName="r" dur="4s" repeatCount="indefinite" values="4;7;4" />
            </circle>
            <circle cx="1050" cy="400" r="5" stroke="#45C1F5" strokeWidth="0.6" fill="none" strokeOpacity="0.1">
              <animate attributeName="r" dur="4s" repeatCount="indefinite" values="4;7;4" />
            </circle>

            {/* Floating accent dots */}
            <circle cx="175" cy="300" r="2" fill="#45C1F5" fillOpacity="0.1">
              <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="300;280;300" />
            </circle>
            <circle cx="525" cy="500" r="2" fill="#3B82F6" fillOpacity="0.1">
              <animate attributeName="cy" dur="7s" repeatCount="indefinite" values="500;520;500" />
            </circle>
            <circle cx="875" cy="290" r="2" fill="#45C1F5" fillOpacity="0.1">
              <animate attributeName="cy" dur="9s" repeatCount="indefinite" values="290;310;290" />
            </circle>
            <circle cx="1225" cy="510" r="2" fill="#3B82F6" fillOpacity="0.1">
              <animate attributeName="cy" dur="6s" repeatCount="indefinite" values="510;490;510" />
            </circle>

            {/* Small geometric accents */}
            <rect x="246" y="396" width="8" height="8" stroke="#1A2035" strokeWidth="0.5" fill="none" strokeOpacity="0.08" transform="rotate(45 250 400)">
              <animate attributeName="stroke-opacity" dur="5s" repeatCount="indefinite" values="0.08;0.04;0.08" />
            </rect>
            <rect x="1146" y="396" width="8" height="8" stroke="#1A2035" strokeWidth="0.5" fill="none" strokeOpacity="0.08" transform="rotate(45 1150 400)">
              <animate attributeName="stroke-opacity" dur="5s" repeatCount="indefinite" values="0.04;0.08;0.04" />
            </rect>

            {/* Traveling dot along curve */}
            <circle r="2.5" fill="#45C1F5" fillOpacity="0.2">
              <animateMotion dur="8s" repeatCount="indefinite" path="M0 400 C 200 180, 500 620, 700 400 S 1200 180, 1400 400" />
            </circle>
            <circle r="2.5" fill="#3B82F6" fillOpacity="0.2">
              <animateMotion dur="8s" repeatCount="indefinite" path="M0 400 C 200 620, 500 180, 700 400 S 1200 620, 1400 400" />
            </circle>
          </svg>
        </div>

        <div className="container-business relative z-10">
          <span className="text-sky font-bold tracking-[0.3em] text-[11px] uppercase mb-5 block">Avant / Après</span>
          <h2 className="text-4xl md:text-6xl tracking-tighter leading-[0.9] mb-6">
            <span className="font-extralight text-ink">Du chaos</span> <span className="font-black italic text-stone">à la maîtrise.</span>
          </h2>
          <p className="text-lg text-stone font-light max-w-xl leading-relaxed mb-14">
            Câblage anarchique, équipements vieillissants, absence de repérage. Nos techniciens reprennent tout en main.
          </p>
        </div>

        <div className="container-business relative z-10">
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]">
            <Image
              src="/armoire-tcmees-avant-apres.webp"
              alt="Avant / Après — Armoire réseau WiDôme"
              width={1200}
              height={600}
              className="w-full h-auto"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              quality={75}
            />
            {/* Bandeau bleu recouvrant les textes originaux */}
            <div className="absolute top-0 left-0 right-0 h-[22%] z-10 flex">
              <div className="w-1/2 bg-ink flex items-center justify-center">
                <span className="text-white font-black text-2xl md:text-4xl tracking-tight uppercase">Avant</span>
              </div>
              <div className="w-1/2 bg-sky flex items-center justify-center gap-3">
                <span className="text-white font-black text-2xl md:text-4xl tracking-tight uppercase">Après</span>
              </div>
            </div>
            {/* Bottom bar overlay */}
            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-8 py-5 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <p className="text-stone font-light text-base max-w-md">
                  Baie normalisée, câblage structuré, étiquetage complet. <span className="text-ink font-semibold">Une infrastructure lisible et maintenable.</span>
                </p>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="shrink-0 ml-8 inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 bg-ink text-white font-semibold text-[14px] rounded-full hover:bg-sky transition-all duration-300 active:scale-[0.97]"
                >
                  Demander un audit
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────── */}
      <section id="contact" className="pt-32 pb-28 bg-white relative overflow-hidden">
        <div className="container-business">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <span className="text-sky font-bold tracking-[0.3em] text-[11px] uppercase mb-5 block">Contact</span>
              <h2 className="text-4xl md:text-5xl text-ink tracking-tighter leading-[0.95] mb-6">
                <span className="font-extralight">Parlons de</span> <span className="font-black">votre</span><br /><span className="font-black italic text-stone">projet.</span>
              </h2>
              <p className="text-lg text-stone font-light leading-relaxed mb-10 max-w-md">
                Un besoin en informatique, réseau ou télécom ? Contactez-nous pour un diagnostic gratuit et sans engagement.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-sky" />
                  </div>
                  <div>
                    <p className="text-[12px] text-stone/60 font-semibold uppercase tracking-wide">Téléphone</p>
                    <a href="tel:+33473252582" className="text-ink font-semibold hover:text-sky transition-colors">04 73 25 25 82</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                    <Terminal className="w-4 h-4 text-sky" />
                  </div>
                  <div>
                    <p className="text-[12px] text-stone/60 font-semibold uppercase tracking-wide">Email</p>
                    <a href="mailto:contact@widome.fr" className="text-ink font-semibold hover:text-sky transition-colors">contact@widome.fr</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center shrink-0">
                    <Network className="w-4 h-4 text-sky" />
                  </div>
                  <div>
                    <p className="text-[12px] text-stone/60 font-semibold uppercase tracking-wide">Adresse</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=3+Rue+de+Riom+63530+Volvic" target="_blank" rel="noopener noreferrer" className="text-ink font-semibold hover:text-sky transition-colors">3 Rue de Riom, 63530 Volvic</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-off/40 border border-ink/[0.04] rounded-2xl p-8 md:p-10">
              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                btn.disabled = true;
                btn.textContent = 'Envoi en cours...';
                emailjs.sendForm('service_w6ga7pq', 'template_s6635wm', form, 'BdD-TIR6kNb9AGh8g')
                  .then(() => {
                    form.reset();
                    setShowConfirmation(true);
                    setTimeout(() => setShowConfirmation(false), 4000);
                  })
                  .catch(() => {
                    alert('Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.');
                  })
                  .finally(() => {
                    btn.disabled = false;
                    btn.innerHTML = 'Envoyer ma demande <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
                  });
              }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] font-semibold text-ink/60 uppercase tracking-wide mb-1.5 block">Nom <span className="text-sky">*</span></label>
                    <input type="text" name="from_name" placeholder="Votre nom" required className="w-full px-4 py-3 rounded-xl border border-ink/[0.06] bg-white text-ink text-[14px] placeholder:text-stone/40 focus:outline-none focus:border-sky/40 focus:ring-2 focus:ring-sky/10 transition-all" />
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-ink/60 uppercase tracking-wide mb-1.5 block">Email <span className="text-sky">*</span></label>
                    <input type="email" name="reply_to" placeholder="votre@email.fr" required className="w-full px-4 py-3 rounded-xl border border-ink/[0.06] bg-white text-ink text-[14px] placeholder:text-stone/40 focus:outline-none focus:border-sky/40 focus:ring-2 focus:ring-sky/10 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-ink/60 uppercase tracking-wide mb-1.5 block">Entreprise <span className="text-sky">*</span></label>
                  <input type="text" name="company" placeholder="Nom de votre entreprise" required className="w-full px-4 py-3 rounded-xl border border-ink/[0.06] bg-white text-ink text-[14px] placeholder:text-stone/40 focus:outline-none focus:border-sky/40 focus:ring-2 focus:ring-sky/10 transition-all" />
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-ink/60 uppercase tracking-wide mb-1.5 block">Téléphone <span className="text-sky">*</span></label>
                  <input type="tel" name="phone" placeholder="06 XX XX XX XX" required className="w-full px-4 py-3 rounded-xl border border-ink/[0.06] bg-white text-ink text-[14px] placeholder:text-stone/40 focus:outline-none focus:border-sky/40 focus:ring-2 focus:ring-sky/10 transition-all" />
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-ink/60 uppercase tracking-wide mb-1.5 block">Message <span className="text-sky">*</span></label>
                  <textarea rows={4} name="message" placeholder="Décrivez votre besoin..." required className="w-full px-4 py-3 rounded-xl border border-ink/[0.06] bg-white text-ink text-[14px] placeholder:text-stone/40 focus:outline-none focus:border-sky/40 focus:ring-2 focus:ring-sky/10 transition-all resize-none" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-ink text-white font-semibold text-[14px] rounded-xl hover:bg-sky transition-all duration-300 flex items-center justify-center gap-2">
                  Envoyer ma demande
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Popup confirmation */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/30 backdrop-blur-sm" onClick={() => setShowConfirmation(false)}>
          <div className="bg-white rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] max-w-sm mx-4 text-center animate-[popIn_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <div className="w-14 h-14 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 text-sky" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">Message envoy&eacute; !</h3>
            <p className="text-stone/60 text-[14px] leading-relaxed mb-6">Votre message a bien &eacute;t&eacute; envoy&eacute;. Nous vous recontacterons dans les plus brefs d&eacute;lais.</p>
            <button onClick={() => setShowConfirmation(false)} className="px-6 py-2.5 bg-ink text-white font-semibold text-[13px] rounded-full hover:bg-sky transition-all duration-300">
              Fermer
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
