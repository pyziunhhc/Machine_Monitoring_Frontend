import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { parseMillisecondsIntoReadableTime } from "../../../helpers/helpers";
export default function Chart({ data, type, isPreviousChange }) {
  let chartRef = useRef(null);
  const clientWidth = document.body.clientWidth;
  const [chartData, setChartData] = useState({
    labels: data.labels,
    datasets: [
      {
        label: type,
        data:
          type === "time"
            ? data.time.map((test) => {
                if (test.show) return new Date(test);
              })
            : data.percentage,
        backgroundColor: data.colors,
      },
    ],
  });
  const [options] = useState({
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
            min: 0.1,
            stacked: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            display: false,
            min: 0.1,
            stacked: true,
          },
        },
      ],
    },
    showAllTooltips: true,
    tooltips: {
      custom: function (tooltip) {
        try {
          let value = tooltip.body[0].lines[0].split(": ")[1];
          tooltip.body[0].lines[0] =
            type === "percentage"
              ? `${value}%`
              : parseMillisecondsIntoReadableTime(value);
          tooltip.bodyFontSize = 20;
          if (!tooltip) return;
          tooltip.displayColors = false;
        } catch (e) {
          console.log(e);
        }
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        align: "end",
        clamp: true,
        overlap: "auto",
        clip: true,
        visibility: "auto",
        display: true,
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        formatter: function (value, context) {
          return type === "percentage"
            ? `${value}%`
            : parseMillisecondsIntoReadableTime(value);
        },
        borderRadius: 4,
        font: {
          size: 15,
          weight: "bold",
        },
        color: "black",
        textShadowColor: "black",
        //rotation: rotation
      },
    },
    legend: {
      display: false,
    },
    animation: false,
  });
  useEffect(() => {
    setChartData({
      labels: data.labels,
      datasets: [
        {
          label: type,
          data:
            type === "time"
              ? data.time.map((time) => new Date(time))
              : data.percentage,
          backgroundColor: data.colors,
        },
      ],
    });
    return () => {};
  }, [data, type]);
  return (
    <Bar
      data={chartData}
      options={options}
      width={clientWidth > 1600 ? 400 : 200}
      height={
        isPreviousChange
          ? clientWidth > 1600
            ? 400
            : 350
          : clientWidth > 1600
          ? 500
          : 350
      }
      ref={chartRef}
    />
  );
}
