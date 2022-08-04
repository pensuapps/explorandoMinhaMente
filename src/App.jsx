import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./views/HomePage";
import { AnxietyGamePage } from "./views/AnxietyGamePage";
import { DepressionGamePage } from "./views/DepressionGamePage";
import { AnxietyInfoPage } from "./views/AnxietyInfoPage";
import { DepressionInfoPage } from "./views/DepressionInfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jogodaansiedade" element={<AnxietyGamePage />} />
        <Route path="/jogodadepressao" element={<DepressionGamePage />} />
        <Route
          path="/informacoessobreansiedade"
          element={<AnxietyInfoPage />}
        />
        <Route
          path="/informacoessobreDepressao"
          element={<DepressionInfoPage />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
