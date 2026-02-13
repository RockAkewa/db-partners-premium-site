import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ContactFormCard } from "@/components/dbp/ContactFormCard";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | DB Partners";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <h1 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">Contact</h1>
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
    </main>
  );
};

export default Contact;
