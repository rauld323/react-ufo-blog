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
  const { control, handleSubmit, formState } = useForm<ContactFormSchema>({
    mode: "onChange",
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
                label={"Name"}
                placeHolder={"Raul Davila"}
                {...field}
                error={false}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                label={"Email"}
                placeHolder={"your@email.com"}
                {...field}
                error={false}
              />
            )}
          />

          <Controller
            control={control}
            name="subject"
            render={({ field }) => (
              <Input
                label={"Subject"}
                placeHolder={"Math"}
                {...field}
                error={false}
              />
            )}
          />

          <Controller
            control={control}
            name="textArea"
            render={({ field }) => <textarea {...field} />}
          />

          <input type="submit" />
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default Contact;
