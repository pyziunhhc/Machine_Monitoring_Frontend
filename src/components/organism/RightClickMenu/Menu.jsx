import React, { Component } from "react";
import ReportsList from "../../views/Dashboard/Reports/ReportsList/ReportsList";
import "./style.css";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: {
        show: false,
      },
    };
  }

  render() {
    return (
      <div
        className="additional-menu__wrapper"
        style={{
          top: `${this.props.coords.y}px`,
          left: `${this.props.coords.x}px`,
        }}>
        <div className="additional-menu__container">
          <ul>
            <li
              onMouseOver={(e) => {
                this.setState((prevState) => {
                  return {
                    ...prevState,
                    report: {
                      show: !prevState.report.show,
                    },
                  };
                });
              }}
              onMouseOut={(e) => {
                this.setState((prevState) => {
                  return {
                    ...prevState,
                    report: {
                      show: !prevState.report.show,
                    },
                  };
                });
              }}>
              Dodaj raport
            </li>
          </ul>
          {this.state.report.show ? <ReportsList /> : null}
        </div>
      </div>
    );
  }
}
