import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./views/HomePage";
import { AnxietyGamePage } from "./views/AnxietyGamePage";
import { AnxietyInfoPage } from "./views/AnxietyInfoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jogodaansiedade" element={<AnxietyGamePage />} />
        <Route
          path="/informacoessobreansiedade"
          element={<AnxietyInfoPage />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
