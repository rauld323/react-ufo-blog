"use client";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("fullName", { required: true })} />
      {errors.fullName && <p>Name is required.</p>}

      <input {...register("subject", { required: true })} />
      {errors.subject && <p>Subject is required.</p>}

      <input {...register("email", { pattern: /\d+/ })} />
      {errors.email && <p>Please enter an email</p>}

      <textarea {...register("text-area", { required: true })} />
      {errors.textArea && <p>Please enter your message here</p>}

      <input type="submit" />
    </form>
  );
};

export default Contact;
