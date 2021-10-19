import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationWrapper } from "./Navigation.styles";
const Navigation = ({ setViewWindow }) => {
  return (
    <NavigationWrapper className="additional-menu__container">
      <ul>
        <li key="a">
          <NavLink
            key="1"
            exact
            to="/settings/users"
            onClick={() => {
              setViewWindow(true);
            }}
            activeClassName="active">
            Użytkownicy
          </NavLink>
        </li>
        <li key="b">
          <NavLink
            key="2"
            exact
            to="/settings/sender"
            onClick={() => {
              setViewWindow(true);
            }}
            activeClassName="active">
            Rozsyłacz
          </NavLink>
        </li>
        <li key="c">
          <NavLink
            key="3"
            to="/settings/machines"
            onClick={() => {
              setViewWindow(true);
            }}
            activeClassName="active">
            Maszyny
          </NavLink>
        </li>
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
