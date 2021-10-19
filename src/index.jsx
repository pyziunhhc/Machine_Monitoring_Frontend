import React from "react";
import AppProviders from "providers/AppProviders";
import ReactDOM from "react-dom";
import App from "views/Root/App";
ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
