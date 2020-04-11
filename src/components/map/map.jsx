import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";
import styles from "./../assets/mapStyle.json";
import MapInfo from "./mapinfo";
import Legend from './legend'

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.countryElement = React.createRef();

    this.state = {
      center: { lat: 40.4929, lng: 15.5553 },
      isMarkerShowing: true,
      selectedPlace: {},
      activeMarker: {},
    };
  }

  onMarkerClicked = (marker) => {
    this.countryElement.current.changeCountry(marker)
  };


  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        ref={this.map}
        defaultCenter={this.state.center}
        defaultZoom={2.25}
        options={{
          disableDefaultUI: true,
          styles: styles,
          minZoom: 2,
          maxZoom: 10,
          zoomControl: true,
        }}
        onIdle={this.handleIdle}
      >
        {console.log(this.props)}
        {this.props.integerCountries.map((country, i) => (
          <Circle
            ref={this.circle}
            defaultCenter={country.center}
            radius={

              country.country === "USA"
                ? 220000
                : (country.confirmed / this.props.total[0]) * 100 <= 1.5 || NaN
                  ? 60000
                  : 160000
            }
            onClick={() => this.onMarkerClicked(country.country)}
            options={
              (country.deaths / country.confirmed) * 100 <= this.props.globalCFR
                ? {
                  fillColor: "#FFC108",
                  fillOpacity: 0.5,
                  strokeOpacity: 0.8,
                  strokeWeight: 0
                }
                : {
                  fillColor: "#DC3645",
                  fillOpacity: 0.5,
                  strokeOpacity: 0.8,
                  strokeWeight: 0
                }
            }
          >{typeof country.confirmed === "string" ? console.log(country.country) : console.log("")}</Circle>
        ))
        }
      </GoogleMap>
    ));

    return (
      <div>
        <div>
          <GoogleMapExample
            containerElement={<div id="container" />}
            mapElement={<div id="map" />}
          />
        </div>
        <div id="legend">
          <Legend />
        </div>
        <div id="mapinfo">
          <MapInfo
            ref={this.countryElement}
            countriesArray={this.props.countries}
          />
        </div>
      </div >
    );
  }
}

export default MapContainer;
