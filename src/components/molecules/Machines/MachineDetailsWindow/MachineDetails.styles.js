import styled from "styled-components";

export const MachineWrapper = styled.div`
  display: flex;
  padding: 10px;
  color: ${({ theme }) => theme.colors.black};
  .left-panel__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MiddlePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ChartJSWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
