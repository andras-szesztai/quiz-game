/** @jsx jsx */
import React from "react"
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion"
import { css, jsx } from "@emotion/core"
import chroma from "chroma-js"
import gsap from "gsap"

import Button from "../Button/Button"
import Paragraph from "../Paragraph/Paragraph"

import { Answer } from "../../data/questions"

import { colors, buttonNoFocus } from "../../styles/theme"

interface Props {
  id: number
  currentQuestion: number
  question: string
  answers: Answer[]
  handleClick: (isTrue: boolean) => void
  isInteractive: boolean
  isAnswerFalse: boolean
  isAnswerTrue: boolean
  url: string
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
  nextQuestion: number
  currentInput: string
  isMobile: boolean
}

const QuestionText = ({
  id,
  currentQuestion,
  question,
  url,
  answers,
  handleClick,
  isInteractive,
  isAnswerFalse,
  isAnswerTrue,
  setCurrentQuestion,
  nextQuestion,
  currentInput,
  isMobile,
}: Props) => {
  const [position, setPosition] = React.useState(0)
  const [selectedAnswer, setSelectedAnswer] = React.useState(-1)

  const isCurrent = id === currentQuestion

  const getColor = (isTrue: boolean) => {
    if (selectedAnswer > -1) {
      if (isTrue) return colors.correct
      return colors.false
    }
    return colors.accent
  }

  React.useEffect(() => {
    if (isCurrent && selectedAnswer !== -1 && (isAnswerFalse || isAnswerTrue)) {
      gsap
        .timeline()
        .to(`#result-${id}`, {
          opacity: 1,
          y: 10,
          ease: "back.out(1.8)",
          duration: 0.5,
          delay: 0.5,
        })
        .to(`#result-${id}`, {
          opacity: 0,
          y: 100,
          ease: "back.in(1.8)",
          duration: 0.5,
          delay: 0.5,
        })
        .to(`#buttons-${id}`, {
          opacity: 1,
          y: 10,
          ease: "back.out(1.8)",
          duration: 0.5,
          delay: 0.5,
        })
    }
  }, [id, isAnswerFalse, isAnswerTrue, isCurrent, selectedAnswer])

  const shouldHide = React.useRef(true)

  const nextText = !isMobile ? "Next question" : "NEXT"
  const resultText = !isMobile ? "Show my results" : "RESULTS"

  return (
    <AnimatePresence>
      {id === currentQuestion && (
        <motion.div
          id={`question-${id}`}
          initial={{
            display: "none",
          }}
          animate={{
            display: "block",
            transition: { delay: 0.5 },
          }}
          onAnimationStart={() => {
            if (isCurrent && shouldHide.current) {
              gsap.set(`#result-${id}`, { opacity: 0, y: 100 })
              gsap.set(`#buttons-${id}`, { opacity: 0, y: 100 })
              shouldHide.current = false
            }
          }}
          exit={{
            display: "none",
            transition: { delay: 0.5 },
          }}
          css={css`
            margin-bottom: ${isMobile ? 0 : 8}px;
            position: relative;
            background-color: ${isMobile
              ? chroma(colors.bgRound).alpha(0.5).hex()
              : "transparent"};
            border-radius: 4px;
          `}
        >
          <div>
            <h3
              css={css`
                font-size: ${isMobile ? 20 : 24}px;
                font-weight: 300;
                text-align: left;
                margin: 0;
                margin-bottom: ${isMobile ? 16 : 24}px;
                position: relative;
              `}
            >
              {question}
            </h3>
            <AnimateSharedLayout>
              {answers.map((a, i) => (
                <button
                  key={a.text}
                  css={css`
                    display: flex;
                    cursor: ${isInteractive ? "pointer" : "default"};
                    font-family: "Montserrat", sans-serif !important;

                    border-radius: 4px;
                    border: none;
                    margin-bottom: 8px;
                    color: #fff;
                    background-color: transparent;
                    padding: 0;
                    ${buttonNoFocus}

                    position: relative;
                  `}
                  onFocus={() => {
                    if (isInteractive && position !== i) {
                      setPosition(i)
                    }
                  }}
                  onMouseOver={() => {
                    if (isInteractive && position !== i) {
                      setPosition(i)
                    }
                  }}
                  onClick={() => {
                    if (isInteractive) {
                      setSelectedAnswer(i)
                      handleClick(a.isTrue)
                    }
                  }}
                >
                  {position === i && (isInteractive || selectedAnswer > -1) && (
                    <motion.div
                      css={css`
                        position: fixed;
                        width: 24px;
                        height: 24px;
                        border-radius: 32px;
                        background-color: red;
                        background-color: ${chroma(colors.accent)
                          .alpha(0.25)
                          .hex()};
                        border: 1px solid ${colors.accent};
                        top: 0px;
                        left: 3px;
                        position: absolute;
                      `}
                      layoutId="outline"
                      transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 30,
                      }}
                    />
                  )}
                  <motion.div
                    css={css`
                      font-size: 16px;
                      font-weight: 500;

                      align-self: flex-start;

                      color: ${colors.bgRound};
                      width: 16px;
                      min-width: 16px;
                      height: 16px;
                      border-radius: 16px;

                      margin: 5px 12px 0 8px;

                      display: flex;
                      justify-content: center;
                      align-items: center;
                    `}
                    initial={{
                      backgroundColor: colors.accent,
                    }}
                    animate={{
                      backgroundColor: getColor(a.isTrue),
                    }}
                  />
                  <Paragraph text={a.text} isLeftAlign isMobile={isMobile} />
                </button>
              ))}
            </AnimateSharedLayout>
          </div>
          <div
            id={`result-${id}`}
            css={css`
              display: flex;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
            `}
          >
            <span
              css={css`
                align-self: flex-start;
                font-size: 16px;
                font-weight: 500;
                border-radius: 4px;
                padding: 8px 16px;
                background: ${isAnswerFalse ? colors.false : colors.correct};
                color: ${colors.bgRound};
              `}
            >
              {isAnswerFalse ? "INCORRECT" : "CORRECT"}
            </span>
          </div>
          <div
            id={`buttons-${id}`}
            css={css`
              display: flex;
              justify-content: center;
              position: absolute;
              width: 100%;
              left: 0%;
            `}
          >
            <Button
              text={nextQuestion !== 13 ? nextText : resultText}
              currentInput={currentInput}
              handleClick={() => setCurrentQuestion(nextQuestion)}
              withMargin
            />
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              css={css`
                margin: 0;
                margin-left: 16px;
                font-size: 16px;
                font-weight: 500;
                line-height: 1.7;
                text-align: left;
                color: ${colors.accent};
                display: flex;
                align-items: center;
              `}
            >
              Go to publication
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuestionText
