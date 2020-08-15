/** @jsx jsx */
import React from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { MotionPathHelper } from "gsap/MotionPathHelper"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { jsx, css } from "@emotion/core"
import chroma from "chroma-js"
import useWhatInput from "react-use-what-input"

import {
  CorrectIcon,
  FalseIcon,
  Stars,
  IntroText,
  QuestionText,
  OutroText,
  Disclaimer,
} from "./components"

import {
  useMoveIndicator,
  useInitialize,
  useUpdateQuestion,
  useDeviceType,
} from "./hooks"

import { paths, questions } from "./data"

import "./App.css"
import { buttonFocus, buttonNoFocus, colors } from "./styles/theme"

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(MorphSVGPlugin)
gsap.registerPlugin(MotionPathHelper)
gsap.registerPlugin(DrawSVGPlugin)

function App() {
  const [currentInput] = useWhatInput()
  const device = useDeviceType()

  const svgDims = 750

  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const correctAnswers = React.useRef(0)

  const [isAnswerFalse, setIsAnswerFalse] = React.useState(false)
  const [isAnswerTrue, setIsAnswerTrue] = React.useState(false)

  React.useEffect(() => {
    if (isAnswerTrue) {
      correctAnswers.current = correctAnswers.current + 1
    }
  }, [isAnswerTrue])

  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [nextQuestion, setNextQuestion] = React.useState(1)

  const isInitialized = useInitialize(buttonRef.current)
  useMoveIndicator({
    buttonRef: buttonRef.current,
    isAnswerTrue,
    isAnswerFalse,
    nextQuestion,
    currentQuestion,
  })
  useUpdateQuestion({
    currentQuestion,
    isAnswerFalse,
    setIsAnswerFalse,
    isAnswerTrue,
    setIsAnswerTrue,
  })

  return (
    <div className="App">
      {device === "mobile" && <Disclaimer />}
      {device !== "mobile" && (
        <header className="App-header">
          <div
            css={css`
              position: relative;
            `}
          >
            <button
              ref={buttonRef}
              css={css`
                position: absolute;
                left: calc(50% - 50px);
                top: 60px;

                width: 100px;
                height: 100px;
                border: none;
                border-radius: 4px;
                background: transparent;
                cursor: ${isAnswerFalse || isAnswerTrue || currentQuestion === 0
                  ? "pointer"
                  : "default"};
                ${currentInput === "mouse" ? buttonNoFocus : buttonFocus}
              `}
              onClick={() => {
                if (isInitialized && currentQuestion !== nextQuestion) {
                  setCurrentQuestion(nextQuestion)
                }
              }}
            />
            <div
              css={css`
                font-family: "Montserrat", sans-serif !important;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                width: 50%;
                height: auto;

                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                user-select: none;
              `}
            >
              <IntroText
                isIntro={currentQuestion === 0}
                currentInput={currentInput}
                setCurrentQuestion={setCurrentQuestion}
              />
              {questions.map((q) => (
                <QuestionText
                  key={q.number}
                  id={q.number}
                  url={q.url}
                  currentQuestion={currentQuestion}
                  question={q.question}
                  answers={q.answers}
                  isInteractive={!isAnswerFalse && !isAnswerTrue}
                  isAnswerFalse={isAnswerFalse}
                  isAnswerTrue={isAnswerTrue}
                  handleClick={(isTrue) => {
                    if (isTrue) {
                      setIsAnswerTrue(true)
                    } else {
                      setIsAnswerFalse(true)
                    }
                    setNextQuestion((prev) => prev + 1)
                  }}
                  currentInput={currentInput}
                  setCurrentQuestion={setCurrentQuestion}
                  nextQuestion={nextQuestion}
                />
              ))}
              <OutroText
                currentQuestion={currentQuestion}
                currentInput={currentInput}
                correctAnswers={correctAnswers.current}
              />
            </div>
            <svg
              x="0px"
              y="0px"
              width={`${svgDims}px`}
              height={`${svgDims}px`}
              viewBox="0 0 434.9 434.9"
            >
              {questions.map((q, i) => (
                <React.Fragment key={q.number}>
                  <CorrectIcon id={i + 1} />
                  <FalseIcon id={i + 1} />
                </React.Fragment>
              ))}
              <path
                id="indicator"
                fill={chroma(colors.accent).alpha(0.2).hex()}
                strokeWidth={1}
                stroke={colors.accent}
                strokeLinecap="round"
                d="M238.2,53.3c0,11.5-9.3,20.8-20.8,20.8c-11.5,0-20.8-9.3-20.8-20.8s9.3-20.8,20.8-20.8
                C228.9,32.5,238.2,41.8,238.2,53.3z"
              />
              <Stars />
              {paths.map((p, i) => (
                <path
                  key={p.d}
                  id={`path-${i + 1}`}
                  fill="none"
                  // stroke="#333"
                  d={p.d}
                />
              ))}
            </svg>
          </div>
        </header>
      )}
    </div>
  )
}

export default App
