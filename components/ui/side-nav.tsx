'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'services', label: 'Services' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'contact', label: 'Contact' },
];

export default function SideNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollY / docHeight : 0);

      // Show after hero
      setVisible(scrollY > window.innerHeight * 0.5);

      // Detect active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* LEFT: Progress bar + dots */}
      <div className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        <div className="flex flex-col items-center gap-0">
          {/* Vertical track */}
          <div className="relative w-[2px] rounded-full bg-ink/[0.06]" style={{ height: `${sections.length * 40 + 20}px` }}>
            {/* Progress fill */}
            <div
              className="absolute top-0 left-0 w-full bg-sky rounded-full transition-all duration-300"
              style={{ height: `${((activeIndex + 1) / sections.length) * 100}%` }}
            />
            {/* Dots */}
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className="absolute left-1/2 -translate-x-1/2 group"
                style={{ top: `${(i / (sections.length - 1)) * 100}%` }}
                title={s.label}
              >
                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  i <= activeIndex
                    ? 'bg-sky border-sky scale-100'
                    : 'bg-white border-ink/15 scale-75'
                }`} />
                {/* Label on hover */}
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-ink/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Section shortcuts */}
      <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
        <div className="flex flex-col gap-2">
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide text-right transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-ink text-white shadow-sm'
                  : 'text-ink/30 hover:text-ink/60 hover:bg-ink/[0.03]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
