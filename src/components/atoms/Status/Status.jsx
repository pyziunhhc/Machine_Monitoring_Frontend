import { useFetch } from "hooks/useFetch";
import React, { useState, useEffect } from "react";
import { Wrapper } from "./Status.styles";
export default function Status({ machineName, shortName, showStatus }) {
  const [status, setStatus] = useState(null),
    [className, setClassName] = useState(null),
    [id, setID] = useState(null);
  const { getStatus, updateStatus } = useFetch();

  useEffect(() => {
    (async () => {
      const response = await getStatus(machineName);
      if (response) {
        const { success, status, className } = response;
        if (success) {
          setStatus(status);
          setClassName(className);
        }
      }
    })();
    const id = setInterval(async () => {
      const response = await updateStatus(machineName);

      if (response) {
        const { success, status, className } = response;
        if (success) {
          setStatus(status);
          setClassName(className);
        }
      }
    }, 1000);
    setID(id);
    return () => {
      clearInterval(id);
      setStatus(null);
    };
  }, [machineName, getStatus, updateStatus]);

  return (
    <Wrapper
      className="status__container"
      onClick={() => {
        clearInterval(id);
      }}>
      <img src={`../machines/${shortName}.png`} alt="machine" />
      {showStatus ? (
        <h1 className={className ? className.toLowerCase() : ""}>
          {status ? status : "Ładowanie..."}
        </h1>
      ) : (
        "Wczytuję..."
      )}
    </Wrapper>
  );
}
