import styled, { keyframes } from "styled-components";

const shrinkAnimation = keyframes`
  from {
    transform: translateX(-50%) scaleX(1);
  }
  to {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(-50%) translateY(500%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;
export const ErrorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: transform(-50%, -50%);
  padding: 25px;
  border: 3px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  font-weight: bold;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  animation: ${slideAnimation} 1s ease-in-out 1 forwards,
    ${slideAnimation} 1s 3s ease-in-out 1 reverse forwards;
  z-index: 9999999;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20%;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.error};
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    border-radius: 50px;
  }
  &::before {
    opacity: 0.5;
  }
  &::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shrinkAnimation} 2s 1s linear 1 forwards;
  }
`;
