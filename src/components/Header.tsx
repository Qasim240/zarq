import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { CloseIcon, MenuIcon } from "./icons";
import { cn } from "../utils/cn";

const nav = [
  { to: "/", label: "Home" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo size="sm" />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-10">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-[0.72rem] uppercase tracking-[0.3em] transition-colors",
                    isActive
                      ? "text-ink"
                      : "text-muted hover:text-ink",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden -mr-2 p-2 text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm uppercase tracking-[0.3em]",
                    isActive ? "text-ink" : "text-muted",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
