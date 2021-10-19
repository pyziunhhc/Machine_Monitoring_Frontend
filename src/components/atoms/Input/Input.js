import styled from "styled-components";
export const Input = styled.input`
  width: 100%;
  font-weight: 100;
  padding: 0;
  margin: 0;
  padding-left: 5px;
  transition: border 1s ease-in-out;
  background: none;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  transition: background-color 0.15s ease-in-out;

  &:hover {
    outline: none;
  }
  &:focus {
    background-color: ${({ theme: { colors } }) => colors.lightPurpleAlpha};
  }
`;
