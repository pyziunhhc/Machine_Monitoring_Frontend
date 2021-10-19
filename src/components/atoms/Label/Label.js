import React from "react";
import PropTypes from "prop-types";
import { LabelWrapper } from "./Label.styles";
const Label = ({ name, text, children }) => {
  return (
    <LabelWrapper htmlFor={name}>
      {text}
      {children}
    </LabelWrapper>
  );
};

Label.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
};

export default Label;
