/** @jsx jsx */
import React from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { MotionPathHelper } from "gsap/MotionPathHelper"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
import { usePrevious } from "react-use"
import { jsx, css } from "@emotion/core"
import chroma from "chroma-js"
import useWhatInput from "react-use-what-input"
import random from "lodash/random"
import { AnimatePresence, motion } from "framer-motion"

import "./App.css"
import { buttonFocus, buttonNoFocus, colors } from "./styles/theme"
import { delays } from "./styles/animations"
import { useMoveIndicator, useInitialize } from "./hooks"
import { CorrectIcon, FalseIcon, Stars, IntroText } from "./components"
import { paths, questions } from "./data"
import { pulsate, stopPulsate } from "./utils"

const svgDims = 750

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(MorphSVGPlugin)
gsap.registerPlugin(MotionPathHelper)
gsap.registerPlugin(DrawSVGPlugin)

function App() {
  const [currentInput] = useWhatInput()
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const [isAnswerFalse, setIsAnswerFalse] = React.useState(false)
  const [isAnswerTrue, setIsAnswerTrue] = React.useState(false)

  const { setNextQuestion, nextQuestion } = useMoveIndicator({
    buttonRef: buttonRef.current,
    isAnswerTrue,
    isAnswerFalse,
  })

  const isInitialized = useInitialize(buttonRef.current)
  const [isStart, setIsStart] = React.useState(false)
  React.useEffect(() => {
    if (isStart) {
      gsap.to("#intro-container", {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "back.in(1.8)",
      })
    }
  }, [isStart])

  return (
    <div className="App">
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
              cursor: pointer;
              ${currentInput === "mouse" ? buttonNoFocus : buttonFocus}
            `}
            onClick={() => {
              if (isInitialized && !isStart) {
                stopPulsate()
                setIsStart(true)
              } else {
                if (isAnswerFalse || isAnswerTrue) {
                  setNextQuestion((prev) => prev + 1)
                  isAnswerTrue && setIsAnswerTrue(false)
                  isAnswerFalse && setIsAnswerFalse(false)
                }
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
              height: 50%;

              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              user-select: none;
            `}
          >
            <IntroText isStart={isStart} currentInput={currentInput} />
          </div>
          <svg
            x="0px"
            y="0px"
            width={`${svgDims}px`}
            height={`${svgDims}px`}
            viewBox="0 0 434.9 434.9"
          >
            <path
              id="background"
              fill="#577590"
              d="M423.8,434.6H11.1c-6,0-10.8-4.8-10.8-10.8V11.1c0-6,4.8-10.8,10.8-10.8h412.7
    c6,0,10.8,4.8,10.8,10.8v412.7C434.6,429.8,429.8,434.6,423.8,434.6z"
            />
            {questions.map((q, i) => (
              <React.Fragment key={q.number}>
                <CorrectIcon id={i + 1} />
                <FalseIcon id={i + 1} />
              </React.Fragment>
            ))}
            <path
              id="indicator"
              fill={chroma(colors.accent).alpha(0.25).hex()}
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
                //stroke="#333"
                d={p.d}
              />
            ))}
          </svg>
        </div>
      </header>
    </div>
  )
}

export default App
