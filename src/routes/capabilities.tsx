import { createFileRoute, Link } from "@tanstack/react-router";
import { Pill, Microscope, ArrowRight } from "lucide-react";
import { Layout, PageHero, Section, CheckList, CtaBand, Btn, meta } from "@/components/site";

export const Route = createFileRoute("/capabilities")({
  head: () => meta("Healthcare Capabilities | Sovereign Biosystems Kenya", "Explore Sovereign Biosystems' pharmaceutical, medical product, diagnostic and health technology capabilities in Kenya and East Africa.", "/capabilities"),
  component: Page,
});

const capabilities = [
  {
    icon: Pill,
    to: "/pharmaceuticals",
    title: "Pharmaceuticals",
    description: "Product opportunity assessment, partnership development and practical market pathways for pharmaceutical suppliers and healthcare companies.",
  },
  {
    icon: Microscope,
    to: "/health-products-technologies",
    title: "Health Products and Technologies",
    description: "Medical consumables, wound care, diagnostics, devices, equipment and enabling technologies matched to practical healthcare needs.",
  },
] as const;

function Page() {
  return (
    <Layout>
      <PageHero crumb="Capabilities" title="Practical capabilities across health products and technologies" intro="We help credible healthcare solutions move from product opportunity to market access through local insight, partnership development and disciplined execution." />
      <Section title="Explore our capabilities">
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map(({ icon: Icon, to, title, description }) => (
            <Link key={to} to={to} className="group rounded-xl border-2 border-primary/20 p-7 transition hover:border-primary">
              <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <div className="mt-3 h-0.5 w-12 bg-gold" />
              <p className="mt-4 text-muted-foreground">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">Explore this capability <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </Section>
      <Section title="How we support every opportunity" tint>
        <CheckList items={[
          "Understand the product, evidence and intended market.",
          "Assess customer needs, competition and route to market.",
          "Position the solution for the right channel and decision-maker.",
          "Connect suppliers with appropriate partners and institutions.",
          "Support implementation, feedback and responsible market development.",
          "Respect applicable regulatory and professional requirements.",
        ]} />
      </Section>
      <CtaBand text="Have a product or technology you would like us to consider?"><Btn to="/contact" variant="light">Discuss an opportunity</Btn></CtaBand>
    </Layout>
  );
}
