import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import MathJax from "react-mathjax2";

const GlobalGrowthFactor = (props) => {
  const createLineData = () => {
    const graphData = {
      confirmed: [],
    };

    const countryData = props.data;

    if (countryData !== undefined) {
      countryData.forEach((date) => {
        if (date.deaths !== 0) {
          graphData.confirmed.push(date.confirmed);
        }
      });
    }

    return graphData.confirmed;
  };

  const newGrowthFactorData = (window) => {
    let daily = [];
    let dailyChange = [];
    let dailyR = [];

    const countryData = props.data;

    if (countryData !== undefined) {
      let ma7 = movingAverage(createLineData(), window);

      ma7.forEach((country) => {
        daily.push(country);
      });
      for (let i = 0; i < daily.length; i++) {
        dailyChange.push(parseFloat(daily[i + 1]) - parseFloat(daily[i]));
      }

      dailyChange.pop();

      for (let i = 1; i < dailyChange.length; i++) {
        let a = dailyChange[i + 1] / dailyChange[i];
        if (a === Infinity) {
          dailyR.push(0.0001);
        } else {
          a = a ? dailyR.push(a) : dailyR.push(0.001);
        }
      }
      dailyR.pop();
      return dailyR;
    }
  };

  const movingAverage = (dailyR, window) => {
    let movingAverageValues = [];
    let temp_array = [];
    let reversed = dailyR.reverse();
    for (let i = 0; i < reversed.length; i++) {
      temp_array.push(dailyR[i]);
      if (temp_array.length === window) {
        movingAverageValues.push(
          temp_array.reduce((total, num) => {
            return total + num;
          }) / window
        );
        temp_array = [];
        i -= window - 1;
      }
    }

    movingAverageValues = movingAverageValues.reverse();
    return movingAverageValues;
  };

  const growthFactorOne = (array) => {
    let oneArray = [];
    const countryData = props.data;

    if (countryData !== undefined) {
      for (let i = 0; i < array.length; i++) {
        oneArray.push(1);
      }
      return oneArray;
    }
  };

  const growthFactorLabels = () => {
    let labels = props.createLineLabels;
    const countryData = props.data;
    if (countryData !== undefined) {
      labels.pop();
      labels.pop();
      let reversed = labels.reverse();
      for (let i = 0; i < 7; i++) {
        reversed.pop();
      }
      return reversed.reverse();
    }
  };

  const line = {
    labels: growthFactorLabels(),
    datasets: [
      {
        label: "Growth Factor (R)",
        data: newGrowthFactorData(7),
        fill: false,
        backgroundColor: "#fbbd08",
        borderColor: "#fbbd08",
        borderWidth: 2,
        pointBackgroundColor: "#fbbd08",
        pointBorderWidth: 0.5,
        pointStyle: "rectRounded",
        pointRadius: 4,
        pointHitRadius: 5,
        pointHoverRadius: 5,
        hoverBackgroundColor: "#FFFFFF",
      },
      {
        label: "Desired Growth Factor (R)",
        data: growthFactorOne(growthFactorLabels()),
        fill: true,
        backgroundColor: "rgba(40, 167, 69, 0.4)",
        borderColor: "#28a745",
        borderWidth: 2,
        pointBorderWidth: 0,
        pointStyle: "rectRounded",
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        pointBackgroundColor: "rgba(40, 167, 69, 0.4)",
        hoverBackgroundColor: "#28a745",
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            display: true,
            major: {
              fontStyle: "bold",
              fontColor: "#FFFFFF",
            },
          },
          gridLines: {
            display: false,
            drawBorder: true,
          },
          scaleLabel: {
            display: true,
            labelString: "Date (YYYY/MM/DD)",
            fontStyle: "bold",
            fontColor: "#FFFFFF",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: true,
            major: {
              fontStyle: "bold",
              fontColor: "#FFFFFF",
            },
          },
          gridLines: {
            display: true,
            drawBorder: true,
          },
          scaleLabel: {
            display: true,
            labelString: "Growth Factor (R)",
            fontStyle: "bold",
            fontColor: "#FFFFFF",
          },
        },
      ],
    },
    legend: {
      display: true,
      position: "top",
      align: "center",
      labels: {
        fontSize: 12,
        fontStyle: "bold",
        fontColor: "#FFFFFF",
      },
    },
    tooltips: {
      displayColors: false,
      callbacks: {
        label: function (tooltipItems, data) {
          return "R Value: " + tooltipItems.yLabel.toFixed(3);
        },
      },
    },
    lineTension: 3,
    borderWidth: 2,
    maintainAspectRatio: true,
  };

  const ascii = "R = (Delta N_(d+1))/(Delta N_d)";
  return (
    <React.Fragment>
      <h4>Growth Factor (R)</h4>
      <br></br>
      <div id="equation">
        <MathJax.Context input="ascii">
          <div>
            <MathJax.Node>{ascii}</MathJax.Node>
          </div>
        </MathJax.Context>
      </div>
      <br></br>
      <div id="description">
        <p>
          This represents a historical growth factor. The raw data of cases is
          taken as a seven-day moving average to smooth out anomalies such as
          revisions or outliers. Where &#916;N<sub>d</sub> shows the change in
          cases on a given day and &#916;N<sub>d+1</sub> shows the change in
          cases of the following day. Hence R &gt; 1 represents exponential
          growth in cases, R = 1 represents stable growth and R &lt; 1
          represents exponential decay in new cases per day.
        </p>
      </div>
      <Line data={line} options={options} />
    </React.Fragment>
  );
};
export default GlobalGrowthFactor;
