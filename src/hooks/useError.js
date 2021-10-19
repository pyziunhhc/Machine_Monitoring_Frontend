import React, { useCallback, useContext, useState } from "react";

const ErrorContext = React.createContext({
  message: "",
});

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const dispatchError = useCallback((message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 4000);
  }, []);
  return (
    <ErrorContext.Provider value={{ error, dispatchError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const error = useContext(ErrorContext);
  if (!error) {
    throw Error("Something went wrong with useError hook");
  }
  return error;
};

export default ErrorProvider;
