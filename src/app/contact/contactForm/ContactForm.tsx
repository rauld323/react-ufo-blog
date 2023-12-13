import HCaptcha from "@hcaptcha/react-hcaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../../components/Input";
import { StyledForm } from "../../create/page";
import {
  ContactFormSchema,
  contactFormSchema,
  ContactFormValue,
} from "./contactFormSchema";

interface IProps {
  contactFormHook: any;
}

const ContactForm: FC<IProps> = ({ contactFormHook }) => {
  const apiKey = process.env.API_KEY;

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<ContactFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValue) => {
    try {
      await contactFormHook.mutateAsync(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onHCaptchaChange = (token: string) => {
    setValue("email", token);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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

      <StyledButton type="submit" disabled={!isValid}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default ContactForm;

const StyledCaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledButton = styled.button<{ disabled: boolean }>`
  outline: none;
  background-color: #316e83;
  color: white;
  &:disabled {
    opacity: 0.5;
    color: white;
  }
  &:hover {
    background-color: ${({ disabled }) => !disabled && "#646cff"};
  }

  &:active {
    transform: ${({ disabled }) => !disabled && "scale(0.95)"};
    box-shadow: ${({ disabled }) =>
      !disabled && "inset 0px 0px 5px rgba(0, 0, 0, 0.3)"};
  }
`;
