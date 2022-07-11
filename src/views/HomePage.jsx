import { SquareButton } from "../components/buttons/SquareButton";
import { Logo } from "../components/Logo";
import "../css/homePage.modules.css"

import ansiedade from "../images/ansiedade.png"
import depressao from "../images/depressao.png"

export function HomePage() {
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
          src={depressao}
          imgAltLabel="homem com várias caixas de dialogo envolta. Os dialogos representam muitos assuntos"
          label="Descobrindo a depressão"
        />
      </section>
    </main>
  );
}