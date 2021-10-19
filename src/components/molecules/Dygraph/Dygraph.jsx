import React, { useState, useEffect } from "react";
import Dygraph from "dygraphs";
import { parseMillisecondsIntoReadableTime } from "helpers/helpers";
export default function Dygraphs({ data, machineName }) {
  const tempColors = {
    erodowanie: {
      name: "erodowanie",
      displayName: "Erodowanie",
      className: "eroding",
      color: "#005214",
    },
    szlifowanie: {
      name: "szlifowanie",
      displayName: "Szlifowanie",
      color: "rgba(0, 209, 44, 0.9)",
      className: "grinding",
    },
    praca: {
      name: "praca",
      displayName: "Praca",
      className: "working",
      color: "rgba(0, 82, 20, 0.9)",
    },
    disconnect: {
      name: "disconnect",
      displayName: "Wyłączona",
      className: "disconnect",
      color: "rgba(145, 145, 145, 1)",
    },
    manual: {
      name: "manual",
      displayName: "Załadunek\nRobotem",
      className: "robotLoading",
      color: "rgba(200,0,200,1)",
    },
    warmup: {
      name: "warmup",
      displayName: "Załadunek Ręczny",
      className: "manualLoading",
      color: "rgba(81, 182, 215,1)",
    },
    stop: {
      name: "stop",
      displayName: "Stop",
      className: "stop",
      color: "rgba(243, 230, 0, 1)",
    },
    suspend: {
      name: "suspend",
      displayName: "Pomiar",
      className: "measuring",
      color: "rgba(255, 177, 51, 1)",
    },
    alarm: {
      name: "alarm",
      displayName: "Alarm",
      className: "alarm",
      color: "rgba(255,0,0,1)",
    },
    rozgrzewka: {
      name: "rozgrzewka",
      displayName: "Rozgrzewka",
      className: "warmup",
      color: "rgba(168,80,80,1)",
    },
    wymiana_sciernicy: {
      name: "wymiana_sciernicy",
      displayName: "Wymiana\nŚciernicy",
      className: "wheelReplacement",
      color: "rgba(0,0,0,1)",
    },
    wymianaNarzedzia: {
      name: "wymianaNarzedzia",
      displayName: "Wymiana\nNarzędzia",
      className: "toolChange",
      color: "rgba(206, 183, 119, 1)",
    },
    przejscie: {
      name: "przejscie",
      displayName: "Przejście",
      className: "transition",
      color: "rgba(255,112,183,1)",
    },
    zatrzymanie: {
      name: "zatrzymanie",
      displayName: "Zatrzymanie",
      className: "suspend",
      color: "rgba(145,19,19,1)",
    },
  };
  const [chartObject, setChartObject] = useState(null),
    [chartData] = useState(
      data.map((test) => {
        return test.map((test2, index) => {
          if (index === 0) {
            return new Date(test2);
          } else {
            return test2;
          }
        });
      })
    ),
    [labels] = useState([
      "start",
      "Posuw",
      "Erodowanie",
      "Szlifowanie",
      "Wyłączona",
      "Zał.Ręczny",
      "Zał.Robotem",
      "Stop",
      "Pomiar",
      "Alarm",
      "Wymiana Ściernicy",
      "Wymiana Narzędzia",
      "Przejście",
      "Rozgrzewka",
      "Zatrzymanie",
      "Praca",
    ]),
    [colors] = useState([
      tempColors.erodowanie.color,
      tempColors.erodowanie.color,
      tempColors.szlifowanie.color,
      tempColors.disconnect.color,
      tempColors.warmup.color,
      tempColors.manual.color,
      tempColors.stop.color,
      tempColors.suspend.color,
      tempColors.alarm.color,
      tempColors.wymiana_sciernicy.color,
      tempColors.wymianaNarzedzia.color,
      tempColors.przejscie.color,
      tempColors.rozgrzewka.color,
      tempColors.zatrzymanie.color,
      tempColors.praca.color,
    ]);
  const create = (data, labels, colors) => {
    const clientWidth = document.body.clientWidth;
    return new Dygraph(`dygraph ${machineName}`, data, {
      labels,
      colors,
      visibility: [
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      labelsDiv: `dygraph-legend ${machineName}`,
      stepPlot: true,
      fillGraph: true,
      fillAlpha: 1,
      height: 150,
      width: clientWidth > 1000 ? 1024 : clientWidth - 100,
      valueRange: [0, 1],
      displayAnnotations: true,
      axes: {
        y: {
          drawAxis: false,
        },
      },
      valueFormatter(value, opts, seriesName) {
        if (seriesName !== "start") {
          return `Czas: ${parseMillisecondsIntoReadableTime(value)}`;
        } else {
          return `Start: ${new Date(value).toLocaleDateString()} ${new Date(
            value
          ).toLocaleTimeString()}`;
        }
      },
      zoomCallback(minDate, maxDate, yRanges) {
        this.updateOptions({
          valueRange: [0, 1],
        });
      },
      annotationClickHandler(event, x, points) {
        console.log(...arguments);
      },
    });
  };

  useEffect(() => {
    let object = create(chartData, labels, colors);
    setChartObject(object);
    return () => {
      setChartObject(null);
    };
  }, []);
  return <div id={`dygraph ${machineName}`}></div>;
}
