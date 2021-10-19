import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationElementWrapper } from "./NavigationElement.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

const NavigationElement = ({ icon, to, children, exact }) => {
  const handleOnMouseEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("hovered");
  };
  const handleOnMouseLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("hovered");
  };
  return (
    <NavigationElementWrapper
      key={children}
      className="navigation__element"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}>
      <NavLink exact to={to} activeClassName="active">
        <FontAwesomeIcon icon={icon} size="1x" />
        <span>{children}</span>
      </NavLink>
    </NavigationElementWrapper>
  );
};

NavigationElement.propTypes = {
  icon: PropTypes.object,
  to: PropTypes.string,
  children: PropTypes.string,
};

export default NavigationElement;
