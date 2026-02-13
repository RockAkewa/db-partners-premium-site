import { useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import roiLegalImage from "@/assets/roi-legal-risk.jpg";
import roiEmployeeImage from "@/assets/roi-employee-relations.jpg";
import roiCostImage from "@/assets/roi-cost-effective.jpg";
import roiExpertImage from "@/assets/roi-expert-guidance.jpg";
import roiOperationalImage from "@/assets/roi-operational.jpg";

const WhyDbPartners = () => {
  useEffect(() => {
    document.title = "Why DB Partners | DB Partners";
    window.scrollTo(0, 0);
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
    <main className="pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h1 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">
            DB Partners provides the following return on investment
          </h1>
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

        {/* HOW WE WORK */}
        <div className="mt-20">
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
      </div>
    </main>
  );
};

export default WhyDbPartners;
