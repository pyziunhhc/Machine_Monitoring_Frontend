import React from "react";
import { StyledButton } from "./Button.styles";

export default function Button({ children, className, ...props }) {
  return (
    <StyledButton className={`button ${className}`} {...props}>
      {children}
    </StyledButton>
  );
}
