import React, { useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/organism/Header/Header";
import Navigation from "components/organism/Navigation/Navigation";
import Dashboard from "views/Dashboard/Dashboard";
import TasksList from "components/organism/TaskComponents/TasksList/TasksList";
import Statistics from "views/Statistics/Statistics";
import Settings from "views/Settings/Container/Settings";
import Analitycs from "views/Analitycs/Analitycs";
import Operator from "views/Operator/Operator";
import { useAuth } from "hooks/useAuth";
import MachinesProvider from "hooks/useMachines";
import { MainWrapper } from "./Main.styles";

export default function Main() {
  const { login, checkUserIsAuthorized, handleSignOut } = useAuth();

  useCallback(() => {
    checkUserIsAuthorized();
  }, [checkUserIsAuthorized]);

  return (
    <>
      <Header
        login={login}
        title="Monitoring Maszyn"
        handleSignOut={handleSignOut}
      />
      <MainWrapper className="main__container">
        <Router>
          <Navigation />
          <MachinesProvider>
            <div className="app__container">
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/analitycs">
                  <Analitycs />
                </Route>
                <Route exact path="/operator">
                  <Operator />
                </Route>
                <Route exact path="/tasks" component={TasksList}></Route>
                <Route path="/settings">
                  <Settings checkUserIsAuthorized={checkUserIsAuthorized} />
                </Route>
                <Route exact path="/statistics" component={Statistics}></Route>
              </Switch>
            </div>
          </MachinesProvider>
        </Router>
      </MainWrapper>
    </>
  );
}
