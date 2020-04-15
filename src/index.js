import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.unregister();
