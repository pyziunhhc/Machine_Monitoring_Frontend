import styled from "styled-components";
export const AlertWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  top: 0;
  left: 0;
  z-index: 999999999;
  .alert__container {
    button {
      padding: 10px;
      width: 200px;
      margin: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
