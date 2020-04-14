import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";
import Spinner from "react-bootstrap/Spinner";

class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" className="navbar-dark bs-navbar-collapse">
        <Navbar.Brand>
          <img
            alt=""
            src="https://cdn3.iconfinder.com/data/icons/science-116/64/virus-lab-scientist-biology-cell-medical-512.png?v=2"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Covid-19
        </Navbar.Brand>
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
              "Global C.F.R: " + this.props.globalCFR ===
                "Global C.F.R: null"
                ? "Global C.F.F: " && (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )
                : "Global C.F.R: " + this.props.globalCFR + '%'
            }
            id={"dropdown-menu-align-right"}
          >
            <Dropdown.Item>
              <div id="drop-down-window">
                <div id="info-icon">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png" height="22px" width="22px" alt=""></img>
                </div>
                <div>Case Fatality Rate = % of Recorded Cases that Result in Deaths</div>
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
    );
  }
}

export default Header;
