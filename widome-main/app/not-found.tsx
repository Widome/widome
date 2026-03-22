import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7fbff] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div
        className="absolute -top-[30%] -right-[15%] w-[50%] aspect-square rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(69,193,245,0.08) 0%, transparent 65%)' }}
      />
      <div
        className="absolute -bottom-[20%] -left-[10%] w-[40%] aspect-square rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 text-center max-w-lg">
        <Link href="/" className="inline-block mb-10">
          <Image src="/logo.webp" alt="WiDôme" width={130} height={52} className="h-12 w-auto mx-auto" />
        </Link>

        <div className="mb-6">
          <span className="text-[140px] md:text-[180px] font-black text-ink/[0.04] leading-none block">404</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight -mt-16 mb-4">
          Page introuvable<span className="text-sky">.</span>
        </h1>
        <p className="text-stone/60 text-[16px] leading-relaxed mb-10">
          La page que vous recherchez n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e. Pas d&apos;inqui&eacute;tude, on vous ram&egrave;ne au bon endroit.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-white font-semibold text-[15px] rounded-full hover:bg-sky transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Retour &agrave; l&apos;accueil
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-4 text-[14px] font-semibold text-ink/50 hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
