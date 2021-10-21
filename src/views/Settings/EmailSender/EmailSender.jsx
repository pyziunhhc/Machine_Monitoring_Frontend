import React, { useState } from "react";
import { EmailSenderWrapper } from "./EmailSender.styles";
import MachineList from "components/organism/MachineList/MachineList";
import MachineWindowUsersList from "../Machines/MachineWindowUsersList";
import { ActionsWrapper } from "components/organism/Actions/Actions.styles";
import Button from "components/atoms/Button/Button";
import Table from "components/molecules/Table/Table";
import { useSenders } from "hooks/useSenders";
import { useMachines } from "hooks/useMachines";
import SenderConfiguration from "components/organism/EmailSenderConfiguration/EmailSenderConfiguration";

const EmailSender = () => {
  const { showMachineDetailsWindow, displayedMachineName } = useMachines();
  const [showUsersList, setShowUsersList] = useState(false);
  const [showSenderConfiguration, setShowSenderConfiguration] = useState(true);
  const [showMachines, setShowMachines] = useState(false);
  return (
    <EmailSenderWrapper>
      <ActionsWrapper>
        <Button
          className="--normal"
          onClick={() => {
            setShowUsersList(true);
            setShowSenderConfiguration(false);
            setShowMachines(false);
          }}>
          Użytkownicy
        </Button>
        <Button
          className="--normal"
          onClick={() => {
            setShowUsersList(false);
            setShowSenderConfiguration(true);
            setShowMachines(false);
          }}>
          Konfiguracja
        </Button>
        <Button
          className="--normal"
          onClick={() => {
            setShowUsersList(false);
            setShowSenderConfiguration(false);
            setShowMachines(true);
          }}>
          Dostęp do maszyn
        </Button>
      </ActionsWrapper>
      {showMachines ? (
        <>
          <MachineList screenType="sender" showStatus={false} color="black" />
          {showMachineDetailsWindow && displayedMachineName ? ( //TODO: zmienić showMachineDetailsWindow na showDetailsWindow
            <MachineWindowUsersList
              screenType="sender"
              machineName={displayedMachineName}
              color="black"
            />
          ) : null}
        </>
      ) : null}
      {showSenderConfiguration ? <SenderConfiguration color="black" /> : null}
      {showUsersList ? <UsersAccessedToSender color="black" /> : null}
    </EmailSenderWrapper>
  );
};

const UsersAccessedToSender = () => {
  const { users } = useSenders();
  const { showMachineDetailsWindow, displayedMachineName } = useMachines();
  const { sendPerformanceReport } = useSenders();
  return (
    <>
      <Table
        data={users}
        type="machine-sender-access"
        headers={["Login", "Dzienny", "Miesięczny", "Akcje"]}
        actions={{ sendPerformanceReport }}
      />
      {showMachineDetailsWindow && displayedMachineName ? ( //TODO: zmienić showMachineDetailsWindow na showDetailsWindow
        <MachineWindowUsersList
          screenType="sender"
          machineName={displayedMachineName}
        />
      ) : null}
    </>
  );
};

EmailSender.propTypes = {};

export default EmailSender;
