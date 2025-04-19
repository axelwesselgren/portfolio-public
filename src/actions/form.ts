"use server";

import { contactFormSchema } from "@/zod/contact-form";
import { z } from "zod";

type submitFormProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitForm({ name, email, subject, message }: submitFormProps) {
  try {
    contactFormSchema.parse({
      name,
      email,
      subject,
      message,
    });

    // do something here

    return {
      status: 200,
      message: "Form submitted successfully",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        status: 400,
        message: error.errors[0].message,
      };
    }

    return {
      status: 500,
      message: "Internal server error",
    };
  }
}