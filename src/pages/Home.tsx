import { Link } from "react-router-dom";
import { site } from "../config/site";
import Logo from "../components/Logo";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  WhatsAppIcon,
} from "../components/icons";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-32 pb-20 md:pb-28 text-center">
        <p className="eyebrow">Est. {site.established} · {site.location}</p>

        <div className="mt-10 md:mt-14 flex justify-center">
          <Logo size="lg" asLink={false} />
        </div>

        <div className="mx-auto mt-10 h-px w-16 bg-gold" aria-hidden="true" />

        <h1 className="mt-10 text-3xl md:text-5xl font-serif text-ink leading-[1.15] max-w-3xl mx-auto">
          Minimalist Jewelry for <em className="not-italic text-gold">Everyday Elegance</em>
        </h1>

        <p className="mt-8 text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto">
          ZARQ is a quiet celebration of understated luxury. Timeless pieces —
          designed to be worn every day, remembered forever.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-ink text-white px-8 py-4 text-[0.72rem] tracking-[0.3em] uppercase hover:bg-gold transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat on WhatsApp
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-ink text-ink px-8 py-4 text-[0.72rem] tracking-[0.3em] uppercase hover:bg-ink hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="border-y border-line bg-bone/60">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-6 text-3xl md:text-4xl font-serif leading-tight">
            Crafted with intention.
            <br />
            Worn with meaning.
          </h2>
          <p className="mt-8 text-base md:text-lg text-ink/75 leading-[1.9] max-w-2xl mx-auto">
            Born from a love of simplicity, ZARQ is a jewelry brand devoted to
            pieces that quietly define you. Each design is refined to its
            essence — clean lines, honest materials, and a soft gold warmth that
            settles beautifully into everyday life.
          </p>
          <p className="mt-6 text-base md:text-lg text-ink/75 leading-[1.9] max-w-2xl mx-auto">
            We believe jewelry should feel personal, not performative. Made in
            small batches, shared through our Instagram and Facebook community,
            and delivered directly to your door.
          </p>
        </div>
      </section>

      {/* CONNECT */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <div className="text-center">
          <p className="eyebrow">Connect</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif">
            Say hello — we'd love to hear from you.
          </h2>
          <p className="mt-6 text-muted max-w-lg mx-auto">
            Browse our collection, place an order, or ask us anything through
            your favorite channel.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ConnectCard
            href={site.whatsappUrl}
            icon={<WhatsAppIcon className="w-5 h-5" />}
            label="WhatsApp"
            value={site.whatsappNumber}
            cta="Message us"
          />
          <ConnectCard
            href={site.instagramUrl}
            icon={<InstagramIcon className="w-5 h-5" />}
            label="Instagram"
            value={site.instagramHandle}
            cta="Follow"
          />
          <ConnectCard
            href={site.facebookUrl}
            icon={<FacebookIcon className="w-5 h-5" />}
            label="Facebook"
            value={site.facebookHandle}
            cta="Like our page"
          />
        </div>

        {/* Email */}
        {/* <div className="mt-10 border border-line p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 flex items-center justify-center border border-line text-gold shrink-0">
              <MailIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <p className="mt-2 text-xl md:text-2xl font-serif text-ink">
                {site.email}
              </p>
              <p className="mt-1 text-sm text-muted">
                For orders, custom requests & press inquiries.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 border border-ink text-ink px-6 py-3 text-[0.72rem] tracking-[0.3em] uppercase hover:bg-ink hover:text-white transition-colors whitespace-nowrap"
          >
            Send Email <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div> */}
      </section>

      {/* DELIVERY BANNER */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-20 text-center">
          <p className="eyebrow text-gold">Delivery</p>
          <h3 className="mt-4 text-2xl md:text-4xl font-serif">
            Nationwide Delivery Across {site.location}
          </h3>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Carefully packaged and dispatched from our studio — straight to your
            city.
          </p>
        </div>
      </section>
    </>
  );
}

function ConnectCard({
  href,
  icon,
  label,
  value,
  cta,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border border-line p-8 flex flex-col hover:border-gold transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 flex items-center justify-center border border-line text-gold group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-colors">
          {icon}
        </div>
        <span className="eyebrow">{label}</span>
      </div>
      <p className="mt-8 text-lg font-serif text-ink">{value}</p>
      <p className="mt-4 text-[0.72rem] tracking-[0.3em] uppercase text-muted group-hover:text-ink transition-colors inline-flex items-center gap-2">
        {cta} <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </p>
    </a>
  );
}
