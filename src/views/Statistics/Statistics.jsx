import React, { useState, useEffect } from "react";
import Table from "../../components/molecules/Table/Table";
import FloatingContainer from "../../components/organism/Containers/FloatingContainer";
import Notification from "../../components/organism/Notification/Notifications";
import { StatisticsWrapper } from "./Statistics.styles";
import Title from "components/atoms/Title/Title";
import Actions from "components/organism/Actions/Actions";
import { useFetch } from "hooks/useFetch";
import { useError } from "hooks/useError";
export default function Statistics() {
  const [usersList, setUsers] = useState(null),
    [userStatistics, setUserStatistics] = useState(null),
    [beltText, setBeltText] = useState(null),
    [from, setFromDate] = useState(""),
    [to, setToDate] = useState(""),
    [showNotification, setShowNotification] = useState(false),
    [notificationMessage, setNotificationMessage] = useState(null);
  const { doFetch } = useFetch();
  const { dispatchError } = useError();
  const setUsersList = async () => {
    const url = "/users",
      method = "GET",
      result = await doFetch(url, method);
    if (result.success) {
      setUsers(result.users);
    }
  };
  const setStatisticsDate = (e) => {
    const type = e.target.name,
      value = e.target.value;
    if (type === "from") {
      setFromDate(value);
    } else {
      setToDate(value);
    }
  };
  const getStatistics = async (login) => {
    const url =
        from && to
          ? `/stats/get/user=${login}/start=${from}&end=${to}`
          : `/stats/get/user=${login}`,
      method = "GET",
      result = await doFetch(url, method);
    console.log(result);
    if (result.success) {
      setUserStatistics(result.data);
    } else {
      dispatchError(result.message);
    }
  };
  useEffect(() => {
    setUsersList();
    return () => {};
  }, []);
  return (
    <div className="statistics__container">
      <Actions className="configuration__container">
        <label htmlFor="from">
          Od:
          <input type="date" name="from" onChange={setStatisticsDate} />
        </label>
        <label htmlFor="to">
          Do:
          <input type="date" name="to" onChange={setStatisticsDate} />
        </label>
      </Actions>

      {usersList ? (
        <Table
          type="users-statistics"
          headers={["Imię", "Nazwisko"]}
          data={usersList}
          actions={{ getStatistics, setBeltText }}
        />
      ) : null}
      {userStatistics ? (
        <FloatingContainer
          className="user-statistics__container"
          beltText={`Statystyki pracownika ${beltText}`}
          removeWindow={setUserStatistics}>
          <StatisticsWrapper className="wrapper">
            {userStatistics.map(({ createdAt, updatedAt, machine, data }) => {
              return (
                <div className="user-statistic__container">
                  <Title>
                    {machine}
                    <br />
                    {`${new Date(createdAt).toLocaleDateString()} ${new Date(
                      createdAt
                    ).toLocaleTimeString()}`}
                    <br />
                    {`${new Date(updatedAt).toLocaleDateString()} ${new Date(
                      updatedAt
                    ).toLocaleDateString()}`}
                    <br />
                  </Title>

                  <Table
                    type="machine-statistics"
                    headers={["Status", "Czas", "%"]}
                    data={data}
                    machineName={machine}
                  />
                </div>
              );
            })}
          </StatisticsWrapper>
        </FloatingContainer>
      ) : null}
    </div>
  );
}
