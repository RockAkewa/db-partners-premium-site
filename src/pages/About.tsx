import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import aboutImage from "@/assets/about-boardroom.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About | DB Partners";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-4 md:grid-cols-12 md:px-6">
        <div className="relative overflow-hidden rounded-2xl shadow-soft md:col-span-7">
          <img
            src={aboutImage}
            alt="DB Partners consulting meeting in a modern boardroom"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-panel text-panel-foreground shadow-elevated bg-panel-sheen md:col-span-5">
          <div className="flex h-full flex-col justify-center p-6 md:p-8">
            <h1 className="font-heading text-3xl font-semibold tracking-tightish md:text-4xl">About DB Partners</h1>
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
                <Link to="/why-db-partners">Why DB Partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
