import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.headerColor};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  z-index: 1;
  animation: show 0.3s ease-in-out;
  .minimized-panel__container {
    overflow: hidden;
    display: flex;
    flex: 1;
    align-items: center;
  }
  .logo__container {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 5%;
      margin: 10px;
    }
  }
  .notification__container {
    display: flex;
    flex: 0.1;
    position: relative;
    align-items: center;
    justify-content: center;
    font-size: 1.4em;
    margin-right: 0%;
  }
  .logged-user__container {
    display: flex;
    flex: 0.2;
    align-items: center;
    justify-content: space-around;
    font-size: ${({ theme }) => theme.fontSize.l};
    .sign-out__button {
      border-radius: 10px;
      padding: 2px;
      background: none;
      cursor: pointer;
      &:hover {
        transition: background 0.3s ease-in-out;
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;
