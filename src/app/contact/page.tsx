"use client";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

const Contact = () => {
  interface IContactFormValue {
    fullName: string;
    subject: string;
    email: string;
    textArea: string;
  }
  const defaultValues = {
    fullName: "",
    subject: "",
    email: "",
    textArea: "",
  };

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormValue>({ mode: "onChange", defaultValues });

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
