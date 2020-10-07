import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import "reactjs-popup/dist/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
