import "../../css/squareButton.modules.css";

export function SquareButton({ path, src, imgAltLabel, label, to = "" }) {
  return (
    <a href={path} target="_blank" rel="noreferrer">
      <button className="square-button">
        <img src={src} alt={imgAltLabel} />
        <h3>{label}</h3>
      </button>
    </a>
  );
}
