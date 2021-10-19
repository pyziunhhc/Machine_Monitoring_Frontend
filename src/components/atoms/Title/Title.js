import React from "react";
import { TitleWrapper, StyledHeading } from "./Title.styles";

const Title = ({ children, color }) => {
  return (
    <TitleWrapper>
      <StyledHeading color={color}>{children}</StyledHeading>
    </TitleWrapper>
  );
};

export default Title;
