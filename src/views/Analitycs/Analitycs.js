import React from "react";
import Title from "components/atoms/Title/Title";
import MachineList from "components/organism/MachineList/MachineList";
import { useMachines } from "hooks/useMachines";
import MachineDetailsWindow from "components/molecules/Machines/MachineDetailsWindow/MachineDetailsWindow";
import styled from "styled-components";
const AnalitycsWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
const Analitycs = () => {
  const { machines } = useMachines();
  return (
    <AnalitycsWrapper>
      <Title color="white">Analityka</Title>
      <MachineList screenType="analitycs" showStatus={true} />
      {machines
        ? machines.map((machineName) => (
            <MachineDetailsWindow
              key={machineName}
              beltText={`Statystyki maszyny ${machineName}`}
              machineName={machineName}
              screenType="analitycs"
            />
          ))
        : null}
    </AnalitycsWrapper>
  );
};

Analitycs.propTypes = {};

export default Analitycs;
