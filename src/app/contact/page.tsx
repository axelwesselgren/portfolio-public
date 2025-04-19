import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { Section } from "@/components/layout/section";

export default function Contact() {
  return (
    <Section>
      <Section.Header
        title="Get in Touch"
        description="Have a project in mind or just want to say hello? Feel free to reach out!"
      />
      <div className="grid gap-8 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}
