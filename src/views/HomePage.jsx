import { useEffect } from "react";
import { SquareButton } from "../components/buttons/SquareButton";
import { Logo } from "../components/Logo";
import "../css/homePage.modules.css"

import ansiedade from "../images/ansiedade.png"
import depressao from "../images/depressao.png"

import ReactGA from "react-ga"

export function HomePage() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])
  return (
    <main>
      <Logo />

      <section className="buttons-container">
        <SquareButton
          to="/jogodaansiedade"
          src={ansiedade}
          imgAltLabel="homem com várias caixas de dialogo envolta. Os dialogos representam muitos assuntos"
          label="Descobrindo a ansiedade"
        />
        <SquareButton
          to="/jogodadepressao"
          src={depressao}
          imgAltLabel="homem com várias caixas de dialogo envolta. Os dialogos representam muitos assuntos"
          label="Descobrindo a depressão"
        />
      </section>
    </main>
  );
}