import React from "react";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "hooks/useAuth";
import { HeaderWrapper } from "./Header.styles";
function Header({ title, handleSignOut }) {
  const { user } = useAuth();
  return (
    <HeaderWrapper className="header__container">
      <div className="minimized-panels__container"></div>
      <div className="logo__container">
        <img src={logo} alt="logo" />
        <h1>{`ITA Tools | ${title}`}</h1>
      </div>
      {/* <div className="notification__container">
        <FontAwesomeIcon icon={faBell} size="lg" />
        <p className="counter">0</p>
      </div> */}
      <div className="logged-user__container">
        <p>{`Zalogowany: ${user}`}</p>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          size="3x"
          className="sign-out__button"
          onClick={handleSignOut}
        />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
