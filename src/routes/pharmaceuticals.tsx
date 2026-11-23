import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, CheckList, CtaBand, Btn, meta } from "@/components/site";

export const Route = createFileRoute("/pharmaceuticals")({
  head: () => meta("Pharmaceutical Market Access in Kenya and East Africa | Sovereign Biosystems", "Pharmaceutical market access, partnership development and distribution pathways in Kenya and East Africa.", "/pharmaceuticals"),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero crumb="Pharmaceuticals" title="Pharmaceutical pathways for African markets" intro="Sovereign Biosystems works with pharmaceutical companies, principals and healthcare partners seeking to understand opportunities in Kenya and selected East African markets. We focus on practical market intelligence, partnership development and responsible commercial pathways." />
      <Section title="What we support">
        <CheckList items={[
          "Assessment of pharmaceutical product opportunities and unmet needs.",
          "Identification of suitable local or regional commercial partners.",
          "Market-entry planning and channel strategy.",
          "Preparation for distributor, institutional and procurement conversations.",
          "Coordination with appropriately qualified regulatory and technical professionals where required.",
          "Ongoing market feedback and relationship support.",
        ]} />
      </Section>
      <CtaBand text="Are you a pharmaceutical principal looking for a credible East African pathway?"><Btn to="/contact" variant="light">Discuss a pharmaceutical opportunity</Btn></CtaBand>
      <Section title="Product categories" tint>
        <div className="flex flex-wrap gap-3">
          {["Prescription medicines", "Over-the-counter products", "Hospital medicines", "Specialty products", "Other pharmaceutical solutions"].map((c) => (
            <span key={c} className="rounded-full border border-primary/40 bg-background px-5 py-2 font-medium">{c}</span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground">Specific products are added only when their availability, regulatory status and commercial arrangements are confirmed.</p>
      </Section>
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Share your product profile</h2>
          <p className="mt-4 text-lg text-muted-foreground">Tell us your product profile, target market and partnership needs.</p>
          <div className="mt-8"><Btn to="/contact">Discuss a pharmaceutical opportunity</Btn></div>
          <p className="mt-10 border-l-4 border-gold pl-4 text-sm text-muted-foreground"><strong className="text-foreground">Regulatory note:</strong> Sovereign Biosystems does not replace national regulators or licensed professionals. Product introduction and distribution activities are undertaken subject to applicable approvals, agreements and professional requirements.</p>
        </div>
      </Section>
    </Layout>
  );
}
