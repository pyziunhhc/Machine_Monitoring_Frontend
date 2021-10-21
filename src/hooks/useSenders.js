import React, { useState, useEffect, useContext } from "react";
import { useFetch } from "./useFetch";
const SendersContext = React.createContext({
  users: [],
  dailyTime: "",
  monthlyTime: "",
  setSenderTime: () => {},
  saveSenderTime: () => {},
  sendPerformanceReport: () => {},
  handleSetEmailConfiguration: () => {},
});
const SendersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [dailyTime, setDailyTime] = useState(null);
  const [monthlyTime, setMonthlyTime] = useState(null);
  const { doFetch } = useFetch();
  const getSenderTime = async () => {
    const url = `/sender/configuration/time`,
      method = "GET",
      { success, daily, monthly } = await doFetch(url, method);
    if (success) {
      return { daily, monthly };
    }
  };
  const setSenderTime = (e) => {
    const { name, value } = e.target;
    if (name === "daily") {
      setDailyTime(value);
    } else if (name === "monthly") {
      setMonthlyTime(value);
    }
  };
  const saveSenderTime = async () => {
    const url = `/sender/configuration/time`,
      method = "POST",
      body = { dailyTime, monthlyTime },
      result = await doFetch(url, method, body);
    console.log(result);
  };
  const getAccessedUsers = async () => {
    const url = `/sender/access/users`,
      method = "GET",
      { success, users } = await doFetch(url, method);
    if (success) {
      return users;
    }
  };
  const sendPerformanceReport = async (login, type) => {
    const url = `/sender/send/performance/${type}`,
      method = "POST",
      body = { login },
      result = await doFetch(url, method, body);
    console.log(result);
  };
  const handleSetEmailConfiguration = async (data) => {
    const url = `/sender/configuration/email`,
      method = "POST",
      body = data;
    console.log(body);
    await doFetch(url, method, body);
  };
  useEffect(() => {
    (async () => {
      const { daily, monthly } = await getSenderTime();
      if (daily && monthly) {
        setDailyTime(daily.time);
        setMonthlyTime(monthly.time);
      }
    })();
    return () => {};
  }, []);

  useEffect(() => {
    (async () => {
      const users = await getAccessedUsers();
      if (users) {
        setUsers(users);
      }
    })();

    return () => {
      setUsers([]);
    };
  }, []);
  return (
    <SendersContext.Provider
      value={{
        users,
        dailyTime,
        monthlyTime,
        setSenderTime,
        saveSenderTime,
        sendPerformanceReport,
        handleSetEmailConfiguration,
      }}>
      {children}
    </SendersContext.Provider>
  );
};

export const useSenders = () => {
  const senders = useContext(SendersContext);
  if (!senders) {
    throw Error("Error use senders");
  }
  return senders;
};
useSenders.propTypes = {};
export default SendersProvider;
