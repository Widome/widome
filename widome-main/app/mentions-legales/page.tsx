import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions l\u00e9gales | WiD\u00f4me',
  description: 'Mentions l\u00e9gales du site WiD\u00f4me - Expert informatique, r\u00e9seaux et t\u00e9l\u00e9com dans le Puy-de-D\u00f4me.',
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#f7fbff] border-b border-ink/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-ink/40 hover:text-sky transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <Link href="/">
              <Image src="/logo.webp" alt="WiD&ocirc;me" width={100} height={40} className="h-8 w-auto" />
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Mentions l&eacute;gales<span className="text-sky">.</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-ink max-w-none space-y-10 text-[15px] leading-relaxed text-stone/70">

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">&Eacute;diteur du site</h2>
            <p>
              Le site <strong>widome.fr</strong> est &eacute;dit&eacute; par la soci&eacute;t&eacute; <strong>WIDOME</strong>, SARL (soci&eacute;t&eacute; &agrave; responsabilit&eacute; limit&eacute;e).<br />
              SIREN : 822 029 567<br />
              Date de cr&eacute;ation : 10/08/2016<br />
              Activit&eacute; : Programmation, conseil et autres activit&eacute;s informatiques<br />
              Adresse : 3 Rue de Riom, 63530 Volvic, France<br />
              T&eacute;l&eacute;phone : 04 73 25 25 82<br />
              Email : contact@widome.fr<br />
              G&eacute;rant et Directeur de la publication : Franck Besserve
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">H&eacute;bergement</h2>
            <p>
              Le site est h&eacute;berg&eacute; par <strong>OVHcloud</strong>.<br />
              Adresse : 2 Rue Kellermann, 59100 Roubaix, France<br />
              T&eacute;l&eacute;phone : 1007<br />
              Site web : <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer" className="text-sky hover:underline">ovhcloud.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Conception et r&eacute;alisation</h2>
            <p>
              Ce site a &eacute;t&eacute; con&ccedil;u et d&eacute;velopp&eacute; par <strong>OTIKA &mdash; Agence Digitale</strong>.<br />
              Site web : <a href="https://otika.fr" target="_blank" rel="noopener noreferrer" className="text-sky hover:underline">otika.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Propri&eacute;t&eacute; intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, ic&ocirc;nes, sons, logiciels, etc.) est la propri&eacute;t&eacute; exclusive de WiD&ocirc;me ou de ses partenaires, et est prot&eacute;g&eacute; par les lois fran&ccedil;aises et internationales relatives &agrave; la propri&eacute;t&eacute; intellectuelle.
            </p>
            <p>
              Toute reproduction, repr&eacute;sentation, modification, publication, adaptation de tout ou partie des &eacute;l&eacute;ments du site, quel que soit le moyen ou le proc&eacute;d&eacute; utilis&eacute;, est interdite sauf autorisation &eacute;crite pr&eacute;alable de WiD&ocirc;me.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Limitation de responsabilit&eacute;</h2>
            <p>
              WiD&ocirc;me s&apos;efforce d&apos;assurer au mieux de ses possibilit&eacute;s l&apos;exactitude et la mise &agrave; jour des informations diffus&eacute;es sur ce site. Toutefois, WiD&ocirc;me ne peut garantir l&apos;exactitude, la pr&eacute;cision ou l&apos;exhaustivit&eacute; des informations mises &agrave; disposition sur ce site.
            </p>
            <p>
              WiD&ocirc;me d&eacute;cline toute responsabilit&eacute; pour toute impr&eacute;cision, inexactitude ou omission portant sur des informations disponibles sur le site, ainsi que pour tout dommage r&eacute;sultant d&apos;une intrusion frauduleuse d&apos;un tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d&apos;autres sites. WiD&ocirc;me n&apos;exerce aucun contr&ocirc;le sur le contenu de ces sites tiers et n&apos;assume aucune responsabilit&eacute; quant &agrave; leur contenu ou aux dommages pouvant r&eacute;sulter de leur utilisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Droit applicable</h2>
            <p>
              Les pr&eacute;sentes mentions l&eacute;gales sont soumises au droit fran&ccedil;ais. En cas de litige, les tribunaux fran&ccedil;ais seront seuls comp&eacute;tents.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
