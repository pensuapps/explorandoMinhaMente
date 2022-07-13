import "../css/anxietyInfoPage.modules.css"

import kidthinking from "../images/anxietyGame/kidthinking-anxietyinfo.png"

import { MdThumbUp, MdThumbDown, MdLightbulb } from "react-icons/md"
import { Header } from "../components/Header"
import { useState } from "react"

export function AnxietyInfoPage() {
  const [showButtons, setShowButtons] = useState(true)
  
  const handleClickThumb = () => {
    setShowButtons(false)
  }

  return (
    <>
      <Header backTo="/" />
      <main>
        <div className="banner-info">
          <img
            src={kidthinking}
            alt="imagem de uma criança apoiada na mesa com a mão na cabeça pensando, junto com várias imagens de ponto de interrogação e lâmpada" />
        </div>

        <article className="about-anxiety">
          A ansiedade acontece quando a gente fica nervoso esperando que algo aconteça e
          nem sempre essa coisa acontece. A gente não consegue controlar isso totalmente,
          mas podemos sentir que está acontecendo, e tentar ficar calmo e tranquilo,
          respirando fundo e se concentrando no que está acontecendo neste momento, agora!
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