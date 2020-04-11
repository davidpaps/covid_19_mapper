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
          variant={"outline-warning"}
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
              <Spinner animation="grow" variant="warning" size="sm" />
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
            variant={"outline-info"}
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
                <Spinner animation="grow" variant="info" size="sm" />
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
