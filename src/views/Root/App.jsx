import React from "react";
import LoginScreen from "views/LoginScreen/LoginScreen";
import Main from "views/Main/Main";
import { useAuth } from "hooks/useAuth";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import ErrorMessage from "components/molecules/ErrorMessage/ErrorMessage";
import { useError } from "hooks/useError";
const Loading = ({ isLoading }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        zIndex: 9999999999999999,
        color: "white",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3em",
        background: "linear-gradient(270deg, #117ec9, #04c1bc, #00b0ff)",
        backgroundSize: "600% 600%",
      }}></div>
  );
};
export default function App() {
  const auth = useAuth();
  const { error } = useError();
  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {auth.isLoading ? <Loading /> : auth.user ? <Main /> : <LoginScreen />}
    </>
  );
}
