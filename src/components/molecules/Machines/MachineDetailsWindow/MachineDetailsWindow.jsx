import React, { useState, useEffect } from "react";
import Table from "components/molecules/Table/Table";
import Chart from "components/molecules/ChartJS/Chart";
import Dygraph from "components/molecules/Dygraph/Dygraph";
import Status from "components/atoms/Status/Status";
import FloatingContainer from "components/organism/Containers/FloatingContainer";
import PreviousChangesCharts from "./PreviousChanges";
import { useMachines } from "hooks/useMachines";
import {
  MachineWrapper,
  MiddlePanelWrapper,
  ChartJSWrapper,
} from "./MachineDetails.styles";
import { useFetch } from "hooks/useFetch";

export default function MachineDetailsWindow({
  beltText,
  machineName,
  screenType,
}) {
  const {
    lockMachine,
    unlockMachine,
    saveStats,
    updateStats,
    lockStatistics,
    unlockStatistics,
    checkStatsIsExist,
    getFeed,
  } = useMachines();

  const { getAllData, updateAllData, clearDataInSession } = useFetch();
  const shortName = machineName.split("_")[0].slice(0, 3);
  const [summaryData, setSummaryData] = useState(null),
    [chartJSData, setChartJSData] = useState(null),
    [dygraphData, setDygraphData] = useState(null);

  useEffect(() => {
    (async () => {
      if (screenType === "analitycs") {
        const from = new Date(new Date() - 86400000),
          to = new Date();
        const { success, summary, chartJS, dygraph } = await getAllData(
          machineName,
          "current-change",
          from,
          to
        );
        const result = await getFeed(
          machineName,
          from.toISOString(),
          to.toISOString()
        );
        if (success) {
          setSummaryData(summary);
          setChartJSData(chartJS);
          setDygraphData(dygraph);
        }
      } else {
        const from = new Date(),
          to = new Date();
        const { summary, chartJS } = await getAllData(
          machineName,
          "current-change",
          from,
          to
        );
        setSummaryData(summary);
        setChartJSData(chartJS);
        const isExist = await checkStatsIsExist(machineName);
        if (isExist) {
          lockMachine(machineName);
          unlockStatistics(machineName);
        } else {
          lockMachine(machineName);
          saveStats(machineName);
        }
      }
    })();
    return () => {
      if (screenType === "operator") {
        unlockMachine(machineName);
        lockStatistics(machineName);
        updateStats(machineName);
      }
      setSummaryData(null);
      setChartJSData(null);
      setDygraphData(null);
    };
  }, []);
  useEffect(() => {
    const id = setInterval(async () => {
      const from = new Date();

      const { success, summary, chartJS, dygraph } = await updateAllData(
        machineName,
        from
      );
      if (success) {
        setSummaryData(summary);
        setChartJSData(chartJS);
        setDygraphData(dygraph);
      }
    }, 1000);
    return () => {
      clearInterval(id);
      setSummaryData(null);
      setChartJSData(null);
      setDygraphData(null);
      clearDataInSession(machineName);
    };
  }, []);
  return (
    <FloatingContainer
      className="machine__wrapper"
      beltText={beltText}
      machineName={machineName}
      screenType={screenType}>
      <MachineWrapper className="machine__container">
        <div className="left-panel__container">
          {machineName ? (
            <Status
              machineName={machineName}
              shortName={shortName}
              showStatus={true}
            />
          ) : (
            <p>Ładowanie</p>
          )}

          <div className="table__container">
            {summaryData ? (
              <Table
                type="machine-statistics"
                headers={["Status", "Czas", "%"]}
                data={summaryData}
                machineName={machineName}
              />
            ) : null}
          </div>
        </div>
        <MiddlePanelWrapper className="middle-panel__container">
          {screenType === "analitycs" ? (
            <div className="container dygraph__container">
              <div
                id={`dygraph-legend ${machineName}`}
                className="dygraph-legend"></div>
              {dygraphData ? (
                <Dygraph data={dygraphData} machineName={machineName} />
              ) : null}
            </div>
          ) : null}

          <ChartJSWrapper className="chartJS__container">
            {chartJSData ? (
              <Chart
                type="percentage"
                isPrevious={false}
                machineName={machineName}
                data={chartJSData}
              />
            ) : null}
            {chartJSData ? (
              <Chart
                type="time"
                isPrevious={false}
                machineName={machineName}
                data={chartJSData}
              />
            ) : null}
          </ChartJSWrapper>
          {screenType === "operator" ? (
            <PreviousChangesCharts machineName={machineName} />
          ) : null}
        </MiddlePanelWrapper>
      </MachineWrapper>
    </FloatingContainer>
  );
}
