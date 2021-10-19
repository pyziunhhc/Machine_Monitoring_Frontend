import React from "react";
import Status from "components/atoms/Status/Status";
import { MachineCardWrapper } from "./MachineCard.styles";
import Button from "components/atoms/Button/Button";
import { useMachines } from "hooks/useMachines";
import FeedValue from "components/atoms/FeedValue/FeedValue";

export default function MachineCard({
  machineName,
  feed,
  user,
  screenType,
  showStatus,
  ...props
}) {
  const {
    handleShowDetailsWindow,
    setDisplayedMachineName,
    checkMachineIsLocked,
    saveStats,
    setShowAlertWindow,
  } = useMachines();

  const shortName = machineName.split("_")[0].slice(0, 3);

  return (
    <MachineCardWrapper
      className="machine-card"
      onClick={async () => {
        switch (screenType) {
          case "operator":
            const isLocked = await checkMachineIsLocked(machineName);
            if (isLocked) {
              if (isLocked.success && isLocked.locked) {
                handleShowDetailsWindow(true);
                saveStats(machineName);
                setDisplayedMachineName(machineName);
              } else if (!isLocked.success && isLocked.locked) {
                handleShowDetailsWindow(false);
              } else if (isLocked.success && !isLocked.locked) {
                setDisplayedMachineName(machineName);
                setShowAlertWindow(true);
              }
            }
            break;
          case "analitycs":
            handleShowDetailsWindow(true, machineName, "add");
            setDisplayedMachineName(machineName);
            break;
          case "statistics":
            setDisplayedMachineName(machineName);
            handleShowDetailsWindow(true);
            break;
          case "occupancy":
            break;
          case "sender":
            setDisplayedMachineName(machineName);
            handleShowDetailsWindow(true);
            break;
          case "machines":
            setDisplayedMachineName(machineName);
            handleShowDetailsWindow(true);
            break;
          default:
            break;
        }
      }}>
      <h3 className="machine-name">{machineName}</h3>
      {showStatus ? (
        <Status
          machineName={machineName}
          shortName={shortName}
          showStatus={showStatus}
        />
      ) : null}
      <FeedValue feed={feed} />

      {screenType === "occupancy" ? (
        <>
          <p className="user">
            Maszyna zajęta przez użytkownika <span>{user}</span>
          </p>

          <Button {...props} className="--normal">
            Odblokuj
          </Button>
        </>
      ) : null}
    </MachineCardWrapper>
  );
}
