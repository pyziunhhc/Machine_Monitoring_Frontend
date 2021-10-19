import Title from "components/atoms/Title/Title";
import { useMachines } from "hooks/useMachines";
import React, { useState, useEffect } from "react";
import MachineCard from "../MachineCard/MachineCard";
export default function MachinesOccupancy() {
  const [machines, setMachines] = useState([]);
  const { getLockedMachines, unlockMachine } = useMachines();
  useEffect(() => {
    (async () => {
      setMachines(await getLockedMachines());
    })();
    return () => {};
  }, []);
  return (
    <div className="container dashboard-element__container">
      <Title color="white">Obłożenie maszyn</Title>

      {machines
        ? machines.map(({ machineName, login }) => {
            return (
              <MachineCard
                machineName={machineName}
                user={login}
                showStatus={false}
                screenType="occupancy"
                onClick={async () => {
                  const result = await unlockMachine(machineName, login);
                  if (result) {
                    if (result.success) {
                      setMachines(await getLockedMachines());
                    }
                  }
                }}
              />
            );
          })
        : null}
    </div>
  );
}
