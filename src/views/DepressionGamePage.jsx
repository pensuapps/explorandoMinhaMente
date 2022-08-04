import "../css/depressionGamePage.css"
import { MdOutlineCheck, MdOutlineClose, MdThumbUp, MdThumbDown, MdThumbsUpDown } from "react-icons/md"

import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { useDepressionQuestions } from "../hooks/depressionQuestionary"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../hooks/user"
import { useState } from "react"

export function DepressionGamePage() {
  const navigate = useNavigate()

  const { isLastQuestion, incrementCurrentIndex, currentQuestion } = useDepressionQuestions()
  const { user, addScore, saveScore } = useUser()

  const [showResult, setShowResult] = useState(false)
  const [showThanksMsg, setshowThanksMsg] = useState(false)

  const [flip, setFlip] = useState(false)
  const [blinkButton, setBlinkButton] = useState("default")
  const halfAnimationTime = 1000
  const totalAnimationTime = 2000

  function handleAnswareQuestion({ answareScore }) {

    if (userDeniedParticipating(answareScore)) {
      navigate("/")
      return
    }

    if (userIsDoingTheQuestionary() && !!answareScore) {
      addScore(answareScore)
    }

    if (isLastQuestion) {
      animateScreen(answareScore)
      setTimeout(() => {
        if (process.env.NODE_ENV === "production") {
          saveScore("depressão")
        }
        setShowResult(true)
      }, halfAnimationTime)
      return
    }

    animateScreen(answareScore)
    setTimeout(() => { incrementCurrentIndex() }, halfAnimationTime)

  }

  function handleClickThumb({ answareScore }) {
    blinkButtonAnimation(answareScore)
    showThanksMsg && navigate("/")
    !showThanksMsg && setshowThanksMsg(true)
  }

  function animateScreen(value) {
    doPictureAnimation()
    blinkButtonAnimation(value)
  }

  function doPictureAnimation() {
    setFlip(true)
    setTimeout(() => { setFlip(false) }, totalAnimationTime)
  }

  function blinkButtonAnimation(value) {
    setBlinkButton(value === 2 ? "confirm" : value === 1 ? "somethimes" : "reject")
    setTimeout(() => { setBlinkButton("default") }, totalAnimationTime)
  }

  const userDeniedParticipating = (answareScore) => currentQuestion.classification === "startText" && answareScore === 0
  const userIsDoingTheQuestionary = () => currentQuestion.classification === "question"

  return (
    <>
      <Header backTo={"/"} />
      <main className="depression">
        {!showResult ?
          <>
            <section className="game-area">
              <Banner img={require(`../images/depressionGame/${currentQuestion.img}.png`)} bgColor={currentQuestion.bg} flip={flip} />

              <h2 className="question-text">{currentQuestion.text}</h2>

              <div className="action-buttons-container">
                <div className="button-wrapper">
                  <button
                    className={`button-confirm rounded-icon-button ${blinkButton === "confirm" ? "blinkButton" : ""}`}
                    onClick={!flip ? () => handleAnswareQuestion({ answareScore: 2 }) : () => { }}
                  >
                    <MdOutlineCheck size="48" color="white" />
                  </button>
                  {currentQuestion.classification === "question" && <p>Sim</p>}
                </div>

                {currentQuestion.classification === "question" &&
                  <div className="button-wrapper">
                    <button
                      className={`button-sometimes rounded-icon-button ${blinkButton === "somethimes" ? "blinkButton" : ""}`}
                      onClick={!flip ? () => handleAnswareQuestion({ answareScore: 1 }) : () => { }}
                    >
                      <MdThumbsUpDown size="48" color="white" />
                    </button>
                    <p>As vezes</p>
                  </div>
                }
                <div className="button-wrapper">
                  <button
                    className={`button-reject rounded-icon-button ${blinkButton === "reject" ? "blinkButton" : ""}`}
                    onClick={!flip ? () => handleAnswareQuestion({ answareScore: 0 }) : () => { }}
                  >
                    <MdOutlineClose size="48" color="white" />
                  </button>
                  {currentQuestion.classification === "question" && <p>Não</p>}
                </div>
              </div>
            </section>
          </> : <>
            <section className="game-area">
              <Banner img={require(`../images/depressionGame/end.png`)} bgColor={currentQuestion.bg} flip={flip} />

              {showThanksMsg ?
                <h2 className="question-result-text">
                  Ficamos felizes por ter respondido tudo! Obrigado !
                </h2>
                :
                user.score >= 6 ?
                  <h2 className="question-result-text">
                    Você deve conversar com os professores e seus pais sobre como se sente e o que acontece na escola.
                  </h2> :
                  <h2 className="question-result-text">
                    Parece que você anda se divertindo e aprendendo coisas boas na escola, continue assim!
                  </h2>
              }

              <div className="action-buttons-container">
                <button
                  className={`button-confirm rounded-icon-button ${blinkButton === "confirm" ? "blinkButton" : ""}`}
                  onClick={() => handleClickThumb({ answareScore: 2 })}
                >
                  <MdThumbUp size="48" color="white" />
                </button>

                <button
                  className={`button-reject rounded-icon-button ${blinkButton === "reject" ? "blinkButton" : ""}`}
                  onClick={() => handleClickThumb({ answareScore: 0 })}
                >
                  <MdThumbDown size="48" color="white" />
                </button>
              </div>

              <h4 className="know-more"><Link to="/informacoessobredepressao">Ficou curioso? Clique aqui</Link></h4>
            </section>
          </>}
      </main>
    </>
  )
}