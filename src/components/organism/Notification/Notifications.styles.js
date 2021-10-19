import styled from "styled-components";

export const NotificationWrapper = styled.div`
  min-width: 300px;
  min-height: 150px;
  padding: 10px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  animation: show 0.2s ease-in-out;
  border-radius: 12px;
  &.--error {
    background-color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  &.--success {
    background-color: ${({ theme }) => theme.colors.success};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
