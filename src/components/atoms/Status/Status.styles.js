import styled from "styled-components";

export const Wrapper = styled.div`
  transition: background-color 0.5s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
  }
  h1 {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    padding: 10px;
    margin: 10px 0px;
    border-radius: 12px;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  img {
    width: 50%;
  }
`;
