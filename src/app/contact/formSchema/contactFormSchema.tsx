import { z, ZodType } from "zod";

type ContactFormValue = {
  fullName: string;
  subject: string;
  email: string;
  textArea: string;
};

export const contactFormSchema = z.object({
  fullName: z.string(),
  subject: z.string(),
  email: z.string().email(),
  textArea: z.string(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
