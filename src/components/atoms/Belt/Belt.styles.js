import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.headerColor};
  padding: 10px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  cursor: move;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  .actions {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    button {
      background: none;
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
      outline: none;
      border: none;
      font-size: 1em;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

export const StyledHeading = styled.h1`
  ::before {
    content: "${({ beltText }) => beltText}";
  }
`;
