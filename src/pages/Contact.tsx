import { site } from "../config/site";
import { WhatsAppIcon } from "../components/icons";

export default function Contact() {
  const features = [
    "Fast Response",
    "Secure Ordering",
    "Nationwide Delivery",
    "Customer Support",
  ];

  return (
    <section className="mx-auto max-w-4xl px-6 md:px-10 pt-16 md:pt-24 pb-12">
      <header className="text-center">
        <p className="eyebrow">Contact Us</p>

        <h1 className="mt-4 text-4xl md:text-6xl font-serif">
          Let's Start Your Order
        </h1>

        <div className="mx-auto mt-6 h-px w-16 bg-gold" />

        <p className="mt-8 max-w-2xl mx-auto text-muted leading-relaxed">
          Whether you're looking for the perfect piece, have a question about a
          product, or are ready to place your order, we're just one message
          away. We currently accept all orders through our official WhatsApp
          Business account.
        </p>
      </header>

      {/* Main CTA */}
      <div className="mt-16 rounded-xl border border-line p-10 md:p-12 text-center bg-white shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
          <WhatsAppIcon className="h-10 w-10" />
        </div>

        <h2 className="mt-6 text-3xl font-serif">
          Chat with ZARQ on WhatsApp
        </h2>

        <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
          This is the fastest way to place an order, ask questions, check
          product availability, or receive delivery updates.
        </p>

        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-8 py-4 text-white font-medium transition hover:opacity-90"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Start WhatsApp Chat
        </a>

        <p className="mt-5 text-xl font-serif">
          {site.whatsappNumber}
        </p>

        <p className="mt-2 text-sm text-muted">
          Usually replies within a few minutes during business hours.
        </p>
      </div>

      {/* Trust Features */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-lg border border-line p-5 text-center"
          >
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold text-sm font-bold">
              ✓
            </div>

            <p className="mt-3 text-sm font-medium">
              {feature}
            </p>
          </div>
        ))}
      </div>

      {/* Business Hours */}
      <div className="mt-14 rounded-lg border border-line p-8 text-center">
        <h3 className="font-serif text-2xl">
          Business Hours
        </h3>

        <p className="mt-4 text-muted">
          Monday – Saturday
        </p>

        <p className="text-lg">
          11:00 AM – 8:00 PM (PKT)
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-gold" />

        <p className="mt-8 text-lg font-serif">
          Nationwide Delivery Across Pakistan
        </p>

        <p className="mt-2 text-muted">
          We carefully pack every order and deliver through trusted courier
          partners.
        </p>
      </div>

      {/* Trust Message */}
      <div className="mt-14 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-serif">
          Why Order with ZARQ?
        </h3>

        <p className="mt-5 text-muted leading-relaxed">
          We're building ZARQ one customer at a time. Every order is handled
          with care, from answering your questions to carefully packaging your
          jewelry before it reaches your doorstep. Your trust means everything
          to us.
        </p>
      </div>
    </section>
  );
}