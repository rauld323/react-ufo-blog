"use client";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledContainer, StyledForm } from "../create/page";
import {
  ContactFormSchema,
  contactFormSchema,
} from "./formSchema/contactFormSchema";
import Input from "../components/Input";

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(contactFormSchema),
  });
  return (
    <>
      <StyledContainer>
        <h1>Contact Us!</h1>
        <StyledForm onSubmit={handleSubmit((data) => console.log(data))}>
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => (
              <Input
                {...field}
                label={"Name"}
                placeHolder={"ex. Timmy Turner"}
                error={errors.fullName?.message}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                label={"Email"}
                placeHolder={"your@email.com"}
                error={errors.email?.message}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="subject"
            render={({ field }) => (
              <Input
                {...field}
                label={"Subject"}
                placeHolder={"Math"}
                error={errors.subject?.message}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="textArea"
            render={({ field }) => (
              <Input
                {...field}
                isTextArea
                label={"Message"}
                placeHolder={"What would you like to share?"}
                error={errors.textArea?.message}
                onChange={field.onChange}
              />
            )}
          />

          <input type="submit" />
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default Contact;
