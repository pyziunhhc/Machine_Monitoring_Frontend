import React from "react";
import MachineList from "components/organism/MachineList/MachineList";
import Title from "components/atoms/Title/Title";
import MachineDetailsWindow from "components/molecules/Machines/MachineDetailsWindow/MachineDetailsWindow";
import { useMachines } from "hooks/useMachines";
import Alert from "components/molecules/Machines/Alert/Alert";
import styled from "styled-components";
const OperatorWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
const Operator = () => {
  const { showMachineDetailsWindow, displayedMachineName, showAlertWindow } =
    useMachines();
  return (
    <OperatorWrapper>
      <Title color="white">Operator</Title>
      <MachineList screenType="operator" showStatus={true} />
      {showMachineDetailsWindow && displayedMachineName ? (
        <MachineDetailsWindow
          beltText={displayedMachineName}
          machineName={displayedMachineName}
          screenType="operator"
        />
      ) : null}
      {showAlertWindow ? <Alert machineName={displayedMachineName} /> : null}
    </OperatorWrapper>
  );
};

Operator.propTypes = {};

export default Operator;
