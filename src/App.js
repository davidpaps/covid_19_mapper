import React, { Component } from "react";
import "./App.css";
import Header from "./components/navbar/navbar";
import ref_country_codes from "./components/assets/countries-lat-long.json";
import us_codes from "./components/assets/USlatlong.json";

class App extends Component {
  state = {
    countries: [],
    error: null,
    isLoaded: false,
    total: [],
    totalInt: [],
    totalCFR: null,
    countriesInteger: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":
              "2bb49386fdmsh5daac6ca9add22ep1484a8jsn9816903163ef",
          },
        }
      ),
      fetch(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":
              // "2bb49386fdmsh5daac6ca9add22ep1484a8jsn9816903163ef"
              "a04279196bmsh77bb3ff9e6f2e74p1f4d03jsn5bc0fbe15879",
          },
        }
      ),
      fetch("https://covid19-data.p.rapidapi.com/us", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "2bb49386fdmsh5daac6ca9add22ep1484a8jsn9816903163ef",
        },
      }),
    ])

      .then(([res1, res2, res3]) => {
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })

      .then(([res1, res2, res3]) => {
        this.setState({
          countries: this.createCountry(res2.countries_stat, res3.list),
          total: this.updateTotal(res1),
          totalInt: this.toInteger(res1),
          totalCFR: this.makeGlobalCFR(res2.countries_stat, res3.list),
          countriesInteger: this.makeCountriesInteger(
            res2.countries_stat,
            res3.list
          ),
        });
      });
  }

  createCountry(country, states) {
    const countries = [];
    ref_country_codes.ref_country_codes.forEach((one) =>
      country.forEach((two) => {
        if (two.country_name === "UK") {
          two.country_name = "United Kingdom";
        }
        if (one.country === two.country_name) {
          let intTotalConfirmed = parseInt(two.cases.replace(/,/g, ""));
          let intTotalDeaths = parseInt(two.deaths.replace(/,/g, ""));
          let cfr = (intTotalDeaths / intTotalConfirmed) * 100;
          countries.push({
            country: two.country_name,
            recovered: two.total_recovered,
            deaths: two.deaths,
            confirmed: two.cases,
            center: { lat: one.latitude, lng: one.longitude },
            newCases: two.new_cases,
            newDeaths: two.new_deaths,
            activeCases: two.active_cases,
            criticalCases: two.serious_critical,
            perOneMillion: two.total_cases_per_1m_population,
            cfr: parseFloat(cfr.toFixed(2)),
          });
        }
      })
    );

    let a = this.updateUS(states, countries);

    return a;
  }

  updateUS(states, countries) {
    us_codes.us_codes.forEach((state) =>
      states.forEach((obj) => {
        if (obj.state === "Georgia") {
          obj.state = "Georgia, US";
        }
        if (obj.state === state.state) {
          countries.push({
            us: true,
            country: state.state,
            recovered: obj.recovered,
            deaths: this.commaNumberString(obj.deaths.toString()),
            confirmed: this.commaNumberString(obj.confirmed.toString()),
            center: { lat: state.latitude, lng: state.longitude },
            cfr: parseFloat(((obj.deaths / obj.confirmed) * 100).toFixed(2)),
          });
        }
      })
    );
    return countries;
  }

  updateTotal(totalArray) {
    let total = this.toInteger(totalArray);
    var activeCases = total[0] - total[1] - total[2];

    totalArray["active_cases"] = this.commaNumberString(activeCases.toString())
    return totalArray;
  }

  makeGlobalCFR(countries, states) {
    let cfrPerCountry = [];
    countries.forEach((country) => {
      cfrPerCountry.push(
        (parseInt(country.deaths.replace(/,/g, "")) /
          parseInt(country.cases.replace(/,/g, ""))) *
          100
      );
    });

    states.forEach((state) => {
      cfrPerCountry.push((state.deaths / state.confirmed) * 100);
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let avCfr = cfrPerCountry.reduce(reducer) / cfrPerCountry.length;

    return parseFloat(avCfr.toFixed(2));
  }

  toInteger(totalArray) {
    var newTotalCases = parseInt(totalArray["total_cases"].replace(/,/g, ""));
    var newTotalDeaths = parseInt(totalArray["total_deaths"].replace(/,/g, ""));
    var newTotalRecoveries = parseInt(
      totalArray["total_recovered"].replace(/,/g, "")
    );
    return [newTotalCases, newTotalDeaths, newTotalRecoveries];
  }

  makeCountriesInteger(countries, states) {
    const countriesInteger = [];

    ref_country_codes.ref_country_codes.forEach((one) => {
      countries.forEach((two) => {
        if (one.country === two.country_name) {
          let intTotalConfirmed = parseInt(two.cases.replace(/,/g, ""));
          let intTotalDeaths = parseInt(two.deaths.replace(/,/g, ""));
          let cfr = (intTotalDeaths / intTotalConfirmed) * 100;

          countriesInteger.push({
            country: two.country_name,
            recovered: parseInt(two.total_recovered.replace(/,/g, "")),
            deaths: parseInt(two.deaths.replace(/,/g, "")),
            confirmed: parseInt(two.cases.replace(/,/g, "")),
            center: { lat: one.latitude, lng: one.longitude },
            newCases: parseInt(two.new_cases.replace(/,/g, "")),
            newDeaths: parseInt(two.new_deaths.replace(/,/g, "")),
            activeCases: parseInt(two.active_cases.replace(/,/g, "")),
            criticalCases: parseInt(two.serious_critical.replace(/,/g, "")),
            perOneMillion: parseInt(
              two.total_cases_per_1m_population.replace(/,/g, "")
            ),
            cfr: parseFloat(cfr.toFixed(2)),
          });
        }
      });
    });

    us_codes.us_codes.forEach((state) => {
      states.forEach((obj) => {
        if (obj.state === "Georgia") {
          obj.state = "Georgia, US";
        }
        if (obj.state === state.state) {
          countriesInteger.push({
            us: true,
            country: state.state,
            recovered: obj.recovered,
            deaths: obj.deaths,
            confirmed: obj.confirmed,
            center: { lat: state.latitude, lng: state.longitude },
            cfr: parseFloat(((obj.deaths / obj.confirmed) * 100).toFixed(2)),
          });
        }
      });
    });
    return countriesInteger;
  }

  commaNumberString(string) {
    return string.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
  }

  render() {
    return (
      <div className="App">
        <Header
          total={this.state.total}
          totalInt={this.state.totalInt}
          countries={this.state.countries}
          globalCFR={this.state.totalCFR}
          integerCountries={this.state.countriesInteger}
        />
      </div>
    );
  }
}

export default App;
