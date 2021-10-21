import React from "react";
import { ActionsWrapper } from "./Actions.styles";
import PropTypes from "prop-types";
import { useFetch } from "hooks/useFetch";

const Actions = ({ children }) => {
  return <ActionsWrapper>{children}</ActionsWrapper>;
};

Actions.propTypes = {};

export default Actions;
