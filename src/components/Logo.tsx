import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { site } from "../config/site";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
}

/**
 * AARSI wordmark logo — cropped, transparent PNG of the official logo
 * (source artwork: src/AARSI logo-01.png).
 */
export default function Logo({ className, size = "md", asLink = true }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 md:h-7",
    md: "h-9",
    lg: "h-20 md:h-32",
  };

  const inner = (
    <img
      src="/aarsi-logo.png"
      alt={site.name}
      width={1781}
      height={484}
      draggable={false}
      className={cn("w-auto select-none", sizeClasses[size], className)}
    />
  );

  if (!asLink) return inner;

  return (
    <Link to="/" className="inline-block" aria-label={`${site.name} — Home`}>
      {inner}
    </Link>
  );
}
