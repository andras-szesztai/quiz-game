/** @jsx jsx */
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion"
import { css, jsx } from "@emotion/core"
import chroma from "chroma-js"

import { colors, buttonNoFocus, buttonFocus } from "../../styles/theme"
import { Answer } from "../../data/questions"
import Paragraph from "../Paragraph/Paragraph"
import React from "react"

interface Props {
  id: number
  nextQuestion: number
  isStart: boolean
  question: string
  answers: Answer[]
}

const QuestionText = ({
  id,
  nextQuestion,
  isStart,
  question,
  answers,
}: Props) => {
  const [position, setPosition] = React.useState(0)

  return (
    <AnimatePresence>
      {isStart && id === nextQuestion && (
        <motion.div
          id={`question-${id}`}
          initial={{
            opacity: 1,
          }}
          exit={{
            visibility: "hidden",
            transition: { delay: 0.5 },
          }}
        >
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
                  cursor: pointer;
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
                onMouseOver={() => {
                  if (position !== i) {
                    setPosition(i)
                  }
                }}
              >
                {position === i && (
                  <motion.div
                    css={css`
                      position: fixed;
                      width: 32px;
                      height: 32px;
                      border-radius: 32px;
                      background-color: red;
                      background-color: ${chroma(colors.accent)
                        .alpha(0.25)
                        .hex()};
                      border: 1px solid ${colors.accent};
                      top: -4px;
                      left: 3px;
                      position: absolute;
                    `}
                    layoutId="outline"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                <div
                  css={css`
                    font-size: 16px;
                    font-weight: 500;

                    align-self: flex-start;

                    color: ${colors.bgRound};
                    background-color: ${colors.accent};
                    width: 16px;
                    min-width: 16px;
                    height: 16px;
                    border-radius: 16px;

                    margin: 5px 12px 0 12px;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `}
                />
                <Paragraph text={a.text} isLeftAlign />
              </button>
            ))}
          </AnimateSharedLayout>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuestionText
