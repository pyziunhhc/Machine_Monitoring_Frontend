import styled from "styled-components";

export const NavigationElementWrapper = styled.li`
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 5px;
  &.hovered {
    &:before {
      transition: border-left 0.3s ease-in-out;
    }
    &:hover {
      a {
        transform: translateX(5%);
      }
      &:before {
        content: "";
        position: absolute;
        width: 2px;
        background-color: white;
        height: 30%;
        left: -10px;
        animation: drawLine 0.4s ease;
      }
    }
  }

  a {
    color: ${({ theme: { colors } }) => colors.white};
    display: flex;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;
    font-size: ${({ theme }) => theme.fontSize.m};
    span {
      margin-left: 5px;
      color: white;
      font-weight: 400;
      transition: opacity 0.3s ease-in-out;
    }
    &.active {
      color: red;
      span {
        opacity: 0.5;
        color: rgba(255, 255, 255, 0.5);
      }
      svg {
        opacity: 0.5;
        color: rgba(255, 255, 255, 0.5);
        animation: test 0.5s ease;
      }
    }
  }
  @keyframes drawLine {
    0% {
      height: 0%;
    }
    100% {
      height: 30%;
    }
  }
`;
