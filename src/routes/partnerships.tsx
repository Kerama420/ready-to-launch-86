import { createFileRoute } from "@tanstack/react-router";
import { Factory, Network, Building2 } from "lucide-react";
import { Layout, PageHero, Section, CheckList, CtaBand, Btn, meta } from "@/components/site";

export const Route = createFileRoute("/partnerships")({
  head: () => meta("Healthcare Partnerships in Kenya and East Africa | Sovereign Biosystems", "Partnership opportunities for healthcare manufacturers, distributors, institutions and technical partners in Kenya and East Africa.", "/partnerships"),
  component: Page,
});

const partners = [
  { icon: Factory, title: "Manufacturers and principals", description: "Introduce credible products to East African markets through informed positioning, local partner identification and responsible commercial pathways." },
  { icon: Network, title: "Distributors and technical partners", description: "Develop reliable product and service relationships grounded in quality, market understanding, clear expectations and long-term value." },
  { icon: Building2, title: "Healthcare institutions and buyers", description: "Share a product, technology or supply need so we can help identify an appropriate solution and a practical next conversation." },
];

function Page() {
  return (
    <Layout>
      <PageHero crumb="Partnerships" title="Partnerships built around quality, trust and practical execution" intro="Sovereign Biosystems connects manufacturers, distributors, healthcare institutions and technical partners around real needs in Kenya and East Africa." />
      <Section title="Who we work with">
        <div className="grid gap-6 md:grid-cols-3">
          {partners.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border-2 border-primary/20 p-6">
              <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="What partners can expect" tint>
        <CheckList items={[
          "A clear understanding of the product, need and intended market.",
          "Honest assessment of the opportunity and practical next steps.",
          "Respect for quality, regulatory and professional standards.",
          "Responsive communication and carefully developed relationships.",
          "A long-term view of value for suppliers, customers and healthcare systems.",
          "Feedback that supports responsible market development.",
        ]} />
      </Section>
      <CtaBand text="Tell us what you make, distribute or need. Let us explore the right partnership."><Btn to="/contact" variant="light">Partner with us</Btn></CtaBand>
    </Layout>
  );
}
