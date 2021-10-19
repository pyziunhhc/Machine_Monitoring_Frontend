import React, { useState, useEffect } from "react";
import Button from "components/atoms/Button/Button";
import FloatingContainer from "components/organism/Containers/FloatingContainer";
import { MachineWindowUsersListWrapper } from "./MachineWindowUsersList.styles";
import Title from "components/atoms/Title/Title";
import { ActionsWrapper } from "components/organism/Actions/Actions.styles";
import { useFetch } from "hooks/useFetch";
const MachineWindowUsersList = ({ machineName, screenType }) => {
  const [authorizedUsers, setAuthorizedUsers] = useState([]),
    [availableUsers, setAvailableUsers] = useState([]),
    [senderType, setSenderType] = useState(
      screenType === "sender" ? "daily" : ""
    );
  const { doFetch } = useFetch();
  const getUsers = async () => {
    const url = `/${screenType}/access/${machineName}/users/${senderType}`,
      method = "GET",
      { success, authorizedUsers, availableUsers } = await doFetch(url, method);
    if (success) {
      setAuthorizedUsers(authorizedUsers);
      setAvailableUsers(availableUsers);
    }
  };

  const addUser = async (login) => {
    const url = `/${screenType}/access/${machineName}/users/${senderType}`,
      method = "PUT",
      body = { login },
      { success } = await doFetch(url, method, body);
    if (success) {
      getUsers();
    }
  };
  const removeUser = async (login) => {
    const url = `/${screenType}/access/${machineName}/users/${login}/${senderType}`,
      method = "DELETE",
      { success } = await doFetch(url, method);
    if (success) {
      getUsers();
    }
  };
  useEffect(() => {
    getUsers();
  }, [senderType]);
  return (
    <FloatingContainer title="Dodaj użytkowników">
      {screenType === "sender" ? (
        <>
          <Title color="black">
            {senderType === "daily" ? "Dzienny" : "Miesięczny"}
          </Title>
          <ActionsWrapper>
            <Button className="--normal" onClick={() => setSenderType("daily")}>
              Dzienny
            </Button>
            <Button
              className="--normal"
              onClick={() => setSenderType("monthly")}>
              Miesięczny
            </Button>
          </ActionsWrapper>
        </>
      ) : null}
      <MachineWindowUsersListWrapper className="user-list__container">
        <Title color="black">Uprawnieni użytkownicy</Title>
        <ul>
          {authorizedUsers.length
            ? authorizedUsers.map((user) => {
                return (
                  <li>
                    {user}
                    <Button
                      className="--error"
                      onClick={() => removeUser(user)}>
                      -
                    </Button>
                  </li>
                );
              })
            : null}
        </ul>
      </MachineWindowUsersListWrapper>
      <MachineWindowUsersListWrapper className="user-list__container">
        <Title color="black">Nieuprawnieni użytkownicy</Title>
        <ul>
          {availableUsers.length
            ? availableUsers.map((user) => {
                return (
                  <li>
                    {user}{" "}
                    <Button
                      text="+"
                      className="--success"
                      onClick={() => addUser(user)}>
                      +
                    </Button>
                  </li>
                );
              })
            : "Brak"}
        </ul>
      </MachineWindowUsersListWrapper>
    </FloatingContainer>
  );
};

export default MachineWindowUsersList;
