import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  padding: 5px;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    li {
      margin: 0px 10px;
      a {
        color: ${({ theme: { colors } }) => colors.white};
        font-weight: bold;
        font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        transition: color 0.3s ease-in-out;
        &.active {
          color: ${({ theme: { colors } }) => colors.darkPurple};
        }
        &:hover {
          color: ${({ theme: { colors } }) => colors.darkPurple};
        }
      }
    }
  }
`;
