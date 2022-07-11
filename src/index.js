import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/global.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AnxietyGamePage } from "./views/AnxietyGamePage";
import { AnxietyInfoPage } from "./views/AnxietyInfoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jogodaansiedade" element={<AnxietyGamePage />} />
        <Route
          path="/informacoessobreansiedade"
          element={<AnxietyInfoPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
