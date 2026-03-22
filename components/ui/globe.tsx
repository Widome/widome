'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

interface GlobeProps {
  className?: string;
}

export default function Globe({ className = '' }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0.3);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Suppress WebGL context lost unhandled rejections
    const handleRejection = (e: PromiseRejectionEvent) => {
      if (e.reason instanceof Event || (e.reason && typeof e.reason === 'object' && e.reason.type === 'webglcontextlost')) {
        e.preventDefault();
      }
    };
    window.addEventListener('unhandledrejection', handleRejection);

    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.addEventListener('webglcontextlost', (e) => e.preventDefault());

    let globe: ReturnType<typeof createGlobe>;
    try {
      globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 1.5),
      width: 800,
      height: 800,
      phi: 0.3,
      theta: 0.15,
      dark: 0,
      diffuse: 0.6,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [0.1, 0.5, 1],
      glowColor: [0.85, 0.92, 1],
      markers: [],
    } as any);

    const animate = () => {
      phiRef.current += 0.002;
      try { globe.update({ phi: phiRef.current }); } catch {}
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      try { globe.destroy(); } catch {}
      window.removeEventListener('unhandledrejection', handleRejection);
    };
    } catch {
      // WebGL not available — fail silently
      return () => {
        window.removeEventListener('unhandledrejection', handleRejection);
      };
    }
  }, []);

  return (
    <div className="relative" style={{ width: '1040px', height: '1040px', maxWidth: '100%', aspectRatio: '1' }}>
      <canvas
        ref={canvasRef}
        className={className}
        style={{ width: '100%', height: '100%' }}
      />
      {/* Sweeping color overlay — rotates over 15s */}
      <div
        className="absolute inset-0 rounded-full animate-[colorSweep_15s_linear_infinite]"
        style={{
          mixBlendMode: 'color',
          background: 'conic-gradient(from 0deg, #45C1F5 0%, #3B82F6 25%, #1A2035 50%, transparent 65%, transparent 100%)',
          opacity: 0.7,
        }}
      />
    </div>
  );
}
