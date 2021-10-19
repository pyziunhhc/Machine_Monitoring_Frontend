import Table from "components/molecules/Table/Table";
import Button from "components/atoms/Button/Button";
import Register from "../Register/Register";
import { UsersListWrapper } from "./UsersList.styles";
import React, { useState, useEffect } from "react";
import { ActionsWrapper } from "../Actions/Actions.styles";
import { useFetch } from "hooks/useFetch";
export default function Users() {
  const [users, setUsers] = useState(null);
  const [showRegisterWindow, setShowRegisterWindow] = useState(false);
  const { doFetch } = useFetch();

  const getUsers = async () => {
    const url = "/users",
      method = "GET",
      result = await doFetch(url, method);
    if (result.success) {
      return result.users;
    }
  };
  const editUser = async (login) => {};
  const removeUser = async (login) => {
    const url = "/users/delete",
      method = "DELETE",
      body = { login },
      result = await doFetch(url, method, body);
    if (result.success) {
      setUsers(await getUsers());
    }
  };

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();

    return () => {};
  }, []);
  return (
    <UsersListWrapper className="users__container" color="black">
      <ActionsWrapper className="actions__container">
        <Button
          className="--success"
          onClick={() => setShowRegisterWindow(true)}>
          Dodaj
        </Button>
      </ActionsWrapper>
      {users ? (
        <Table
          type="users-settings"
          headers={["Login", "Imię", "Nazwisko", "Email", "Rola", "Akcje"]}
          data={users}
          actions={{ editUser, removeUser }}
        />
      ) : null}
      {showRegisterWindow ? (
        <Register update={getUsers} removeWindow={setShowRegisterWindow} />
      ) : null}
    </UsersListWrapper>
  );
}
