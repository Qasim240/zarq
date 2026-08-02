import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 md:px-10 py-32 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-5xl md:text-7xl font-serif">Page not found.</h1>
      <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />
      <p className="mt-8 text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-3 border border-ink text-ink px-8 py-4 text-[0.72rem] tracking-[0.3em] uppercase hover:bg-ink hover:text-white transition-colors"
      >
        Return Home
      </Link>
    </section>
  );
}
