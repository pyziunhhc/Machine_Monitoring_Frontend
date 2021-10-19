import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  animation: show 0.3s ease-in-out;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 450px;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.container};
  .title__container {
    .brand-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      h1 {
        color: ${({ theme: { colors } }) => colors.white};
        font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
        font-weight: 400;
      }
      img {
        max-width: 100px;
      }
    }
    h2 {
      color: ${({ theme: { colors } }) => colors.white};
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    }
  }
  .fields__container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
    .inputs__container {
      margin-bottom: 30px;
      span {
        color: red;
        font-weight: bold;
      }
      label {
        input {
          color: ${({ theme: { colors } }) => colors.white};
        }
      }
    }
  }
`;
