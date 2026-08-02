import { Link } from "react-router-dom";
import Logo from "./Logo";
import { site } from "../config/site";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

const legal = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-conditions", label: "Terms & Conditions" },
  { to: "/shipping-policy", label: "Shipping Policy" },
  { to: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 md:mt-32 border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo size="sm" />
            <p className="mt-5 text-sm text-muted leading-relaxed max-w-xs">
              {site.tagline}. Handcrafted, timeless pieces — delivered nationwide across{" "}
              {site.location}.
            </p>
          </div>

          {/* Legal */}
          <div>
            <p className="eyebrow">Legal</p>
            <ul className="mt-5 space-y-3">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink/80 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-ink/80 hover:text-gold transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-ink/80 hover:text-gold transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-ink/80 hover:text-gold transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink/80 hover:text-gold transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs tracking-wider text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.25em] uppercase text-muted">
            Crafted in {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
