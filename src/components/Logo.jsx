import "../css/logo.modules.css"
import astronauta from "../images/astronauta.png";

export function Logo() {
  return (
    <div className="logo-container">
      <img
        src={astronauta}
        alt="astrounauta com uma bandeira na mão incliado como se estivesse flutuando"
      />
      <div>
        <h1 className="text-logo explorer">Explorando</h1>
        <h1 className="text-logo mind">Minha mente</h1>
      </div>
    </div>
  )
}