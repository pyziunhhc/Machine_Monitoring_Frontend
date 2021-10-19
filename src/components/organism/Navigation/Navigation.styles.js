import styled from "styled-components";

export const NavigationWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: rgba(42, 48, 53, 0.7);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

export const AsideWrapper = styled.aside`
  height: 100%;
  nav {
    height: 100%;
  }
`;
