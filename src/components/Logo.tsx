import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
}

/**
 * ZARQ wordmark logo — placeholder that can be swapped for an SVG later.
 * Uses a serif face with wide tracking for a luxury feel.
 */
export default function Logo({ className, size = "md", asLink = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl tracking-[0.35em]",
    md: "text-2xl tracking-[0.4em]",
    lg: "text-5xl md:text-7xl tracking-[0.45em]",
  };

  const inner = (
    <span
      className={cn(
        "font-serif font-normal text-ink select-none",
        sizeClasses[size],
        className,
      )}
      aria-label="ZARQ"
    >
      ZARQ
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link to="/" className="inline-block" aria-label="ZARQ — Home">
      {inner}
    </Link>
  );
}
