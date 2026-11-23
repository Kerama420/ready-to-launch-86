import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Check } from "lucide-react";
import logo from "@/assets/sovereign-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/pharmaceuticals", label: "Pharmaceuticals" },
  { to: "/health-products-technologies", label: "Health Products and Technologies" },
  { to: "/market-access", label: "Market Access" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Btn({ to, children, variant = "primary" }: { to: string; children: ReactNode; variant?: "primary" | "outline" | "light" }) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary/5",
    light: "bg-background text-primary hover:bg-background/90",
  }[variant];
  return (
    <Link to={to} className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Sovereign Biosystems home" className="shrink-0">
          <img src={logo.url} alt="Sovereign Biosystems EA Limited logo" className="h-12 w-auto mix-blend-multiply md:h-14" />
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="border-b-2 border-transparent py-1 text-sm font-medium text-foreground/80 hover:text-foreground"
              activeProps={{ className: "!border-primary !text-foreground font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:block"><Btn to="/contact">Partner with us</Btn></div>
        <button className="xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background xl:hidden">
          <div className="container-site flex flex-col py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 font-medium"
                activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>{n.label}</Link>
            ))}
            <div className="pt-3"><Btn to="/contact">Partner with us</Btn></div>
          </div>
        </nav>
      )}
      <div className="kenya-rule opacity-80" style={{ height: 2 }} />
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-cream">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img src={logo.url} alt="Sovereign Biosystems EA Limited" className="h-12 w-auto mix-blend-multiply" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">Kenya-based health products and technologies company connecting credible healthcare solutions with East African markets.</p>
        </div>
        <nav className="grid grid-cols-1 gap-2 text-sm">
          {nav.map((n) => <Link key={n.to} to={n.to} className="hover:text-primary">{n.label}</Link>)}
        </nav>
        <div className="space-y-2 text-sm">
          <p><a className="hover:text-primary" href="mailto:info@sovereignbiosystems.com">info@sovereignbiosystems.com</a></p>
          <p>sovereignbiosystems.com</p>
          <p>Kenya</p>
          <div className="flex gap-4 pt-3 text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Use</Link>
          </div>
        </div>
      </div>
      <div className="container-site border-t py-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Sovereign Biosystems EA Limited · Kenya</div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ crumb, title, intro }: { crumb: string; title: string; intro: string }) {
  return (
    <section className="bg-cream">
      <div className="container-site py-14 md:py-20">
        <p className="text-sm font-semibold text-primary"><Link to="/">Home</Link> / {crumb}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}

export function Section({ title, children, tint }: { title?: string; children: ReactNode; tint?: boolean }) {
  return (
    <section className={tint ? "bg-cream" : ""}>
      <div className="container-site py-14 md:py-20">
        {title && (<><h2 className="text-3xl font-bold md:text-4xl">{title}</h2><div className="mt-4 mb-10 h-0.5 w-16 bg-gold" /></>)}
        {children}
      </div>
    </section>
  );
}

export function CheckList({ items, cols = 2 }: { items: string[]; cols?: 1 | 2 | 3 }) {
  const c = { 1: "", 2: "md:grid-cols-2", 3: "md:grid-cols-3" }[cols];
  return (
    <ul className={`grid gap-4 ${c}`}>
      {items.map((i) => (
        <li key={i} className="flex gap-3 rounded-lg border bg-card p-5">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({ text, children }: { text: string; children: ReactNode }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-site flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-xl font-semibold md:text-2xl">{text}</p>
        <div className="flex flex-wrap gap-3">{children}</div>
      </div>
    </section>
  );
}

export function meta(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
