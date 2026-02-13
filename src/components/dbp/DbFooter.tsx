import { Link } from "react-router-dom";

export function DbFooter() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
        <p>© DB Partners. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <p className="text-foreground/60">Human Resources • Transformation • Industrial Relations</p>
      </div>
    </footer>
  );
}
