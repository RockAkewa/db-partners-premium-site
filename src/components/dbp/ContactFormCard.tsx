import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number")
    .max(30)
    .regex(/^[+()\d\s-]+$/, "Phone can only contain digits and + ( ) -"),
  message: z.string().trim().min(10, "Please add a short message").max(1000),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactFormCard() {
  const { toast } = useToast();
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = (values: ContactValues) => {
    // No backend requested: provide polished feedback only.
    toast({
      title: "Message ready",
      description: "Thanks — we’ll be in touch shortly.",
    });
    form.reset();

    // Optional: open mail client (encoded + validated)
    const subject = encodeURIComponent("DB Partners Consultation Enquiry");
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\nMessage:\n${values.message}`,
    );
    window.open(`mailto:Dean@dbpartners.co.za?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
      <h3 className="font-heading text-xl font-semibold tracking-tightish">Send a message</h3>
      <p className="mt-2 text-sm text-muted-foreground">We’ll respond as soon as possible.</p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 grid gap-4">
        <div className="grid gap-1.5">
          <label className="text-sm text-foreground/80">Name</label>
          <Input placeholder="Your full name" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm text-foreground/80">Email</label>
          <Input placeholder="name@company.com" type="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm text-foreground/80">Phone</label>
          <Input placeholder="+27 ..." inputMode="tel" {...form.register("phone")} />
          {form.formState.errors.phone && (
            <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm text-foreground/80">Message</label>
          <Textarea placeholder="How can we help?" rows={5} {...form.register("message")} />
          {form.formState.errors.message && (
            <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button type="submit" variant="hero" size="xl" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
