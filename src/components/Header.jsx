import { MdArrowBack } from "react-icons/md"
import { Link } from "react-router-dom"

export function Header({backTo, backButton = true}) {
  return (
    <header>
      <section className="header-container">
        {backButton && <Link to={backTo}>
          <MdArrowBack size="48" color="white" />
        </Link>}
      </section>
    </header>
  )
}