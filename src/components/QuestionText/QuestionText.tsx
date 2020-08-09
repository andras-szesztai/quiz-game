/** @jsx jsx */
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion"
import { css, jsx } from "@emotion/core"
import chroma from "chroma-js"

import { colors, buttonNoFocus } from "../../styles/theme"
import { Answer } from "../../data/questions"
import Paragraph from "../Paragraph/Paragraph"
import React from "react"

interface Props {
  id: number
  nextQuestion: number
  isStart: boolean
  question: string
  answers: Answer[]
  handleClick: (isTrue: boolean) => void
  isInteractive: boolean
  isAnswerFalse: boolean
  isAnswerTrue: boolean
  url: string
}

const QuestionText = ({
  id,
  nextQuestion,
  isStart,
  question,
  url,
  answers,
  handleClick,
  isInteractive,
  isAnswerFalse,
  isAnswerTrue,
}: Props) => {
  const [position, setPosition] = React.useState(0)

  const [selectedAnswer, setSelectedAnswer] = React.useState(-1)

  const getColor = (i: number) => {
    if (selectedAnswer === i) {
      if (isAnswerTrue) {
        return colors.correctDark
      }
      if (isAnswerFalse) {
        return colors.falseDark
      }
    }
    return colors.accent
  }

  // TODO fix this
  return (
    <AnimatePresence>
      {isStart && id === nextQuestion && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          exit={{
            visibility: "hidden",
            transition: { delay: 0.5 },
          }}
          css={css`
            margin-bottom: 8px;
          `}
        >
          <div id={`question-${id}`}>
            <h3
              css={css`
                font-size: 24px;
                font-weight: 300;
                text-align: left;
                margin: 0;
                margin-bottom: 24px;
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
                  {position === i && isInteractive && (
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
                      backgroundColor: getColor(i),
                    }}
                  />
                  <Paragraph text={a.text} isLeftAlign />
                </button>
              ))}
            </AnimateSharedLayout>
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <span
              id="result"
              css={css`
                align-self: flex-start;
                font-size: 16px;
                font-weight: 500;
                border-radius: 4px;
                padding: 8px 32px;
                background: ${colors.false};
                color: ${colors.falseDark};
              `}
            >
              INCORRECT
            </span>
            <a
              id="more"
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
              Go to publication!
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuestionText
