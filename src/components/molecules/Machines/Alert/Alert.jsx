import React, { useState, useEffect } from "react";
import { AlertWrapper } from "./Alert.styles";
import Button from "components/atoms/Button/Button";
import { useMachines } from "hooks/useMachines";
export default function Alert({ machineName }) {
  const [message, setMessage] = useState("");
  const { setShowAlertWindow, handleShowDetailsWindow, checkStatsIsExist } =
    useMachines();

  useEffect(() => {
    (async () => {
      const result = await checkStatsIsExist(machineName);
      if (result) {
        setMessage(
          <h1>
            <span className="--error">UWAGA!!</span>
            <br />
            Na maszynie {machineName} dla Ciebie istnieją już statystyki. Czy
            chcesz kontynuować?
          </h1>
        );
      } else {
        setMessage(
          <h1>
            Czy na pewno chcesz rozpocząć pracę na maszynie {machineName}?
          </h1>
        );
      }
    })();

    return () => {
      setMessage("");
    };
  }, [checkStatsIsExist, machineName]);
  return (
    <AlertWrapper className="alert__wrapper">
      <div className="alert__container">
        {message}
        <Button
          className="--success"
          onClick={() => {
            setShowAlertWindow(false);
            handleShowDetailsWindow(true);
          }}>
          Tak
        </Button>
        <Button
          className="--error"
          onClick={() => {
            setShowAlertWindow(false);
          }}>
          Nie
        </Button>
      </div>
    </AlertWrapper>
  );
}
