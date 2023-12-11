import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  field: any;
  placeHolder?: string;
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: FC<IProps> = ({
  placeHolder = "Raul",
  label = "Name",
  error = false,
  errorMessage = "Something went wrong!",
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel error={error}>{label}</StyledLabel>
      <input placeholder={placeHolder} />
      {error && (
        <StyledErrorMessage error={error}>{errorMessage}</StyledErrorMessage>
      )}
    </StyledInputContainer>
  );
};

export default Input;

const StyledInputContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label<{ error: boolean }>`
  color: ${(props) => (props.error ? "red" : "black")};
`;

const StyledErrorMessage = styled.h5<{ error: boolean }>`
  color: ${(props) => (props.error ? "red" : "black")};
`;
