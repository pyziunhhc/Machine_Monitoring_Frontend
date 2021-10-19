import React, { useState, useEffect } from "react";
import Chart from "components/molecules/ChartJS/Chart";
import { MachineWrapper } from "./PreviousChanges.styles";
import { useFetch } from "hooks/useFetch";

export default function PreviousChangesCharts({ machineName }) {
  const [firstChangeData, setFirstChangeData] = useState(null),
    [secondChangeData, setSecondChangeData] = useState(null),
    [thirdChangeData, setThirdChangeData] = useState(null);
  const { getChartJSData } = useFetch();
  useEffect(() => {
    (async () => {
      const timeBase = new Date(new Date() - 86400000),
        day = timeBase.getDate(),
        month = timeBase.getMonth(),
        year = timeBase.getFullYear();

      const from = new Date(year, month, day, 7, 0, 0),
        tempTo = new Date(year, month, day, 7, 0, 0),
        to = new Date(tempTo.setHours(tempTo.getHours() + 8));
      const { success, chartJS } = await getChartJSData(
        machineName,
        "previous-first",
        from,
        to
      );
      if (success) {
        setFirstChangeData(chartJS);
      }
    })();
    return () => {};
  }, [machineName, getChartJSData]);
  useEffect(() => {
    (async () => {
      const timeBase = new Date(new Date() - 86400000),
        day = timeBase.getDate(),
        month = timeBase.getMonth(),
        year = timeBase.getFullYear();
      const from = new Date(year, month, day, 15, 0, 0),
        tempTo = new Date(year, month, day, 15, 0, 0),
        to = new Date(tempTo.setHours(tempTo.getHours() + 8));
      const { success, chartJS } = await getChartJSData(
        machineName,
        "previous-second",
        from,
        to
      );
      if (success) {
        setSecondChangeData(chartJS);
      }
    })();
    return () => {};
  }, [machineName, getChartJSData]);
  useEffect(() => {
    (async () => {
      const timeBase = new Date(new Date() - 86400000),
        day = timeBase.getDate(),
        month = timeBase.getMonth(),
        year = timeBase.getFullYear();

      const from = new Date(year, month, day, 23, 0, 0),
        tempTo = new Date(year, month, day, 23, 0, 0),
        to = new Date(tempTo.setHours(tempTo.getHours() + 8));

      const { success, chartJS } = await getChartJSData(
        machineName,
        "previous-third",
        from,
        to
      );
      if (success) {
        setThirdChangeData(chartJS);
      }
    })();

    return () => {};
  }, [machineName, getChartJSData]);

  return (
    <MachineWrapper className="previous-change__container">
      <div className="chartJS__container">
        <header className="title">
          <h1>PIERWSZA ZMIANA</h1>
        </header>
        {firstChangeData ? (
          <Chart
            type="time"
            isPreviousChange={true}
            machineName={machineName}
            data={firstChangeData}
          />
        ) : null}
      </div>

      <div className="chartJS__container">
        <header className="title">
          <h1>DRUGA ZMIANA</h1>
        </header>
        {secondChangeData ? (
          <Chart
            type="time"
            isPreviousChange={true}
            machineName={machineName}
            data={secondChangeData}
          />
        ) : null}
      </div>
      <div className="chartJS__container">
        <header className="title">
          <h1>TRZECIA ZMIANA</h1>
        </header>
        {thirdChangeData ? (
          <Chart
            type="time"
            isPreviousChange={true}
            machineName={machineName}
            data={thirdChangeData}
          />
        ) : null}
      </div>
    </MachineWrapper>
  );
}
