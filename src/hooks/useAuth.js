import React, { createContext, useContext, useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { useError } from "./useError";
export const AuthContext = createContext({
  user: "",
  setUser: () => {},
  handleSignIn: () => {},
  handleSignOut: () => {},
  isLoading: false,
  setIsLoading: () => {},
  checkUserIsAuthorized: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { dispatchError } = useError();
  const { doFetch } = useFetch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoading(true);
      (async () => {
        try {
          const url = `/auth/check`,
            method = "GET",
            response = await doFetch(url, method, null);
          if (response) {
            const { success, user } = response;
            if (success) {
              setUser(user);
              setIsLoading(false);
            } else {
              setIsLoading(false);
            }
          } else {
            setIsLoading(false);
          }
        } catch (error) {}
      })();
    } else {
      setIsLoading(false);
    }
    return () => {};
  }, []);
  const handleSignIn = async ({ login, password }) => {
    try {
      const url = "/auth/login",
        method = "POST",
        body = { login, password },
        result = await doFetch(url, method, body);
      const { success, ...rest } = result;
      if (success) {
        setUser(rest.login);
        localStorage.setItem("login", rest.login);
        localStorage.setItem("token", rest.token);
        console.log(localStorage);
      } else {
        dispatchError(rest.message);
      }
    } catch (error) {
      dispatchError(error);
    }
  };
  const handleSignOut = async () => {
    try {
      const url = "/auth/logout",
        method = "POST",
        result = await doFetch(url, method);
      if (result.success) {
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const checkUserIsAuthorized = async () => {
    const { pathname } = document.location;
    const url = `/permissions/page`,
      method = "POST",
      body = { page: pathname },
      { success } = await doFetch(url, method, body);
    return success;
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleSignIn,
        handleSignOut,
        isLoading,
        setIsLoading,
        checkUserIsAuthorized,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw Error("Error use auth");
  }
  return auth;
};
AuthProvider.propTypes = {};

export default AuthProvider;
