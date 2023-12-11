"use client";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { testSchema, TestSchema } from "./formSchema/contactFormSchema";

const Contact = () => {
  const { control, handleSubmit } = useForm<TestSchema>({
    mode: "onChange",
    resolver: zodResolver(testSchema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller
          control={control}
          name="fullName"
          render={({ field }) => <input {...field} />}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field }) => <input {...field} />}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => <input {...field} />}
        />

        <Controller
          control={control}
          name="textArea"
          render={({ field }) => <textarea {...field} />}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
