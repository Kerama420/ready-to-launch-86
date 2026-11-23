import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Globe, MapPin } from "lucide-react";
import { Layout, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact Sovereign Biosystems | Kenya", "Product, distribution, market-access and partnership enquiries for Sovereign Biosystems EA Limited in Kenya.", "/contact"),
  component: Page,
});

const field = "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 outline-none focus:ring-2 focus:ring-ring";
const label = "text-sm font-semibold";

function Page() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "");
    const body = `Name: ${g("name")}\nOrganisation: ${g("org")}\nEmail: ${g("email")}\nTelephone: ${g("phone")}\nCountry: ${g("country")}\nIntended market: ${g("market")}\nI am a: ${g("role")}\nEnquiry type: ${g("type")}\n\n${g("message")}`;
    window.location.href = `mailto:info@sovereignbiosystems.com?subject=${encodeURIComponent(`Website enquiry: ${g("type")} – ${g("org") || g("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <Layout>
      <div className="grid lg:grid-cols-2">
        <section className="container-site py-14 md:py-20 lg:mr-0 lg:max-w-[38rem]">
          <p className="text-sm font-semibold text-primary">Home / Contact</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">Let us discuss a product, market or supply need.</h1>
          <p className="mt-5 text-lg text-muted-foreground">For product, distribution, market-access and partnership enquiries, contact Sovereign Biosystems EA Limited.</p>
          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4"><Mail className="h-6 w-6 text-primary" /><a href="mailto:info@sovereignbiosystems.com" className="font-medium hover:text-primary">info@sovereignbiosystems.com</a></li>
            <li className="flex items-center gap-4"><Globe className="h-6 w-6 text-primary" /><span className="font-medium">sovereignbiosystems.com</span></li>
            <li className="flex items-center gap-4"><MapPin className="h-6 w-6 text-primary" /><span className="font-medium">Kenya</span></li>
          </ul>
        </section>
        <section className="bg-cream">
          <div className="px-5 py-14 md:px-10 md:py-20 lg:max-w-[38rem]">
            <h2 className="text-3xl font-bold">Send an enquiry</h2>
            <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className={label}>Name<input required name="name" className={field} /></label>
              <label className={label}>Organisation<input name="org" className={field} /></label>
              <label className={label}>Email<input required type="email" name="email" className={field} /></label>
              <label className={label}>Telephone<input type="tel" name="phone" className={field} /></label>
              <label className={label}>Country<input name="country" className={field} /></label>
              <label className={label}>Intended market<input name="market" className={field} /></label>
              <label className={label}>I am a
                <select required name="role" className={field} defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {["Manufacturer or principal", "Distributor", "Healthcare institution", "Buyer", "Investor", "Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label className={label}>Enquiry type
                <select required name="type" className={field} defaultValue="">
                  <option value="" disabled>Select an option</option>
                  {["Product", "Distribution", "Market access", "Partnership", "Procurement"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label className={`${label} sm:col-span-2`}>Message<textarea required name="message" rows={5} placeholder="Tell us what you need" className={field} /></label>
              <label className="flex gap-3 text-sm sm:col-span-2"><input required type="checkbox" className="mt-1 accent-[var(--primary)]" />I agree that Sovereign Biosystems may contact me to respond to this enquiry.</label>
              <div className="sm:col-span-2">
                <button type="submit" className="rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90">Send enquiry</button>
                <p className="mt-3 text-sm text-muted-foreground">{sent ? "Your email app should now open with your enquiry ready to send. You can attach a product profile there." : "Your enquiry will be reviewed by our team."}</p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}
