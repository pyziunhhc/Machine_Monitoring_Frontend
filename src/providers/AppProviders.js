import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/globalStyle";
import AuthProvider from "hooks/useAuth";
import ErrorProvider from "hooks/useError";
import FetchProvider from "hooks/useFetch";
const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FetchProvider>
        <ErrorProvider>
          <AuthProvider>{children}</AuthProvider>
        </ErrorProvider>
      </FetchProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
