import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import Spinner from "react-bootstrap/Spinner";
import MapContainer from "./../map/map";
import TableContainer from "./../tables/table";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMap: true,
      viewTables: false
    }

  }

  handleMapClick = () => {
    this.setState({
      viewMap: true,
      viewTables: false,
    });
  };

  handleTableClick = () => {
    this.setState({
      viewMap: false,
      viewTables: true,
    });
  };

  render() {
    return (
      <div id="app">
        <Navbar fixed="top" bg={this.state.viewMap ? "" : "dark"} className="navbar-dark bs-navbar-collapse" >
          <Nav>
            <DropdownButton
              variant={"outline-light"}
              title={
                "Global Recoveries: " + this.props.total.total_recovered ===
                "Global Recoveries: undefined" ? (
                  "Last Updated" && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )
                ) : (
                  <span>
                    <span id="img">
                      <img
                        alt=""
                        src="https://cdn3.iconfinder.com/data/icons/science-116/64/virus-lab-scientist-biology-cell-medical-512.png?v=2"
                        width="22"
                        height="22"
                        className="d-inline-block align-top"
                      ></img></span>
                    Covid-19
                </span>
                )}
              id="last_updated"
            >
              <Dropdown.Item onClick={this.handleMapClick}>
                <div id="drop-down-window">
                  <div id="info-icon">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/420px-Globe_icon.svg.png"
                      height="18px"
                      width="18px"
                      alt=""
                    ></img>
                  </div>
                  View Map{" "}
                </div>
              </Dropdown.Item>

              <Dropdown.Item onClick={this.handleTableClick}>
                <div id="drop-down-window">
                  <div id="info-icon">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Simple_icon_table.svg/1280px-Simple_icon_table.svg.png"
                      height="16px"
                      width="20px"
                      alt=""
                    ></img>
                  </div>
                  View Tables
                </div>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Nav className="ml-auto">
            <DropdownButton
              variant={"outline-info"}
              title={
                "Global Cases: " + this.props.total.total_cases ===
                "Global Cases: undefined"
                  ? "Global Cases: " && (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )
                  : "Global Cases: " + this.props.total.total_cases
              }
              id="last_updated"
            >
              <Dropdown.Item>
                <div id="drop-down-window">
                  <Spinner animation="grow" variant="info" size="sm" />
                  Daily Increase: {this.props.total.new_cases}
                </div>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Nav className="ml-auto">
            <DropdownButton
              variant={"outline-success"}
              title={
                "Global Recoveries: " + this.props.total.total_recovered ===
                "Global Recoveries: undefined"
                  ? "Global Recoveries: " && (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )
                  : "Global Recoveries: " + this.props.total.total_recovered
              }
              id="last_updated"
            >
              <Dropdown.Item>
                <div id="drop-down-window">
                  <Spinner animation="grow" variant="success" size="sm" />
                  Active Cases: {this.props.total.active_cases}
                </div>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Nav className="ml-auto">
            <DropdownButton
              variant={"outline-danger"}
              title={
                "Global Deaths: " + this.props.total.total_deaths ===
                "Global Deaths: undefined"
                  ? "Global Deaths: " && (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )
                  : "Global Deaths: " + this.props.total.total_deaths
              }
              id="last_updated"
            >
              <Dropdown.Item>
                <div id="drop-down-window">
                  <Spinner animation="grow" variant="danger" size="sm" />
                  Daily Increase: {this.props.total.new_deaths}
                </div>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Nav className="ml-auto">
            <DropdownButton
              alignRight
              variant={"outline-warning"}
              title={
                "Global C.F.R: " + this.props.globalCFR === "Global C.F.R: null"
                  ? "Global C.F.F: " && (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )
                  : "Global C.F.R: " + this.props.globalCFR + "%"
              }
              id={"dropdown-menu-align-right"}
            >
              <Dropdown.Item>
                <div id="drop-down-window">
                  <div id="info-icon">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png"
                      height="22px"
                      width="22px"
                      alt=""
                    ></img>
                  </div>
                  <div>
                    Case Fatality Rate = % of Recorded Cases that Result in
                    Deaths
                  </div>
                </div>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
          <Nav className="ml-auto">
            <DropdownButton
              alignRight
              variant={"outline-secondary"}
              title={
                "Global Recoveries: " + this.props.total.total_recovered ===
                "Global Recoveries: undefined"
                  ? "Last Updated" && (
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )
                  : "Last Updated"
              }
              id={"dropdown-menu-align-right"}
            >
              <Dropdown.Item>
                <div id="drop-down-window">
                  <Spinner animation="grow" variant="secondary" size="sm" />
                  UTC: {this.props.total.statistic_taken_at}
                </div>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar>
        {this.state.viewMap && (
          <div className="Container">
            <MapContainer
              countries={this.props.countries}
              total={this.props.totalInt}
              globalCFR={this.props.globalCFR}
              integerCountries={this.props.integerCountries}
            />
          </div>
        )}
        {this.state.viewTables && (
          <div id="table">
            <TableContainer countries={this.props.integerCountries} />
          </div>
        )}
      </div>
    );
  }
}


export default Header;
