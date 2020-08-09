/** @jsx jsx */
import { AnimatePresence, motion } from "framer-motion"
import { css, jsx } from "@emotion/core"
import { GoPrimitiveDot } from "react-icons/go"

import { colors, buttonNoFocus, buttonFocus } from "../../styles/theme"
import { Answer } from "../../data/questions"

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
  console.log("QuestionText -> isStart", isStart)
  console.log("QuestionText -> nextQuestion", nextQuestion)
  return (
    <AnimatePresence>
      {isStart && id === nextQuestion && (
        <motion.div
          id={`question-${id}`}
          initial={{
            opacity: 0,
          }}
          exit={{
            visibility: "hidden",
            transition: { delay: 0.5 },
          }}
        >
          <h3
            css={css`
              font-size: 32px;
              font-weight: 300;
              text-align: left;
              margin: 0;
              margin-bottom: 24px;
            `}
          >
            {question}
          </h3>
          {answers.map((a) => (
            <div
              css={css`
                display: flex;
              `}
            >
              <div
                css={css`
                  font-size: 16px;
                  font-weight: 500;

                  align-self: flex-start;

                  color: ${colors.bgRound};

                  margin-top: 2px;
                  margin-right: 8px;
                  position: relative;
                `}
              >
                <span>
                  <GoPrimitiveDot size={32} color={colors.accent} />
                </span>
                {a.selector}
              </div>
              <p
                id="intro"
                css={css`
                  margin: 0;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 1.7;
                  text-align: left;
                  margin-bottom: 8px;
                `}
              >
                {a.text}
              </p>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default QuestionText
