import MachineDetailsWindow from "components/molecules/Machines/MachineDetailsWindow/MachineDetailsWindow";
import React, { createContext, useState, useContext } from "react";
import { useFetch } from "./useFetch";
const MachinesContext = createContext({
  machines: [],
  showMachineDetailsWindow: false,
  displayedMachineName: "",
  showAlertWindow: false,
  getMachines: () => {},
  getMachinesByUser: () => {},
  setShowAlertWindow: () => {},
  setDisplayedMachineName: () => {},
  handleShowDetailsWindow: () => {},
  checkMachineIsLocked: () => {},
  checkStatsIsExist: () => {},
  lockStatistics: () => {},
  unlockStatistics: () => {},
  lockMachine: () => {},
  unlockMachine: () => {},
  getLockedMachines: () => {},
  saveStats: () => {},
  updateStats: () => {},
  getFeed: () => {},
});
const MachinesProvider = ({ children }) => {
  const [showMachineDetailsWindow, setShowMachineDetailsWindow] =
    useState(false);
  const [showAlertWindow, setShowAlertWindow] = useState(false);
  const [displayedMachineName, setDisplayedMachineName] = useState("");
  const [machines, setMachines] = useState([]);
  const { doFetch } = useFetch();
  const getMachines = async () => {
    try {
      const url = `/machines`,
        method = "GET",
        result = await doFetch(url, method);
      if (result.success) {
        return result.machines;
      }
    } catch (error) {
      console.log(`Machine List-Get Machines error ${error}`);
    }
  };
  const getMachinesByUser = async () => {
    try {
      const url = `/machines/user`,
        method = "GET",
        result = await doFetch(url, method);
      if (result.success) {
        return result.machines;
      }
    } catch (error) {
      console.log(`Machine List-Get Machines error ${error}`);
    }
  };
  const checkMachineIsLocked = async (name) => {
    try {
      const url = `/machines/check/${name}`,
        method = "GET",
        result = await doFetch(url, method);
      if (result.success) {
        return result;
      }
    } catch (error) {
      console.log(`Machine List-check machine is locked error ${error}`);
    }
  };
  const checkStatsIsExist = async (machineName) => {
    try {
      const url = `/stats/check`,
        method = "POST",
        body = { machine: machineName },
        result = await doFetch(url, method, body);
      if (result.success) {
        if (result.exist) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log(`MachineList Check statis is exist error ${error}`);
    }
  };
  const lockStatistics = async (machineName) => {
    try {
      const url = `/stats/lock`,
        method = "PUT",
        body = { machine: machineName },
        result = await doFetch(url, method, body);
      if (result.success) {
        console.log(result);
      }
    } catch (error) {
      console.log(`Machine List lockStatistics error ${error}`);
    }
  };
  const unlockStatistics = async (machineName) => {
    try {
      const url = `/stats/unlock`,
        method = "PUT",
        body = { machine: machineName },
        result = await doFetch(url, method, body);
      if (result.success) {
        console.log(result);
      }
    } catch (error) {
      console.log(`Machine List unlockStatictis error ${error}`);
    }
  };
  const lockMachine = async (machineName) => {
    try {
      const url = `/machines/lock`,
        method = "POST",
        body = { machineName },
        result = await doFetch(url, method, body);
      if (result.success) {
        console.log(result);
      }
    } catch (error) {
      console.log(`Machine List lock machine error ${error}`);
    }
  };
  const unlockMachine = async (machineName, login = null) => {
    try {
      const url = `/machines/unlock`,
        method = "POST",
        body = { machineName, login },
        result = await doFetch(url, method, body);
      if (result.success) {
        return result;
      }
    } catch (error) {
      console.log(`Machine List unlock machine error ${error}`);
    }
  };
  const getLockedMachines = async () => {
    try {
      const url = `/machines/locked`,
        method = "GET",
        result = await doFetch(url, method);
      if (result.success) {
        return result.machines;
      }
    } catch (error) {
      console.log(`Get used machines error ${error}`);
    }
  };
  const saveStats = async (machineName) => {
    try {
      const url = `/stats/save`,
        method = "POST",
        body = { machine: machineName };
      doFetch(url, method, body);
    } catch (error) {
      console.log(`Machine List save stats error ${error}`);
    }
  };
  const updateStats = async (machineName) => {
    try {
      const url = `/stats/update`,
        method = "PUT",
        body = { machine: machineName };
      doFetch(url, method, body);
    } catch (error) {
      console.log(`Machine List update stats error ${error}`);
    }
  };
  const handleShowDetailsWindow = (value, machineName, operation) => {
    setShowMachineDetailsWindow(value);
    if (operation == "add") {
      setMachines((prevState) => [...prevState, machineName]);
    } else {
      const filteredMachines = machines.filter(
        (machine) => machine !== machineName
      );
      setMachines(filteredMachines);
    }
  };
  const getFeed = async (machineName, from, to) => {
    const url = `/machines/feed/${machineName}/${from}/${to}`,
      method = "GET",
      result = await doFetch(url, method);
    if (result) {
      return result.feed;
    }
  };
  return (
    <MachinesContext.Provider
      value={{
        machines,
        getMachines,
        displayedMachineName,
        getMachinesByUser,
        setDisplayedMachineName,
        showMachineDetailsWindow,
        handleShowDetailsWindow,
        showAlertWindow,
        setShowAlertWindow,
        checkMachineIsLocked,
        checkStatsIsExist,
        lockStatistics,
        unlockStatistics,
        lockMachine,
        unlockMachine,
        getLockedMachines,
        saveStats,
        updateStats,
        getFeed,
      }}>
      {children}
    </MachinesContext.Provider>
  );
};

export const useMachines = () => {
  const machines = useContext(MachinesContext);
  if (!machines) {
    throw Error("UseMachines Error");
  }
  return machines;
};
export default MachinesProvider;
