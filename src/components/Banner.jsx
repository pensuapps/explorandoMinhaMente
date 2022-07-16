import "../css/banner.modules.css"

export function Banner({ img, bgColor = "", flip }) {
  return (
    <div className={`banner ${bgColor} ${flip ? "flipImageAnimation" : ""}`}>
      <img src={img} alt="criança pensando" />
    </div>
  )
}