import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialit\u00e9 | WiD\u00f4me',
  description: 'Politique de confidentialit\u00e9 du site WiD\u00f4me - Protection de vos donn\u00e9es personnelles.',
};

export default function Confidentialite() {
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
            Politique de confidentialit&eacute;<span className="text-sky">.</span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-ink max-w-none space-y-10 text-[15px] leading-relaxed text-stone/70">

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Introduction</h2>
            <p>
              La soci&eacute;t&eacute; WiD&ocirc;me, situ&eacute;e au 3 Rue de Riom, 63530 Volvic, attache une grande importance &agrave; la protection de vos donn&eacute;es personnelles. La pr&eacute;sente politique de confidentialit&eacute; a pour objet de vous informer sur la mani&egrave;re dont nous collectons, utilisons et prot&eacute;geons vos donn&eacute;es conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Donn&eacute;es collect&eacute;es</h2>
            <p>Nous collectons les donn&eacute;es personnelles suivantes via le formulaire de contact du site :</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Nom et pr&eacute;nom</li>
              <li>Adresse email</li>
              <li>Nom de l&apos;entreprise</li>
              <li>Num&eacute;ro de t&eacute;l&eacute;phone</li>
              <li>Contenu du message</li>
            </ul>
            <p className="mt-3">
              Ces donn&eacute;es sont collect&eacute;es uniquement lorsque vous remplissez volontairement le formulaire de contact pr&eacute;sent sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Finalit&eacute; du traitement</h2>
            <p>Les donn&eacute;es personnelles collect&eacute;es sont utilis&eacute;es pour :</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>R&eacute;pondre &agrave; vos demandes de renseignements ou de devis</li>
              <li>Vous recontacter dans le cadre de votre demande</li>
              <li>Am&eacute;liorer la qualit&eacute; de nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Base l&eacute;gale du traitement</h2>
            <p>
              Le traitement de vos donn&eacute;es repose sur votre consentement, exprim&eacute; par l&apos;envoi volontaire du formulaire de contact, ainsi que sur notre int&eacute;r&ecirc;t l&eacute;gitime &agrave; r&eacute;pondre &agrave; vos demandes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Dur&eacute;e de conservation</h2>
            <p>
              Vos donn&eacute;es personnelles sont conserv&eacute;es pour une dur&eacute;e maximale de 3 ans &agrave; compter de votre dernier contact avec nous, sauf obligation l&eacute;gale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Partage des donn&eacute;es</h2>
            <p>
              Vos donn&eacute;es personnelles ne sont ni vendues, ni c&eacute;d&eacute;es, ni lou&eacute;es &agrave; des tiers. Elles peuvent &ecirc;tre transmises &agrave; nos sous-traitants techniques (h&eacute;bergement, messagerie) dans le strict cadre de l&apos;ex&eacute;cution de nos services, et sous r&eacute;serve que ces sous-traitants respectent des obligations de confidentialit&eacute; et de s&eacute;curit&eacute; ad&eacute;quates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Vos droits</h2>
            <p>Conform&eacute;ment au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li><strong>Droit d&apos;acc&egrave;s :</strong> obtenir une copie de vos donn&eacute;es personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger vos donn&eacute;es inexactes ou incompl&egrave;tes</li>
              <li><strong>Droit &agrave; l&apos;effacement :</strong> demander la suppression de vos donn&eacute;es</li>
              <li><strong>Droit &agrave; la limitation :</strong> restreindre le traitement de vos donn&eacute;es</li>
              <li><strong>Droit &agrave; la portabilit&eacute; :</strong> recevoir vos donn&eacute;es dans un format structur&eacute;</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos donn&eacute;es</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, vous pouvez nous contacter &agrave; l&apos;adresse : <a href="mailto:contact@widome.fr" className="text-sky hover:underline">contact@widome.fr</a> ou par courrier au 3 Rue de Riom, 63530 Volvic.
            </p>
            <p>
              Vous disposez &eacute;galement du droit d&apos;introduire une r&eacute;clamation aupr&egrave;s de la CNIL (Commission Nationale de l&apos;Informatique et des Libert&eacute;s).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Cookies</h2>
            <p>
              Le site widome.fr n&apos;utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques strictement n&eacute;cessaires au bon fonctionnement du site peuvent &ecirc;tre utilis&eacute;s. Ces cookies ne n&eacute;cessitent pas votre consentement pr&eacute;alable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">S&eacute;curit&eacute;</h2>
            <p>
              Nous mettons en &oelig;uvre toutes les mesures techniques et organisationnelles appropri&eacute;es pour prot&eacute;ger vos donn&eacute;es personnelles contre tout acc&egrave;s non autoris&eacute;, perte, alt&eacute;ration ou divulgation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-3">Modification de la politique</h2>
            <p>
              WiD&ocirc;me se r&eacute;serve le droit de modifier la pr&eacute;sente politique de confidentialit&eacute; &agrave; tout moment. Toute modification sera publi&eacute;e sur cette page. Nous vous invitons &agrave; la consulter r&eacute;guli&egrave;rement.
            </p>
          </section>

          <section>
            <p className="text-ink/30 text-[13px]">
              Derni&egrave;re mise &agrave; jour : mars 2026
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
