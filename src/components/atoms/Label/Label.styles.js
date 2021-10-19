import styled from "styled-components";

export const LabelWrapper = styled.label`
  width: 100%;
  display: flex;
  position: relative;
  border-bottom: 1px solid ${({ theme, ...props }) => theme.colors[props.color]};
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
