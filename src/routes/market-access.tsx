import { createFileRoute } from "@tanstack/react-router";
import { Factory, Building2 } from "lucide-react";
import { Layout, PageHero, Section, CheckList, CtaBand, Btn, meta } from "@/components/site";

export const Route = createFileRoute("/market-access")({
  head: () => meta("Healthcare Market Access and Distribution in East Africa | Sovereign Biosystems", "Healthcare market entry, route-to-market design and distributor partnerships for Kenya and East Africa.", "/market-access"),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero crumb="Market Access" title="Market access for healthcare products in East Africa" intro="Entering a new healthcare market requires more than a product catalogue. It requires local understanding, the right partners, appropriate documentation and a disciplined route from introduction to sustained supply." />
      <Section title="Market-access support">
        <CheckList items={["Market and customer understanding.", "Channel and route-to-market design.", "Identification of local distributors, agents and institutional partners.", "Commercial and procurement readiness.", "Product positioning and launch planning.", "Partner conversations and opportunity development.", "Structured feedback from the market.", "Support for responsible, long-term relationships."]} />
      </Section>
      <CtaBand text="Planning to enter or grow in Kenya or East Africa?"><Btn to="/contact" variant="light">Start a conversation</Btn></CtaBand>
      <Section title="Who we support" tint>
        <CheckList cols={1} items={["International manufacturers entering Kenya or East Africa.", "African suppliers seeking stronger distribution pathways.", "Distributors looking for quality products and reliable principals.", "Hospitals, clinics, laboratories and procurement organisations.", "Investors and product developers evaluating healthcare opportunities."]} />
      </Section>
      <Section title="Two pathways">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-primary/20 p-8">
            <Factory className="h-10 w-10 text-primary" strokeWidth={1.5} />
            <h3 className="mt-4 text-xl font-bold">For suppliers and principals</h3>
            <p className="mt-3 text-muted-foreground">Tell us what you make, where you are registered, the markets you are considering and the type of partner you need.</p>
            <div className="mt-6"><Btn to="/contact">I am a supplier</Btn></div>
          </div>
          <div className="rounded-xl border-2 border-accent/20 p-8">
            <Building2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
            <h3 className="mt-4 text-xl font-bold">For buyers and institutions</h3>
            <p className="mt-3 text-muted-foreground">Tell us what product, technology or supply challenge you are trying to solve.</p>
            <div className="mt-6"><Btn to="/contact" variant="outline">I am looking for a product</Btn></div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
