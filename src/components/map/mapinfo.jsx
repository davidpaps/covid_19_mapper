import React, { Component } from "react";

class MapInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: "UK",
    };
  }

  changeCountry = (marker) => {
    this.setState({
      marker: marker,
    });
  };

  render() {
    return (
      <div className="bg-warning text-white" id="card">
        {this.props.countriesArray.map((country) => {
          if (country.country === this.state.marker) {
            if (country.us) {
              return (
                <div id="mapinfo">
                  <div id="infoUS">
                    <h4>{country.country}</h4>
                  </div>
                  <br></br>
                  <div id="infoUS">
                    <strong>Total Cases</strong>
                    <br></br> {country.confirmed}
                  </div>
                  <div id="infoUS">
                    <strong>Total Deaths</strong>
                    <br></br> {country.deaths}
                  </div>
                </div>
              );
            } else {
              return (
                <div id="mapinfo">
                  <div id="info">
                    <h4>{country.country}</h4>
                  </div>
                  <br></br>
                  <div id="info">
                    <strong>Total Cases</strong>
                    <br></br>
                    {country.confirmed}
                  </div>
                  <div id="info">
                    <strong>Total Deaths</strong>
                    <br></br> {country.deaths}
                  </div>
                  <div id="info">
                    <strong>Total Recoveries</strong>
                    <br></br> {country.recovered}
                  </div>
                  <div id="info">
                    <strong>Active Cases</strong>
                    <br></br> {country.activeCases}
                  </div>
                  <div id="info">
                    <strong>Critical Cases</strong>
                    <br></br> {country.criticalCases}
                  </div>
                  <div id="info">
                    <strong>New Deaths</strong>
                    <br></br> {country.newDeaths}
                  </div>
                  <div id="info">
                    <strong>Cases per Millon</strong>
                    <br></br> {country.perOneMillion}
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    );
  }
}

export default MapInfo;
