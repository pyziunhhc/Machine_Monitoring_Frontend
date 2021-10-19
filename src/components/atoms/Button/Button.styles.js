import styled from "styled-components";

export const StyledButton = styled.button`
  // width: 120px;
  border: none;
  outline: none;
  background: none;
  font-weight: 400;
  padding: 0.35rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  border: 1px solid ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.white};
  transition: box-shadow 0.1s ease-in-out;
  margin: 0px 10px;
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
  &:hover,
  :focus {
    background-color: ${({ theme: { colors } }) => colors.white};
    color: #00b0ff;
  }
  &.--error {
    background-color: ${({ theme: { colors } }) => colors.error};
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.darkError};
    }
  }
  &.--success {
    background-color: ${({ theme: { colors } }) => colors.success};
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.darkSuccess};
    }
  }
  &.--normal {
    background-color: ${({ theme: { colors } }) => colors.lightBlue};
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.darkBlue};
    }
  }
`;
