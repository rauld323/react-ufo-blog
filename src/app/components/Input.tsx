import React, { FC } from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
  field?: any;
  placeHolder?: string;
  label: string;
  error?: string;
  type?: string;
  onChange: (...event: any[]) => void;
  isTextArea?: boolean;
}

const Input: FC<IProps> = ({
  placeHolder = "Raul",
  label = "Name",
  error,
  type = "text",
  onChange,
  isTextArea,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel hasError={!!error}>{label}</StyledLabel>
      {isTextArea ? (
        <textarea placeholder={placeHolder} onChange={onChange} />
      ) : (
        <StyledInput
          placeholder={placeHolder}
          type={type}
          onChange={onChange}
        />
      )}
      {error && (
        <StyledErrorMessage hasError={!!error}>{error}</StyledErrorMessage>
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

const StyledLabel = styled.label<{ hasError: boolean }>`
  color: ${({ hasError }) => (hasError ? "red" : "black")};
  font-size: 13px;
`;

const StyledErrorMessage = styled.div<{ hasError: boolean }>`
  color: ${(hasError) => (hasError ? "red" : "black")};
  font-size: 14px;
`;
