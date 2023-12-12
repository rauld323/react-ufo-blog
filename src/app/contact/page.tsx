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
import HCaptcha from "@hcaptcha/react-hcaptcha";
import styled from "styled-components";

const Contact = () => {
  const apiKey = process.env.API_KEY;

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(contactFormSchema),
  });

  const onHCaptchaChange = (token: string) => {
    setValue("email", token);
  };

  return (
    <>
      <StyledContainer>
        <h1>Contact Us!</h1>
        <StyledForm onSubmit={handleSubmit(() => null)}>
          <input type="hidden" name="access_key" value={apiKey} />
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
            name="subject"
            render={({ field }) => (
              <Input
                {...field}
                label={"Subject"}
                placeHolder={"Let me buy you a coffee!"}
                error={errors.subject?.message}
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

          <StyledCaptchaContainer>
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              onVerify={onHCaptchaChange}
            />
          </StyledCaptchaContainer>

          <button type="submit">Submit</button>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default Contact;

const StyledCaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
