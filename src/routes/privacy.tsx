import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy Policy | Sovereign Biosystems", "How Sovereign Biosystems EA Limited handles information shared through this website.", "/privacy"),
  component: () => (
    <Layout>
      <PageHero crumb="Privacy Policy" title="Privacy Policy" intro="How we handle information you share with us." />
      <Section><div className="max-w-3xl space-y-4 text-muted-foreground">
        <p>Sovereign Biosystems EA Limited collects only the information you choose to send us, such as your name, organisation, contact details and enquiry, and uses it solely to respond to your enquiry and manage our business relationship.</p>
        <p>We do not sell your information. We keep it only as long as needed and handle it in line with the Kenya Data Protection Act, 2019.</p>
        <p>To access, correct or delete your information, email info@sovereignbiosystems.com.</p>
      </div></Section>
    </Layout>
  ),
});
