import { z, ZodType } from "zod";

type ContactFormValue = {
  fullName: string;
  subject: string;
  email: string;
  textArea: string;
};

export const testSchema = z.object({
  fullName: z.string(),
  subject: z.string(),
  email: z.string().email(),
  textArea: z.string(),
});

export type TestSchema = z.infer<typeof testSchema>;
