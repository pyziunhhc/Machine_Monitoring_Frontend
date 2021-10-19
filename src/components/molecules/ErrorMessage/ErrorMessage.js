import React from "react";
import PropTypes from "prop-types";
import Title from "components/atoms/Title/Title";
import { ErrorWrapper } from "./ErrorMessage.styles";
const defaultMessage =
  "Coś poszło nie tak. Spróbuj jeszcze raz lub skontaktuj się z administratorem.";
const ErrorMessage = ({ message = defaultMessage }) => {
  return (
    <ErrorWrapper>
      <Title color="red">Ups!</Title>
      <p>{message}</p>
    </ErrorWrapper>
  );
};

ErrorMessage.propTypes = { message: PropTypes.string.isRequired };

export default ErrorMessage;
