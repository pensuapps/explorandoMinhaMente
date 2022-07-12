import "../css/anxietyGamePage.modules.css"
import { MdOutlineCheck, MdOutlineClose, MdThumbUp, MdThumbDown } from "react-icons/md"

import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { useAnxietyQuestions } from "../hooks/anxietyQuestionary"
import { Link, useNavigate } from "react-router-dom"

export function AnxietyGamePage() {
  const navigate = useNavigate()
  const { isLastQuestion, incrementCurrentIndex, currentQuestion } = useAnxietyQuestions()

  function answareQuestion({ answareScore }) {
    if (currentQuestion.classification === "startText" && answareScore === 0) {
      navigate("/")
    }
    incrementCurrentIndex()
  }

  return (
    <>
      <Header backTo={"/"} />
      <main>
        <section className="game-area">
          <Banner img={require(`../images/anxietyGame/${currentQuestion.img}.png`)} bgColor={currentQuestion.bg} />

          <h2 className="question-text">{currentQuestion.text}</h2>

          <div className="action-buttons-container">
            {!isLastQuestion ?
              <>
                <button className="button-confirm rounded-icon-button" onClick={() => answareQuestion({ answareScore: 1 })}>
                  <MdOutlineCheck size="48" color="white" />
                </button>

                <button className="button-reject rounded-icon-button" onClick={() => answareQuestion({ answareScore: 0 })}>
                  <MdOutlineClose size="48" color="white" />
                </button>
              </> : <>
                <button className="button-confirm rounded-icon-button">
                  <MdThumbUp size="48" color="white" />
                </button>

                <button className="button-reject rounded-icon-button">
                  <MdThumbDown size="48" color="white" />
                </button>
              </>
            }
          </div>

          {isLastQuestion && <h4 className="know-more"><Link to="/informacoessobreansiedade">Ficou curioso? Clique aqui</Link></h4>}
        </section>
      </main>
    </>
  )
}