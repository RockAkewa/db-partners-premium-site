import { useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CurvedLines } from "@/components/dbp/CurvedLines";
import { DbHeader } from "@/components/dbp/DbHeader";
import { ServiceSplitBlock } from "@/components/dbp/ServiceSplitBlock";
import { ContactFormCard } from "@/components/dbp/ContactFormCard";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

import aboutImage from "@/assets/about-boardroom.jpg";
import hrImage from "@/assets/service-human-resources.jpg";
import irImage from "@/assets/service-industrial-relations.jpg";
import transformationImage from "@/assets/service-transformation.jpg";
import trainingImage from "@/assets/service-training.jpg";
import roiLegalImage from "@/assets/roi-legal-risk.jpg";
import roiEmployeeImage from "@/assets/roi-employee-relations.jpg";
import roiCostImage from "@/assets/roi-cost-effective.jpg";
import roiExpertImage from "@/assets/roi-expert-guidance.jpg";
import roiOperationalImage from "@/assets/roi-operational.jpg";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

export function DbPartnersOnePager() {
  // Lightweight “signature moment”: subtle parallax drift for the hero accents.
  const heroRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!heroRef.current) return;
    if (prefersReducedMotion()) return;

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

  const benefits = useMemo(
    () => [
      { title: "Reduced Legal Risk", image: roiLegalImage },
      { title: "Improved Employee Relations", image: roiEmployeeImage },
      { title: "Cost Effective Solutions", image: roiCostImage },
      { title: "Expert Guidance & Assistance", image: roiExpertImage },
      { title: "Operational Effectiveness", image: roiOperationalImage },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-background">
      <DbHeader />

      {/* HERO */}
      <section
        id="home"
        className={cn(
          "section-anchor relative overflow-hidden bg-panel text-panel-foreground",
          "pt-28 md:pt-32",
        )}
      >
        <div
          ref={heroRef}
          className={cn(
            "absolute inset-0 bg-hero-sheen",
            "[--px:0] [--py:0]",
          )}
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

        <div className="relative mx-auto max-w-6xl px-4 pb-12 md:px-6 md:pb-16">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="font-heading text-sm tracking-[0.18em] text-panel-muted">DB PARTNERS</p>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.05] tracking-tightish md:text-6xl">
                Your preferred Human Resources, Transformation and Industrial Relations Partner
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-panel-muted md:text-lg">
                Strategic partnerships delivering operational solutions while ensuring legislative compliance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="hero" size="xl" className="sm:w-auto">
                  <a href="#services">View Services</a>
                </Button>
                <Button asChild variant="heroOutline" size="xl" className="sm:w-auto">
                  <a href="#contact">Contact Us</a>
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

            <div className="md:col-span-4">
              <Card className="overflow-hidden rounded-2xl border-primary-foreground/10 bg-panel/60 text-panel-foreground shadow-elevated backdrop-blur">
                <div className="p-6">
                  <p className="font-heading text-sm font-semibold tracking-tightish">Brochure-ready consulting</p>
                  <p className="mt-2 text-sm text-panel-muted">
                    Clean guidance, measurable outcomes, and practical compliance support.
                  </p>
                  <div className="mt-5 h-px w-full hairline opacity-40" />
                  <ul className="mt-5 grid gap-3 text-sm text-panel-muted">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-panel-muted/70" />
                      HR optimisation & audits
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-panel-muted/70" />
                      Industrial relations support
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-panel-muted/70" />
                      Transformation compliance
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-anchor py-14 md:py-20">
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
            <div className="p-6 md:p-8">
              <h2 className="font-heading text-3xl font-semibold tracking-tightish md:text-4xl">DB Partners</h2>
              <p className="mt-5 text-sm leading-relaxed text-panel-muted md:text-base">
                DB Partners is a South African consulting company focused on practical, compliant, and people-first
                solutions across Human Resources, Industrial Relations, and Transformation.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-panel-muted md:text-base">
                We work as a true partner to leadership teams—helping you manage risk, improve employee relations,
                and implement operational strategies that are sustainable and legislation-aligned.
              </p>
              <div className="mt-6">
                <Button asChild variant="heroOutline" size="lg">
                  <a href="#why">Why DB Partners</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section-anchor py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">
              DB Partners provides the following return on investment
            </h2>
            <p className="mt-4 text-muted-foreground">
              A premium, compliant approach that supports your leadership team and protects the organisation.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, image }) => (
              <Card
                key={title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border-0 shadow-soft",
                  "transition-transform hover:-translate-y-0.5",
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
                  <p className="font-heading text-base font-semibold tracking-tightish text-white md:text-lg">
                    {title}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-anchor py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">Services</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Alternating brochure-style panels with practical deliverables.
          </p>
        </div>

        <div className="mt-8">
          <ServiceSplitBlock
            title="HUMAN RESOURCES"
            bullets={[
              "Auditing & Development of HR Best Practices",
              "HR Legislative Compliance",
              "HR Optimisation",
              "HR Policy Auditing & Development",
              "Recruitment Management & Selection",
              "Change Management",
              "Payroll",
            ]}
            imageSrc={hrImage}
            imageAlt="Human resources consulting session"
          />
          <ServiceSplitBlock
            reverse
            title="INDUSTRIAL & LABOUR RELATIONS"
            bullets={[
              "Legal compliance in Industrial & Labour legislation",
              "Employment contract review and drafting",
              "Discipline & Performance Management",
              "Incapacity Management",
              "Restructuring (S189)",
            ]}
            imageSrc={irImage}
            imageAlt="Industrial relations consultation and handshake"
          />
          <ServiceSplitBlock
            title="TRANSFORMATION"
            bullets={[
              "Employment Equity Plan development & implementation",
              "EEA compliance audits",
              "Assistance with Department of Labour inspections",
              "HR reporting and submissions",
              "Transformation strategy support",
            ]}
            imageSrc={transformationImage}
            imageAlt="Transformation strategy workshop"
          />
          <ServiceSplitBlock
            reverse
            title="TRAINING & DEVELOPMENT"
            bullets={[
              "Workplace Skills Plan development",
              "Skills Development compliance support",
              "Training facilitation and management",
              "SETA submissions support",
            ]}
            imageSrc={trainingImage}
            imageAlt="Training and development session"
          />
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-anchor py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">How we work</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">A simple 3-step engagement process.</p>
            </div>
            <Sparkles className="hidden h-7 w-7 text-muted-foreground md:block" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Discover", desc: "Assess & audit" },
              { title: "Implement", desc: "Strategy & execution" },
              { title: "Support", desc: "Ongoing compliance & improvement" },
            ].map((s, idx) => (
              <Card
                key={s.title}
                className={cn(
                  "rounded-2xl border bg-card p-6 shadow-soft",
                  "transition-transform hover:-translate-y-0.5",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading text-lg font-semibold tracking-tightish">{s.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                    <span className="font-heading text-sm font-semibold">{idx + 1}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-anchor py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-12 md:px-6">
          <div className="md:col-span-5">
            <h2 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">Contact</h2>
            <p className="mt-4 text-muted-foreground">
              Ready to talk? Book a consultation or send a message.
            </p>

            <div className="mt-8 rounded-2xl bg-secondary p-6 shadow-soft">
              <p className="font-heading text-sm font-semibold tracking-tightish">DB Partners</p>
              <div className="mt-4 grid gap-2 text-sm">
                <a className="hover:underline hover:underline-offset-4" href="tel:+27728031329">
                  +27 72 803 1329
                </a>
                <a className="hover:underline hover:underline-offset-4" href="mailto:Dean@dbpartners.co.za">
                  Dean@dbpartners.co.za
                </a>
              </div>
              <div className="mt-6">
                <Button asChild variant="soft" size="lg">
                  <a href="mailto:Dean@dbpartners.co.za?subject=DB%20Partners%20Consultation%20Enquiry">Email us</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactFormCard />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>© DB Partners. All Rights Reserved.</p>
          <p className="text-foreground/60">Human Resources • Transformation • Industrial Relations</p>
        </div>
      </footer>
    </div>
  );
}
