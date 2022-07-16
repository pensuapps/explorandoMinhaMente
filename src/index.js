import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/global.css";
import reportWebVitals from "./reportWebVitals";
import ReactGA from "react-ga"

ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACK_ID)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
