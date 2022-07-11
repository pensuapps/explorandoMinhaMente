import "../css/banner.modules.css"

export function Banner({ img, bgColor = "" }) {
  return (
    <div className={`banner ${bgColor}`}>
      <img src={img} alt="criança pensando" />
    </div>
  )
}