import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceSplitBlockProps = {
  id?: string;
  title: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

export function ServiceSplitBlock({
  id,
  title,
  bullets,
  imageSrc,
  imageAlt,
  reverse,
}: ServiceSplitBlockProps) {
  return (
    <section id={id} className="section-anchor py-10 md:py-14">
      <div
        className={cn(
          "mx-auto grid max-w-6xl items-stretch gap-6 px-4 md:px-6",
          "md:grid-cols-12",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl shadow-soft",
            "md:col-span-6",
            reverse ? "md:order-2" : "md:order-1",
          )}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
        </div>

        <div
          className={cn(
            "relative overflow-hidden rounded-2xl bg-panel text-panel-foreground shadow-elevated",
            "bg-panel-sheen",
            "md:col-span-6",
            reverse ? "md:order-1" : "md:order-2",
          )}
        >
          <div className="flex h-full flex-col p-6 md:p-8">
            <h3 className="font-heading text-2xl font-semibold tracking-tightish md:text-3xl">{title}</h3>
            <div className="mt-4 h-px w-full hairline opacity-40" />

            <ul className="mt-6 grid gap-3 text-sm text-panel-muted md:text-base">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-panel-muted/70" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button asChild variant="heroOutline" size="lg" className="w-full sm:w-auto">
                <a href="#contact">Enquire Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
