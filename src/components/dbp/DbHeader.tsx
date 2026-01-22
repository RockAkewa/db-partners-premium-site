import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why DB Partners", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "border-b transition-colors",
        scrolled ? "bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#home" className="group inline-flex items-center gap-3">
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
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-foreground/80 transition-colors",
                "hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="hero" className="hidden md:inline-flex">
            <a href="#contact">Book a Consultation</a>
          </Button>
          <Button asChild size="sm" variant="outline" className="md:hidden">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
