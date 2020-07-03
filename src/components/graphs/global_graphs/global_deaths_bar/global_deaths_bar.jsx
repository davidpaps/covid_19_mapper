import React, { useState } from "react";
import popData from "../../../assets/popData";
import { HorizontalBar } from "react-chartjs-2";
import Button from "react-bootstrap/Button";

const GlobalDeathsBar = (props) => {
  const [adjust, setAdjust] = useState(false);

  const horizontalBarLabels = () => {
    var deathsPer1m = [];
    props.countries.forEach((country) => {
      popData.popData.forEach((countryPop) => {
        if (country.country === countryPop.name) {
          if (parseFloat(countryPop.pop2020) / 1000 > 2.5) {
            deathsPer1m.push({
              deaths: country.deaths / (parseFloat(countryPop.pop2020) / 1000),
              country: country.country,
            });
          }
        }
      });
    });
    let topTenDeathsPer1m = deathsPer1m
      .sort(function (a, b) {
        return a.deaths < b.deaths ? 1 : -1;
      })
      .slice(0, 20);
    let finalLabels = [];
    topTenDeathsPer1m.forEach((country) => {
      finalLabels.push(country.country);
    });
    return finalLabels;
  };

  const horizontalBarLabelsAdjusted = () => {
    var deathsPer1m = [];
    props.countries.forEach((country) => {
      popData.popData.forEach((countryPop) => {
        if (country.country === countryPop.name) {
          if (parseFloat(countryPop.pop2020) / 1000 > 2.5) {
            deathsPer1m.push({
              deaths:
                country.deaths /
                (parseFloat(countryPop.pop2020) / 1000) /
                countryPop.Density,
              country: country.country,
            });
          }
        }
      });
    });
    let topTenDeathsPer1m = deathsPer1m
      .sort(function (a, b) {
        return a.deaths < b.deaths ? 1 : -1;
      })
      .slice(0, 20);
    let finalLabels = [];
    topTenDeathsPer1m.forEach((country) => {
      finalLabels.push(country.country);
    });
    return finalLabels;
  };

  const handleClick = () => {
    setAdjust(!adjust);
  };

  const horizontalBarDataAdj = () => {
    var deathsPer1m = [];
    props.countries.forEach((country) => {
      popData.popData.forEach((countryPop) => {
        if (country.country === countryPop.name) {
          if (parseFloat(countryPop.pop2020) / 1000 > 2.5) {
            deathsPer1m.push(
              country.deaths /
                (parseFloat(countryPop.pop2020) / 1000) /
                countryPop.Density
            );
          }
        }
      });
    });
    let topTenDeathsPer1m = deathsPer1m
      .sort(function (a, b) {
        return a < b ? 1 : -1;
      })
      .slice(0, 20);
    return topTenDeathsPer1m;
  };

  const horizontalBarData = () => {
    var deathsPer1m = [];
    props.countries.forEach((country) => {
      popData.popData.forEach((countryPop) => {
        if (country.country === countryPop.name) {
          if (parseFloat(countryPop.pop2020) / 1000 > 2.5) {
            deathsPer1m.push(
              country.deaths / (parseFloat(countryPop.pop2020) / 1000)
            );
          }
        }
      });
    });
    let topTenDeathsPer1m = deathsPer1m
      .sort(function (a, b) {
        return a < b ? 1 : -1;
      })
      .slice(0, 20);
    return topTenDeathsPer1m;
  };

  const horizontal = {
    labels: horizontalBarLabels(),
    datasets: [
      {
        label: "Deaths per Million People",
        data: horizontalBarData(),
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "#dc3644",
        borderWidth: 1,
        hoverBackgroundColor: "#dc3644",
        hoverBorderColor: "rgba(255,99,132,0.2)",
        pointColor: "#dc3644",
      },
    ],
  };

  const horizontalAdj = {
    labels: horizontalBarLabelsAdjusted(),
    datasets: [
      {
        label: "Adjusted Deaths per Million People",
        data: horizontalBarDataAdj(),
        backgroundColor: "rgb(220,54,68,0.8)",
        borderColor: "rgba(255,45,2,0.2)",
        borderWidth: 1,
        hoverBackgroundColor: "rgb(255,99,132,0.2)",
        hoverBorderColor: "#dc3644",
        pointColor: "#dc3644",
      },
    ],
  };

  const hOptions = {
    scales: {
      xAxes: [
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
            labelString: "Deaths",
            fontStyle: "bold",
            fontColor: "#FFFFFF",
          },
        },
      ],
      yAxes: [
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
            labelString: "Country",
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
          let density = popData.popData.map((countryPop) => {
            if (tooltipItems.yLabel === countryPop.name) {
              return countryPop.Density;
            }
          });
          let popDensity = density.sort();
          return [
            "Deaths per 1M: " + Math.round(tooltipItems.xLabel),
            "Population Density: " +
              Math.round(popDensity[0]) +
              " ( People per km\u00B2 )",
          ];
        },
      },
    },
    borderWidth: 2,
    maintainAspectRatio: true,
  };

  const hOptionsAdj = {
    scales: {
      xAxes: [
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
            labelString: "Deaths",
            fontStyle: "bold",
            fontColor: "#FFFFFF",
          },
        },
      ],
      yAxes: [
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
            labelString: "Country",
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
          let density = popData.popData.map((countryPop) => {
            if (tooltipItems.yLabel === countryPop.name) {
              return countryPop.Density;
            }
          });
          let popDensity = density.sort();
          return [
            "Adjusted Deaths per 1M: " + tooltipItems.xLabel.toFixed(2),
            "Population Density: " +
              Math.round(popDensity[0]) +
              " ( People per km\u00B2 )",
          ];
        },
      },
    },
    borderWidth: 2,
    maintainAspectRatio: true,
  };
  return (
    <div>
      <h4>Highest Country Deaths per Million People</h4>
      <br></br>
      <div id="description">
        <p>
          This represents 20 countries that have the highest deaths per one
          million people. Adjusting the figures to per million of population
          controls for the difference in population sizes between countries.
          This can be further adjusted to account for population denisity and
          this demonstrates the number of deaths per one million people per km
          <sup>2</sup>.
        </p>
      </div>
      <br></br>
      {!adjust && (
        <div id="h">
          <Button onClick={handleClick} variant={"danger"}>
            Adjust for Population Density
          </Button>
          <br></br>
          <br></br>
          <HorizontalBar data={horizontal} options={hOptions} />
        </div>
      )}
      {adjust && (
        <div id="h">
          <Button onClick={handleClick} variant={"danger"}>
            Raw Statistics
          </Button>
          <br></br>
          <br></br>
          <HorizontalBar data={horizontalAdj} options={hOptionsAdj} />
        </div>
      )}
    </div>
  );
};

export default GlobalDeathsBar;
