import { createFileRoute } from "@tanstack/react-router";
import { Bandage, FlaskConical, Stethoscope, ShieldCheck, Package, Activity } from "lucide-react";
import { Layout, PageHero, Section, CheckList, CtaBand, Btn, meta } from "@/components/site";

export const Route = createFileRoute("/health-products-technologies")({
  head: () => meta("Health Products and Medical Technologies in Kenya | Sovereign Biosystems", "Medical consumables, wound care, diagnostics, devices, equipment and health technologies for Kenya and East Africa.", "/health-products-technologies"),
  component: Page,
});

const areas = [
  { icon: Bandage, t: "Medical consumables and wound care", d: "Including adhesive and zinc oxide strapping products." },
  { icon: FlaskConical, t: "Diagnostics and laboratory", d: "Laboratory products and testing technologies." },
  { icon: Stethoscope, t: "Medical devices and clinical equipment", d: "Devices and equipment for clinical settings." },
  { icon: ShieldCheck, t: "Infection prevention and control", d: "Products that support safer care environments." },
  { icon: Package, t: "Hospital, surgical and clinical supplies", d: "General supplies for hospitals and clinics." },
  { icon: Activity, t: "Digital and enabling technologies", d: "Monitoring and other health technologies where appropriate." },
];

function Page() {
  return (
    <Layout>
      <PageHero crumb="Health Products and Technologies" title="Health products and technologies that strengthen care delivery" intro="We are building a flexible platform for healthcare products and technologies that respond to real needs in hospitals, clinics, laboratories, pharmacies, workplaces and communities." />
      <Section title="Product areas">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border-2 border-primary/20 p-6">
              <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tint>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-center">
          <div>
            <span className="inline-block rounded-md border border-primary px-3 py-1 text-sm font-semibold text-primary">Product pathway in development</span>
            <h2 className="mt-4 text-3xl font-bold">Zinc oxide strapping tape</h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">One pathway within our medical consumables and wound care area. Planned roll formats include 25 mm and 50 mm widths in 5 m and 10 m lengths. Pack sizes, specifications and availability will be confirmed.</p>
            <div className="mt-6"><Btn to="/contact">Make a product enquiry</Btn></div>
          </div>
        </div>
      </Section>
      <Section title="How products are assessed">
        <CheckList cols={3} items={["Clinical or operational usefulness.", "Quality, safety and evidence.", "Regulatory and documentation readiness.", "Supply reliability and service support.", "Affordability and lifecycle value.", "Fit with the needs of the intended market."]} />
      </Section>
      <CtaBand text="If you manufacture, supply or need a health product or technology, we would like to understand the opportunity.">
        <Btn to="/contact" variant="light">Submit a product</Btn>
        <Btn to="/contact" variant="light">Tell us what you need</Btn>
      </CtaBand>
    </Layout>
  );
}
