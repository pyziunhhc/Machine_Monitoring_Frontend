import React from "react";
import MachineList from "components/organism/MachineList/MachineList";
import MachineWindowUsersList from "../Machines/MachineWindowUsersList";
import { useMachines } from "hooks/useMachines";
import styled from "styled-components";
const MachineAccessWrapper = styled.div`
  color: ${({ theme, ...props }) => theme.colors[props.color]};
`;
const MachinesAccess = () => {
  const { showMachineDetailsWindow, displayedMachineName } = useMachines();
  return (
    <MachineAccessWrapper color="black">
      <MachineList
        screenType="machines"
        showStatus={false}
        titleColor="black"
      />
      {showMachineDetailsWindow && displayedMachineName ? (
        <MachineWindowUsersList
          beltText={displayedMachineName}
          machineName={displayedMachineName}
          screenType="machines"
        />
      ) : null}
    </MachineAccessWrapper>
  );
};

MachinesAccess.propTypes = {};

export default MachinesAccess;
