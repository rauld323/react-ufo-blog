import { z } from "zod";

export type ContactFormValue = {
  fullName: string;
  subject: string;
  email: string;
  textArea: string;
};

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name should be at least 2 characters")
    .max(20, "Name should not exceed 20 characters")
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Invalid name format" }),
  subject: z
    .string()
    .max(10, "Name should not exceed 10 characters")
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Invalid name format" }),
  email: z
    .string()
    .email("Invalid email format")
    .max(50, "Email should not exceed 50 characters"),
  textArea: z
    .string()
    .max(300, "Message should not exceed 300 characters")
    .regex(/^[a-zA-Z0-9\s.,!?'"()]+$/, {
      message: "Invalid characters detected in the message",
    }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
