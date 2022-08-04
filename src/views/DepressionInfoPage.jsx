import "../css/depressionInfoPage.css"

import about from "../images/depressionGame/about.png"

import { MdThumbUp, MdThumbDown, MdLightbulb } from "react-icons/md"
import { Header } from "../components/Header"
import { useState } from "react"

export function DepressionInfoPage() {
  const [showButtons, setShowButtons] = useState(true)

  const handleClickThumb = () => {
    setShowButtons(false)
  }

  return (
    <>
      <Header backTo="/" />
      <main className="depression-info-page">
        <div className="banner-info">
          <img
            src={about}
            alt="imagem de uma criança apoiada na mesa com a mão na cabeça pensando, junto com várias imagens de ponto de interrogação e lâmpada" />
        </div>

        <article className="about-anxiety">
          É normal ficar triste às vezes, e isso é comum.
          Sempre converse com seus pais e professores,
          quando você ficar muito triste e tiver sentimentos ruins por vários dias.
          Querer brigar, fazer birra, ficar de mau humor, tristeza não é bom
        </article>

        {showButtons &&
          <div className="actions-buttons-container">
            <button className="legended-button" onClick={handleClickThumb}>
              <div className="button-confirm rounded-icon-button entendi">
                <MdThumbUp size="44" color="white" />
              </div>
              <p>Entendi</p>
            </button>

            <button className="legended-button" onClick={handleClickThumb}>
              <div className="button-reject rounded-icon-button interessante">
                <MdLightbulb size="44" color="white" />
              </div>
              <p>Interessante</p>
            </button>

            <button className="legended-button" onClick={handleClickThumb}>
              <div className="button-reject rounded-icon-button nao-entendi">
                <MdThumbDown size="44" color="white" />
              </div>
              <p>Não entendi</p>
            </button>
          </div>
        }
      </main>
    </>
  )
}