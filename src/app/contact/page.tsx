"use client";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import {
  contactFormValues,
  IContactFormValue,
} from "./formSchema/contactFormSchema";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormValue>({
    mode: "onChange",
    defaultValues: contactFormValues,
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
