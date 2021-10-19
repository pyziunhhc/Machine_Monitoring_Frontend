import React from "react";
import { DashboardWrapper } from "./Dashboard.styles";
import Title from "components/atoms/Title/Title";
import MachinesOccupancy from "components/molecules/Machines/MachinesOccupancy/MachinesOccupancy";
// import ConfigurationMenu from "./ConfigurationMenu";
import MachineFeed from "components/molecules/Machines/MachineFeed/MachineFeed";
import MachineMap from "components/organism/MachineMap/MachineMap";
import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
const ResponsiveGridLayout = WidthProvider(Responsive);
const Test = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;
function Dashboard() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 2, maxW: 4 },
    { i: "b", x: 2, y: 0, w: 2, h: 2, maxW: 4 },
  ];
  return (
    <DashboardWrapper>
      <Title color="white">Dashboard</Title>
      <div className="dashboard-elements__container">
        {/* <ResponsiveGridLayout
          className="layout"
          layout={layout}
          cols={{ lg: 8, md: 6, sm: 4, xs: 2, xxs: 1 }}>
          <div key="a">
            {" "}
            <MachineFeed />
          </div>
          <div key="b">
            <MachinesOccupancy />
          </div>
        </ResponsiveGridLayout> */}

        <MachinesOccupancy key="a" />
        <MachineFeed key="b" />

        {/* <MachineMap /> */}
      </div>
    </DashboardWrapper>
  );
}

export default Dashboard;
