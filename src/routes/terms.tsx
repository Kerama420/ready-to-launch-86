import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms of Use | Sovereign Biosystems", "Terms governing use of the Sovereign Biosystems EA Limited website.", "/terms"),
  component: () => (
    <Layout>
      <PageHero crumb="Terms of Use" title="Terms of Use" intro="Please read these terms before using this website." />
      <Section><div className="max-w-3xl space-y-4 text-muted-foreground">
        <p>This website provides general information about Sovereign Biosystems EA Limited. It is not medical, regulatory or professional advice.</p>
        <p>Product availability, regulatory status and commercial arrangements are subject to confirmation and applicable approvals. Nothing on this site is an offer to sell any product.</p>
        <p>Content, logos and materials on this site belong to Sovereign Biosystems EA Limited and may not be reused without permission. These terms are governed by the laws of Kenya.</p>
      </div></Section>
    </Layout>
  ),
});
