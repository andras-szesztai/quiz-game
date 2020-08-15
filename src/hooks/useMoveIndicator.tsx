import React from "react"
import gsap from "gsap"
import { colors } from "../styles/theme"

interface Params {
  buttonRef: HTMLButtonElement | null
  isAnswerTrue: boolean
  isAnswerFalse: boolean
  nextQuestion: number
  currentQuestion: number
}

const useMoveIndicator = ({
  buttonRef,
  isAnswerTrue,
  isAnswerFalse,
  nextQuestion,
  currentQuestion,
}: Params) => {
  const didLastRun = React.useRef(false)
  React.useEffect(() => {
    const swapMark = () => {
      const moveTl = gsap.timeline({
        defaults: { ease: "back.out(1.8)", duration: 0.5 },
      })
      const text = isAnswerTrue ? "correct" : "false"
      moveTl
        .set(`#${text}-icon-${nextQuestion - 1}`, {
          motionPath: {
            align: `#path-${nextQuestion - 1}`,
            path: `#path-${nextQuestion - 1}`,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 0,
          },
        })
        .to(`#star-${nextQuestion - 1}`, {
          scale: 0,
          opacity: 0,
        })
        .to(
          `#${text}-icon-${nextQuestion - 1}`,
          {
            scale: 1,
          },
          "<"
        )
      if (isAnswerTrue) {
        moveTl.fromTo(
          `.${text}-line-${nextQuestion - 1}`,
          { drawSVG: "75% 100%" },
          { drawSVG: "0 0", opacity: 0, ease: "power4.out" },
          "-=.4"
        )
      }
    }
    if (
      nextQuestion !== 13
        ? isAnswerTrue || isAnswerFalse
        : currentQuestion === nextQuestion && !didLastRun.current
    ) {
      if (nextQuestion === 13) didLastRun.current = true
      const tl = gsap.timeline()

      tl.to("#indicator", {
        motionPath: {
          path: `#path-${nextQuestion - 1}`,
          align: `#path-${nextQuestion - 1}`,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 1,
        },
        duration: 0.5,
        delay: 3,
        ease: "power4.inOut",
      })
        .to(
          "#indicator",
          {
            keyframes: [
              {
                morphSVG:
                  "M246.9,53.2c0,11.5-9.3,15.1-20.7,15.1s-38.3-2.7-38.3-14.2s26.8-15.9,38.3-15.9S246.9,41.7,246.9,53.2z",
                duration: 0.4,
              },
              {
                morphSVG:
                  "M238.2,53.3c0,11.5-9.3,20.8-20.8,20.8c-11.5,0-20.8-9.3-20.8-20.8s9.3-20.8,20.8-20.8 C228.9,32.5,238.2,41.8,238.2,53.3z",
                duration: 0.2,
                ease: "elastic.out(1, .8)",
              },
            ],
          },
          "<"
        )
        .to(
          buttonRef,
          {
            motionPath: {
              path: `#path-${nextQuestion - 1}`,
              align: `#path-${nextQuestion - 1}`,
              alignOrigin: [0.5, 0.5],
              start: 0,
              end: 1,
            },
            duration: 0.5,
            ease: "power4.inOut",
            onComplete: swapMark,
          },
          "<"
        )
      if (nextQuestion === 13) {
        tl.to("#indicator", {
          morphSVG:
            "M229.5,49.6l-7.9-1.1l-3.6-7.3c-0.2-0.3-0.6-0.5-0.9-0.3c-0.1,0.1-0.2,0.2-0.3,0.3l-3.7,7.3l-7.9,1.1c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.2,0.1,0.3,0.2,0.5l5.7,5.6l-1.4,8c-0.1,0.4,0.2,0.8,0.6,0.8c0.2,0,0.3,0,0.5-0.1l7.1-3.8 l7.2,3.8c0.4,0.2,0.8,0,1-0.3c0.1-0.1,0.1-0.3,0.1-0.4l-1.4-8l5.7-5.6c0.3-0.3,0.3-0.8,0-1.1C229.9,49.7,229.7,49.6,229.5,49.6z",
          fill: colors.accent,
          rotate: 72,
          scale: 2,
          duration: 0.5,
          ease: "elastic.out(1, .8)",
        })
      }
    }
  }, [isAnswerTrue, isAnswerFalse, buttonRef, nextQuestion, currentQuestion])
}

export default useMoveIndicator
