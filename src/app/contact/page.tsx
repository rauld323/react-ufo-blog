"use client";
import styled from "styled-components";
import { useContactForm } from "../hooks/blog-hook";
import ContactForm from "./contactForm/ContactForm";

const Contact = () => {
  const contactFormMutation = useContactForm();

  const { isSuccess, isError, isLoading } = contactFormMutation;

  return (
    <StyledContainer>
      {isSuccess ? <h1>Than You!</h1> : <h1>Contact Us!</h1>}
      {isSuccess ? (
        "All Done"
      ) : (
        <ContactForm contactFormHook={contactFormMutation} />
      )}
      {isLoading && <h1>Loading....</h1>}
      {isError && <h1>Something went wrong</h1>}
    </StyledContainer>
  );
};

export default Contact;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
