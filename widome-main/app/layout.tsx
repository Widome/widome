import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import SmoothScroll from '@/components/ui/smooth-scroll';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'WiDôme | Expert Informatique à Domicile',
  description: 'WiDôme vous accompagne au quotidien : installation réseau, configuration PC, protection des données et dépannage rapide. Votre tranquillité numérique, notre mission.',
  keywords: 'informatique, réseau wifi, dépannage informatique, sécurité données, configuration PC, assistance informatique',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn("font-sans", plusJakarta.variable)}>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <SmoothScroll>
          <div className="grain-overlay" />
          <div className="relative min-h-screen w-full">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
