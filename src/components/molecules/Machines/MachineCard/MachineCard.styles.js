import styled from "styled-components";

export const MachineCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 12px;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.container};
  h3 {
    font-weight: 400;
    background-color: grey;
    background-size: 600% 600%;
    padding: 10px;
    border-radius: 12px;
  }
  .feed {
    padding: 10px;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
    border-radius: 12px;
    color: ${({ theme }) => theme.colors.white};
    &.feed-good {
      background-color: ${({ theme: { colors } }) => colors.success};
    }
    &.feed-bad {
      background-color: ${({ theme: { colors } }) => colors.error};
    }
  }
  .user {
    text-align: center;
    width: 100%;
    margin-top: 10px;
    font-weight: 400;
    x span {
      font-weight: 800;
    }
  }
`;
