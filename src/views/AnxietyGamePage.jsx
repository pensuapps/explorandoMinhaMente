import "../css/anxietyGamePage.modules.css"
import { MdOutlineCheck, MdOutlineClose, MdThumbUp, MdThumbDown } from "react-icons/md"

import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { useAnxietyQuestions } from "../hooks/anxietyQuestionary"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../hooks/user"
import { useEffect, useState } from "react"

export function AnxietyGamePage() {
  const navigate = useNavigate()

  const { isLastQuestion, incrementCurrentIndex, currentQuestion } = useAnxietyQuestions()
  const { user, addScore } = useUser()

  const [showResult, setShowResult] = useState(false)
  const [showThanksMsg, setshowThanksMsg] = useState(false)

  useEffect(() => {
    user.score === 6 && setShowResult(true)
  }, [user.score])

  function answareQuestion({ answareScore }) {
    if (userHasAnxiety()) {
      return
    }

    if (userDeniedParticipating(answareScore)) {
      navigate("/")
      return
    }

    if (userIsDoingTheQuestionary() && !!answareScore) {
      addScore(answareScore)
      console.log(user.score)
    }

    if (isLastQuestion) {
      setShowResult(true)
      return
    }

    incrementCurrentIndex()
  }

  function handleClickThumb() {
    showThanksMsg && navigate("/")
    !showThanksMsg && setshowThanksMsg(true)
  }

  const userHasAnxiety = () => user.score === 6
  const userDeniedParticipating = (answareScore) => currentQuestion.classification === "startText" && answareScore === 0
  const userIsDoingTheQuestionary = () => currentQuestion.classification === "question"

  return (
    <>
      <Header backTo={"/"} />
      <main>
        {!showResult ?
          <>
            <section className="game-area">
              <Banner img={require(`../images/anxietyGame/${currentQuestion.img}.png`)} bgColor={currentQuestion.bg} />

              <h2 className="question-text">{currentQuestion.text}</h2>

              <div className="action-buttons-container">
                {true ?
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
            </section>
          </> : <>
            <section className="game-area">
              <Banner img={require(`../images/anxietyGame/kidok.png`)} bgColor={currentQuestion.bg} />

              {showThanksMsg ?
                <h2 className="question-result-text">
                  Ficamos felizes por ter respondido tudo! Obrigado !
                </h2>
                :
                user.score === 6 ?
                  <h2 className="question-result-text">
                    Você deve conversar com os professores e seus pais sobre como se sente e o que acontece na escola.
                  </h2> :
                  <h2 className="question-result-text">
                    Parece que você anda se divertindo e aprendendo coisas boas na escola, continue assim!
                  </h2>
              }

              <div className="action-buttons-container">
                <button className="button-confirm rounded-icon-button" onClick={handleClickThumb}>
                  <MdThumbUp size="48" color="white" />
                </button>

                <button className="button-reject rounded-icon-button" onClick={handleClickThumb}>
                  <MdThumbDown size="48" color="white" />
                </button>
              </div>

              <h4 className="know-more"><Link to="/informacoessobreansiedade">Ficou curioso? Clique aqui</Link></h4>
            </section>
          </>}
      </main>
    </>
  )
}