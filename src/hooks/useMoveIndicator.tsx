import React from "react"
import gsap from "gsap"

interface Params {
  buttonRef: HTMLButtonElement | null
  isAnswerTrue: boolean
  isAnswerFalse: boolean
  nextQuestion: number
}

const useMoveIndicator = ({
  buttonRef,
  isAnswerTrue,
  isAnswerFalse,
  nextQuestion,
}: Params) => {
  React.useEffect(() => {
    const swapMark = () => {
      const moveTl = gsap.timeline({
        defaults: { ease: "back.out(1.8)", duration: 0.5 },
      })
      const text = isAnswerTrue ? "correct" : "false"
      moveTl
        .set(`#${text}-icon-${nextQuestion}`, {
          motionPath: {
            align: `#path-${nextQuestion}`,
            path: `#path-${nextQuestion}`,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 0,
          },
        })
        .to(`#star-${nextQuestion}`, {
          scale: 0,
          opacity: 0,
        })
        .to(
          `#${text}-icon-${nextQuestion}`,
          {
            scale: 1,
          },
          "<"
        )
      if (isAnswerTrue) {
        moveTl.fromTo(
          `.${text}-line-${nextQuestion}`,
          { drawSVG: "75% 100%" },
          { drawSVG: "0 0", opacity: 0, ease: "power4.out" },
          "-=.4"
        )
      }
      // if (isAnswerFalse) {
      //   moveTl.fromTo(`#${text}-icon-${nextQuestion}`, {
      //     keyframes: [{ x: 10 }, { x: -10 }],
      //   })
      // }
    }
    if (isAnswerTrue || isAnswerFalse) {
      gsap
        .timeline()
        .to("#indicator", {
          motionPath: {
            path: `#path-${nextQuestion}`,
            align: `#path-${nextQuestion}`,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1,
          },
          duration: 0.5,
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
              path: `#path-${nextQuestion}`,
              align: `#path-${nextQuestion}`,
              alignOrigin: [0.5, 0.5],
              start: 0,
              end: 1,
            },
            duration: 0.5,
            ease: "power4.inOut",
            onComplete: () => {
              swapMark()
            },
          },
          "<"
        )
    }
  }, [isAnswerTrue, isAnswerFalse, buttonRef, nextQuestion])
}

export default useMoveIndicator
