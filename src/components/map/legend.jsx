import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


class Legend extends Component {

  renderTooltipYellow(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        C.F.R &lt; Global Average C.F.R
      </Tooltip>
    );
  }

  renderTooltipRed(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        C.F.R &gt; Global Average C.F.R
      </Tooltip>
    );
  }

  renderTooltipSmall(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Country Infection &lt; 1% of Global Infection
      </Tooltip>
    );
  }

  renderTooltipLarge(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Country Infection &gt; 1% of Global Infection
      </Tooltip>
    );
  }

  render() {
    return (
      <div >
        <div id="key">
          <strong>Key</strong>
          <br></br>
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 250 }} overlay={this.renderTooltipYellow}  >
            <Button
              variant={"outline-"}
              size={"sm"}>
              <div id="colour"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 172 172"
                styles=" fill:#000000;"><g fill="none" fillRule="nonzero" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffc108"><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667z">
                </path></g></g></svg></div>
            </Button>
          </OverlayTrigger>
          <br></br>
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 250 }} overlay={this.renderTooltipRed}>
            <Button
              variant={"outline-"}
              size={"sm"}>
              <div id="colour"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 172 172"
                styles=" fill:#000000;"><g fill="none" fillRule="nonzero" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#fb5945"><path d="M86,14.33333c-39.58041,0 -71.66667,32.08626 -71.66667,71.66667c0,39.58041 32.08626,71.66667 71.66667,71.66667c39.58041,0 71.66667,-32.08626 71.66667,-71.66667c0,-39.58041 -32.08626,-71.66667 -71.66667,-71.66667z">
                </path></g></g></svg></div>
            </Button>
          </OverlayTrigger>
        </div>
        <OverlayTrigger placement="right" delay={{ show: 250, hide: 250 }} overlay={this.renderTooltipSmall}>
          <Button
            variant={"outline-"}
            size={"sm"}>
            <div id="size"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="15" height="15"
              viewBox="0 0 172 172"
              styles=" fill:#000000;"><g transform="translate(4.988,4.988) scale(0.942,0.942)"><g fill="none" fillRule="nonzero" ><g fill="#ffffff" ><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667zM86,28.66667c-31.53333,0 -57.33333,25.8 -57.33333,57.33333c0,31.53333 25.8,57.33333 57.33333,57.33333c31.53333,0 57.33333,-25.8 57.33333,-57.33333c0,-31.53333 -25.8,-57.33333 -57.33333,-57.33333z">
              </path></g><path d="M0,172v-172h172v172z" fill="none" ></path><g fill="#ffffff" ><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667zM86,28.66667c-31.53333,0 -57.33333,25.8 -57.33333,57.33333c0,31.53333 25.8,57.33333 57.33333,57.33333c31.53333,0 57.33333,-25.8 57.33333,-57.33333c0,-31.53333 -25.8,-57.33333 -57.33333,-57.33333z"></path></g><path d="" fill="none" >
                </path></g></g></svg></div>
          </Button>
        </OverlayTrigger>
        <br></br>
        <OverlayTrigger placement="right" delay={{ show: 250, hide: 250 }} overlay={this.renderTooltipLarge}>
          <Button
            variant={"outline-"}
            size={"sm"}>
            <div id="size"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="30" height="30"
              viewBox="0 0 172 172"
              styles=" fill:#000000;"
            ><g transform="translate(4.988,4.988) scale(0.942,0.942)"><g fill="none" fillRule="nonzero" ><g fill="#ffffff" ><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667zM86,28.66667c-31.53333,0 -57.33333,25.8 -57.33333,57.33333c0,31.53333 25.8,57.33333 57.33333,57.33333c31.53333,0 57.33333,-25.8 57.33333,-57.33333c0,-31.53333 -25.8,-57.33333 -57.33333,-57.33333z">
            </path></g><path d="M0,172v-172h172v172z" fill="none" ></path><g fill="#ffffff" ><path d="M86,157.66667c-39.41667,0 -71.66667,-32.25 -71.66667,-71.66667c0,-39.41667 32.25,-71.66667 71.66667,-71.66667c39.41667,0 71.66667,32.25 71.66667,71.66667c0,39.41667 -32.25,71.66667 -71.66667,71.66667zM86,28.66667c-31.53333,0 -57.33333,25.8 -57.33333,57.33333c0,31.53333 25.8,57.33333 57.33333,57.33333c31.53333,0 57.33333,-25.8 57.33333,-57.33333c0,-31.53333 -25.8,-57.33333 -57.33333,-57.33333z"></path></g><path d="" fill="none" >
              </path></g></g></svg></div>
          </Button>
        </OverlayTrigger>
      </div >
    );
  }
}

export default Legend;

