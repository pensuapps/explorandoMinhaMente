import { useEffect } from "react";
import { SquareButton } from "../components/buttons/SquareButton";
import { Logo } from "../components/Logo";
import "../css/homePage.modules.css";

import ansiedade from "../images/ansiedade.png";
import depressao from "../images/depressao.png";
import bullying from "../images/bullying.png";

import ReactGA from "react-ga";

export function HomePage() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <main>
      <Logo />

      <section className="buttons-container">
        <SquareButton
          path="https://pensu-descobrindoansiedade.web.app/"
          src={ansiedade}
          imgAltLabel="homem com várias caixas de dialogo envolta. Os dialogos representam muitos assuntos"
          label="Descobrindo a ansiedade"
        />
        <SquareButton
          path="https://pensu-descobrindoadepressao.web.app"
          src={depressao}
          imgAltLabel="homem com várias caixas de dialogo envolta. Os dialogos representam muitos assuntos"
          label="Descobrindo a depressão"
        />
        <SquareButton
          path="https://pensu-descobrindobullying.web.app"
          src={bullying}
          label="Descobrindo o bullying"
        />
      </section>
    </main>
  );
}
