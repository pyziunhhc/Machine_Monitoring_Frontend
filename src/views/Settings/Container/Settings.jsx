import React, { useState, useCallback } from "react";
import Users from "components/organism/UsersList/UsersList";
import EmailSender from "../EmailSender/EmailSender";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccessDenied from "components/organism/Containers/AccessDenied";
import Navigation from "./Navigation";
import Title from "components/atoms/Title/Title";
import { SettingsWrapper } from "./Settings.styles";
import MachinesAccess from "../MachinesAccess/MachinesAccess";
import SendersProvider from "hooks/useSenders";
import FloatingContainer from "components/organism/Containers/FloatingContainer";
export default function Settings({ checkUserIsAuthorized }) {
  const [isEntitled, setIsEntitled] = useState(true);
  const [viewWindow, setViewWindow] = useState(false);
  useCallback(async () => {
    const userIsEntitled = await checkUserIsAuthorized();
    setIsEntitled(userIsEntitled);
  }, [checkUserIsAuthorized]);
  if (isEntitled) {
    return (
      <SettingsWrapper className="settings__container" color="black">
        <Title>Ustawienia aplikacji</Title>
        <Router>
          <Navigation setViewWindow={setViewWindow} />
          <Switch>
            <Route path="/settings/users">
              {viewWindow ? (
                <FloatingContainer removeWindow={setViewWindow}>
                  <Users color="black" />
                </FloatingContainer>
              ) : null}
            </Route>
            <Route path="/settings/sender">
              <SendersProvider>
                {viewWindow ? (
                  <FloatingContainer removeWindow={setViewWindow}>
                    <EmailSender />
                  </FloatingContainer>
                ) : null}
              </SendersProvider>
            </Route>
            <Route path="/settings/machines">
              {viewWindow ? (
                <FloatingContainer removeWindow={setViewWindow}>
                  <MachinesAccess color="black" />
                </FloatingContainer>
              ) : null}
            </Route>
          </Switch>
        </Router>
      </SettingsWrapper>
    );
  } else {
    return <AccessDenied />;
  }
}
