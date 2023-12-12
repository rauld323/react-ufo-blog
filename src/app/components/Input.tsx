import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
  field?: any;
  placeHolder?: string;
  label?: string;
  error: boolean;
  errorMessage?: string;
  type?: string;
}

const Input: FC<IProps> = ({
  placeHolder = "Raul",
  label = "Name",
  error,
  errorMessage = "Something went wrong!",
  type = "text",
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel error={error}>{label}</StyledLabel>
      <StyledInput placeholder={placeHolder} type={type} />
      {error && (
        <StyledErrorMessage error={error}>{errorMessage}</StyledErrorMessage>
      )}
    </StyledInputContainer>
  );
};

export default Input;

const inputAnimationShake = keyframes`
  20% {
    transform: translateX(3px);
  }
  60% {
    transform:  translateX(-5px);
  }
  20% {
    transform:  translateX(3px);
  }
`;

const StyledInputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  &:invalid {
    animation: ${inputAnimationShake} 0.4s;
  }
`;

const StyledLabel = styled.label<{ error: boolean }>`
  color: ${(props) => (props.error ? "red" : "black")};
  font-size: 13px;
`;

const StyledErrorMessage = styled.div<{ error: boolean }>`
  color: ${(props) => (props.error ? "red" : "black")};
  font-size: 14px;
`;
