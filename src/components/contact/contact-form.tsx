"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@/zod/contact-form";
import { ContactFormFields } from "@/components/contact/contact-form-fields";
import { SubmitButton } from "@/components/contact/submit-button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(values);

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    form.reset();
    setIsSubmitting(false);
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-xs">
      <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <ContactFormFields form={form} />
          <SubmitButton
            isSubmitting={isSubmitting}
            isValid={form.formState.isValid}
          />
        </form>
      </Form>
    </div>
  );
}
