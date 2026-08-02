import type { ReactNode } from "react";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  updated?: string;
  sections: LegalSection[];
}

export default function LegalPage({
  eyebrow = "Legal",
  title,
  intro,
  updated = "Last updated: January 2026",
  sections,
}: LegalPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 md:px-10 pt-16 md:pt-24">
      <header className="mb-14 md:mb-20 text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-serif text-ink">{title}</h1>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />
        {intro && (
          <p className="mt-8 text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            {intro}
          </p>
        )}
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">{updated}</p>
      </header>

      <div className="space-y-12 md:space-y-16">
        {sections.map((section, i) => (
          <section key={section.heading}>
            <div className="flex items-baseline gap-4">
              <span className="text-xs tracking-[0.3em] text-gold font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-ink">
                {section.heading}
              </h2>
            </div>
            <div className="mt-5 pl-0 md:pl-12 text-[0.95rem] text-ink/75 leading-[1.85]">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
