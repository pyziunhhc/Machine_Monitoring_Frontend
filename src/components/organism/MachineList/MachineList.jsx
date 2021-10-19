import React, { useState, useEffect } from "react";
import MachineCard from "components/molecules/Machines/MachineCard/MachineCard";
import { Wrapper } from "./MachineList.styles";
import Title from "components/atoms/Title/Title";
import { useMachines } from "hooks/useMachines";
export default function MachineList({ screenType, showStatus, color }) {
  const [machines, setMachines] = useState([]);
  const { getMachines, getMachinesByUser } = useMachines();
  useEffect(() => {
    (async () => {
      switch (screenType) {
        case "analitycs":
          {
            const machines = await getMachines();
            setMachines(machines);
          }

          break;
        case "operator":
          {
            const machines = await getMachinesByUser();

            setMachines(machines);
          }

          break;
        case "sender":
          {
            const machines = await getMachines();
            setMachines(machines);
          }
          break;
        case "machines":
          {
            const machines = await getMachines();
            setMachines(machines);
          }
          break;
        default:
          break;
      }
    })();

    return () => {
      setMachines([]);
    };
  }, []);
  return (
    <Wrapper className="machines__container">
      <div className="machine-type__container">
        <Title color={color}>
          Produkcja <br /> Erodowanie
        </Title>

        {machines.map(({ type, name }, index) => {
          if (type === "Produkcja-Erodowanie") {
            return (
              <MachineCard
                machineName={name}
                screenType={screenType}
                key={name}
                showStatus={showStatus}
              />
            );
          }
          return true;
        })}
      </div>
      <div className="machine-type__container">
        <Title color={color}>
          Ostrzenie <br /> VHM
        </Title>
        {machines.map(({ type, name }) => {
          if (type === "Ostrzenie-VHM") {
            return (
              <MachineCard
                machineName={name}
                key={name}
                screenType={screenType}
                showStatus={showStatus}
              />
            );
          }
          return true;
        })}
      </div>
      <div className="machine-type__container">
        <Title color={color}>
          Ostrzenie <br /> Erodowanie
        </Title>
        {machines.map(({ type, name }) => {
          if (type === "Ostrzenie-Erodowanie") {
            return (
              <MachineCard
                machineName={name}
                key={name}
                screenType={screenType}
                showStatus={showStatus}
              />
            );
          }
          return true;
        })}
      </div>
      <div className="machine-type__container">
        <Title color={color}>
          Ostrzenie <br /> Wiertła HM
        </Title>
        {machines.map(({ type, name }) => {
          if (type === "Ostrzenie-Wiertła VHM") {
            return (
              <MachineCard
                machineName={name}
                key={name}
                screenType={screenType}
                showStatus={showStatus}
              />
            );
          }
          return true;
        })}
      </div>
      <div className="machine-type__container">
        <Title color={color}>
          Produkcja <br /> VHM
        </Title>
        {machines.map(({ type, name }) => {
          if (type === "Produkcja-VHM") {
            return (
              <MachineCard
                machineName={name}
                key={name}
                screenType={screenType}
                showStatus={showStatus}
              />
            );
          }
          return true;
        })}
      </div>
      <div className="machine-type__container">
        <Title color={color}>
          Produkcja <br /> Korpusy
        </Title>
        {machines.map(({ type, name }) => {
          if (type === "Produkcja-Korpusy") {
            return (
              <MachineCard
                machineName={name}
                key={name}
                screenType={screenType}
                showStatus={showStatus}
              />
            );
          }
          return true;
        })}
      </div>
    </Wrapper>
  );
}
