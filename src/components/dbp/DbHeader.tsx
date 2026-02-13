import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = { label: string; to: string };

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Why DB Partners", to: "/why-db-partners" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function DbHeader() {
  const scrolled = useScrolled();
  const nav = useMemo(() => NAV, []);
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "border-b transition-colors",
        scrolled || mobileOpen
          ? "bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="group inline-flex items-center gap-3">
          <div
            className={cn(
              "grid h-10 w-10 place-items-center rounded-xl",
              "bg-primary text-primary-foreground shadow-soft",
              "transition-transform group-hover:-translate-y-0.5",
            )}
          >
            <span className="font-heading text-sm font-semibold tracking-tightish">DB</span>
          </div>
          <div className="leading-tight">
            <div className="font-heading text-sm font-semibold tracking-tightish">DB Partners</div>
            <div className="text-xs text-muted-foreground">Consulting</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm transition-colors",
                location.pathname === item.to
                  ? "text-foreground font-medium"
                  : "text-foreground/80 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="hero" className="hidden md:inline-flex">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-background/95 backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm transition-colors",
                  location.pathname === item.to
                    ? "bg-secondary text-foreground font-medium"
                    : "text-foreground/80 hover:bg-secondary/50",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <Button asChild size="sm" variant="hero" className="w-full">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
