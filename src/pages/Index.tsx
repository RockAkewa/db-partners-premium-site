import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CurvedLines } from "@/components/dbp/CurvedLines";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import aboutImage from "@/assets/about-boardroom.jpg";
import hrImage from "@/assets/service-human-resources.jpg";
import irImage from "@/assets/service-industrial-relations.jpg";
import transformationImage from "@/assets/service-transformation.jpg";
import trainingImage from "@/assets/service-training.jpg";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

const SERVICES_PREVIEW = [
  { title: "Human Resources", image: hrImage, desc: "HR optimisation, audits, compliance & recruitment" },
  { title: "Industrial Relations", image: irImage, desc: "Legal compliance, discipline & restructuring" },
  { title: "Transformation", image: transformationImage, desc: "Employment equity, EEA compliance & reporting" },
  { title: "Training & Development", image: trainingImage, desc: "Skills planning, SETA submissions & facilitation" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.title = "DB Partners | HR, Transformation & IR Consulting";
  }, []);

  useEffect(() => {
    if (!heroRef.current || prefersReducedMotion()) return;
    const el = heroRef.current;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--px", String(px));
      el.style.setProperty("--py", String(py));
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <main>
      <h1 className="sr-only">DB Partners – HR, Transformation & Industrial Relations Consulting</h1>

      {/* HERO */}
      <section
        className={cn(
          "relative overflow-hidden bg-panel text-panel-foreground",
          "pt-28 pb-16 md:pt-36 md:pb-24",
        )}
      >
        <div
          ref={heroRef}
          className={cn("absolute inset-0 bg-hero-sheen", "[--px:0] [--py:0]")}
        />
        <div className="absolute inset-0 opacity-70" />
        <CurvedLines
          className={cn(
            "text-panel-foreground/15",
            "transition-transform duration-300",
            "[transform:translate3d(calc(var(--px)*18px),calc(var(--py)*14px),0)]",
          )}
        />
        <CurvedLines
          className={cn(
            "text-panel-foreground/10",
            "[transform:translate3d(calc(var(--px)*-12px),calc(var(--py)*-10px),0)]",
          )}
        />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="font-heading text-sm tracking-[0.18em] text-panel-muted">DB PARTNERS</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.05] tracking-tightish md:text-6xl">
              Your preferred Human Resources, Transformation and Industrial Relations Partner
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-panel-muted md:text-lg">
              Strategic partnerships delivering operational solutions while ensuring legislative compliance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="xl" className="sm:w-auto">
                <Link to="/services">View Services</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl" className="sm:w-auto">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="mt-8 text-sm text-panel-muted">
              <span className="font-medium text-panel-foreground">+27 72 803 1329</span>
              <span className="mx-2">|</span>
              <a className="underline underline-offset-4 hover:opacity-90" href="mailto:Dean@dbpartners.co.za">
                Dean@dbpartners.co.za
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-4 md:grid-cols-12 md:px-6">
          <div className="relative overflow-hidden rounded-2xl shadow-soft md:col-span-7">
            <img
              src={aboutImage}
              alt="DB Partners consulting meeting in a modern boardroom"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-panel text-panel-foreground shadow-elevated bg-panel-sheen md:col-span-5">
            <div className="flex h-full flex-col justify-center p-6 md:p-8">
              <h2 className="font-heading text-3xl font-semibold tracking-tightish md:text-4xl">DB Partners</h2>
              <p className="mt-5 text-sm leading-relaxed text-panel-muted md:text-base">
                A South African consulting company focused on practical, compliant, and people-first
                solutions across Human Resources, Industrial Relations, and Transformation.
              </p>
              <div className="mt-6">
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">Our Services</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Comprehensive HR, IR, and transformation support tailored to your business.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
              <Link to="/services">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_PREVIEW.map(({ title, image, desc }) => (
              <Link to="/services" key={title}>
                <Card
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border-0 shadow-soft",
                    "transition-transform hover:-translate-y-1",
                  )}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-heading text-base font-semibold tracking-tightish text-white">{title}</p>
                    <p className="mt-1 text-xs text-white/70">{desc}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY DB PARTNERS TEASER */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">
            Why DB Partners?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Reduced legal risk, improved employee relations, cost-effective solutions, expert guidance, and operational effectiveness.
          </p>
          <div className="mt-8">
            <Button asChild variant="hero" size="xl">
              <Link to="/why-db-partners">
                Discover More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
