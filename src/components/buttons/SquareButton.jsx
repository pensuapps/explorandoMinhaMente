import "../../css/squareButton.modules.css"

import { Link, } from "react-router-dom";

export function SquareButton({ src, imgAltLabel, label, to = "" }) {
  return (
    <Link to={to}>
      <button className="square-button">
        <img src={src} alt={imgAltLabel} />
        <h3>{label}</h3>
      </button>
    </Link>
  )
}