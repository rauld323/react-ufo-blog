import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  field: any;
  placeHolder?: string;
  inputName?: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: FC<IProps> = ({
  placeHolder = "Raul",
  inputName = "Name",
  error = false,
  errorMessage = "Something went wrong!",
}) => {
  return (
    <div>
      <StyledInputName error={error}>{inputName}</StyledInputName>
      <input placeholder={placeHolder} />
      {error && (
        <StyledErrorMessage error={error}>{errorMessage}</StyledErrorMessage>
      )}
    </div>
  );
};

export default Input;

const StyledInputName = styled.h5<{ error: boolean }>`
  color: ${(props) => (props.error ? "red" : "black")};
`;

const StyledErrorMessage = styled.h5<{ error: boolean }>`
  color: ${(props) => (props.error ? "red" : "black")};
`;
