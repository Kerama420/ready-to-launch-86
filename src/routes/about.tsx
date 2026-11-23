import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Handshake, Sprout } from "lucide-react";
import { Layout, PageHero, Section, CheckList, CtaBand, Btn, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About Sovereign Biosystems EA Limited", "A Kenyan health products and technologies company building practical healthcare partnerships across East Africa.", "/about"),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero crumb="About" title="Born in Kenya. Built for practical healthcare partnerships." intro="Sovereign Biosystems EA Limited is a Kenyan health products and technologies company focused on connecting credible health solutions with real market needs. We bring together healthcare insight, commercial discipline and an understanding of how products move from supplier to patient." />
      <Section>
        <p className="max-w-3xl text-lg text-muted-foreground">Our platform is intentionally designed to grow. It can support pharmaceuticals, medical consumables, diagnostics, equipment and other health technologies as partnerships, regulatory pathways and customer needs develop.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[{ i: MapPin, t: "Kenya-based", d: "Grounded in local market needs and regional opportunity." }, { i: Handshake, t: "Partnership-led", d: "Working with credible suppliers, distributors, institutions and technical partners." }, { i: Sprout, t: "Built to grow", d: "Starting with focused products while building capability for wider opportunities." }].map(({ i: Icon, t, d }) => (
            <div key={t} className="flex gap-4 rounded-xl border-2 border-primary/20 p-6">
              <Icon className="h-10 w-10 shrink-0 text-primary" strokeWidth={1.5} />
              <div><h3 className="text-lg font-bold">{t}</h3><p className="mt-1 text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Our principles" tint>
        <CheckList items={["Quality before volume.", "Integrity in every partnership.", "Practical solutions for African settings.", "Respect for regulatory and professional standards.", "Long-term value for suppliers, customers and healthcare systems."]} />
      </Section>
      <CtaBand text="Let us discuss a product, market or supply need."><Btn to="/contact" variant="light">Contact our team</Btn></CtaBand>
    </Layout>
  );
}
