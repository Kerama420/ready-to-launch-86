import { createFileRoute } from "@tanstack/react-router";
import { Pill, Microscope, Route as RouteIcon } from "lucide-react";
import { Layout, Btn, Section, CheckList, CtaBand, meta } from "@/components/site";
import hero from "@/assets/hero-healthcare.jpg";

export const Route = createFileRoute("/")({
  head: () => meta("Sovereign Biosystems | Health Products and Technologies in Kenya", "Kenya-based health products and technologies company connecting pharmaceuticals, medical products and health technologies with East African markets.", "/"),
  component: Home,
});

const cards = [
  { icon: Pill, to: "/pharmaceuticals", h: "Pharmaceuticals", p: "Supporting product opportunities, partnerships and market pathways for pharmaceutical suppliers and healthcare companies." },
  { icon: Microscope, to: "/health-products-technologies", h: "Health Products and Technologies", p: "Connecting medical consumables, diagnostics, devices, equipment and other technologies with practical healthcare needs." },
  { icon: RouteIcon, to: "/market-access", h: "Market Access", p: "Helping international and local partners understand the market, identify channels and build responsible routes to growth." },
];

const steps = [
  "Understand the product, the evidence and the intended market.",
  "Assess the opportunity, customer need, competition and route to market.",
  "Position the solution for the right channel and decision-maker.",
  "Connect the supplier with appropriate partners, distributors or institutions.",
  "Support implementation, feedback and responsible market development.",
];

function Home() {
  return (
    <Layout>
      <section className="bg-cream">
        <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Kenya · East Africa</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] md:text-6xl">Connecting quality health solutions to East African markets</h1>
            <p className="mt-6 text-lg text-muted-foreground">Sovereign Biosystems EA Limited is a Kenya-based health products and technologies company helping manufacturers, principals, distributors and healthcare partners develop practical pathways for pharmaceuticals, medical products and emerging health technologies.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/contact">Partner with us</Btn>
              <Btn to="/capabilities" variant="outline">Explore our capabilities</Btn>
            </div>
          </div>
          <img src={hero} alt="Kenyan pharmacist and logistics colleague reviewing medical supplies in a Nairobi warehouse" className="aspect-[4/3] w-full rounded-xl object-cover shadow-xl" width={1536} height={1024} />
        </div>
      </section>

      <Section>
        <p className="max-w-4xl text-2xl font-medium leading-snug md:text-3xl">Healthcare products create value only when they can reach the people and institutions that need them. <span className="text-primary">We combine healthcare understanding, local market insight and partnership-led execution</span> to help credible solutions move from opportunity to access.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, to, h, p }) => (
            <a key={h} href={to} className="group rounded-xl border-2 border-primary/20 p-7 transition hover:border-primary">
              <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-bold">{h}</h3>
              <p className="mt-3 text-muted-foreground">{p}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-primary group-hover:underline">Learn more →</span>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Why Sovereign Biosystems" tint>
        <CheckList items={[
          "Kenya-based perspective with an understanding of how healthcare is delivered and procured.",
          "A broad health products and technologies platform that can grow with the market.",
          "Partnerships built around quality, reliability, responsiveness and practical execution.",
          "A route-to-market mindset linking suppliers, distributors, institutions and customers.",
          "Regulatory-aware communication that respects the requirements of each product category.",
        ]} />
      </Section>

      <CtaBand text="Looking for a credible partner in Kenya and East Africa?"><Btn to="/contact" variant="light">Partner with us</Btn></CtaBand>

      <Section title="How we work">
        <ol className="grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s} className="border-t-2 border-gold pt-5">
              <span className="text-3xl font-extrabold text-accent">0{i + 1}</span>
              <p className="mt-3 text-sm">{s}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tint>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Have a product, technology or market-entry question?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Tell us what you are building, supplying or looking for. Our team will help identify the most practical next conversation.</p>
          <div className="mt-8"><Btn to="/contact">Start a conversation</Btn></div>
        </div>
      </Section>
    </Layout>
  );
}
