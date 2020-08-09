import React from "react"
import gsap from "gsap"

interface Params {
  buttonRef: HTMLButtonElement | null;
}

const useMoveIndicator = ({ buttonRef }: Params) => {
  const [nextQuestion, setNextQuestion] = React.useState(1)
  React.useEffect(() => {
    const markCorrect = () => {
      gsap
        .timeline({ defaults: { ease: "back.out(1.8)", duration: 0.5 } })
        .set(`#correct-icon-${nextQuestion - 1}`, {
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
          `#correct-icon-${nextQuestion - 1}`,
          {
            scale: 1,
          },
          "<"
        )
        .fromTo(
          `.correct-line-${nextQuestion - 1}`,
          { drawSVG: "75% 100%" },
          { drawSVG: "0 0", opacity: 0, ease: "power4.out" },
          "-=.4"
        )
    }
    if (nextQuestion > 1) {
      gsap
        .timeline()
        .to("#indicator", {
          motionPath: {
            path: `#path-${nextQuestion - 1}`,
            align: `#path-${nextQuestion - 1}`,
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
              path: `#path-${nextQuestion - 1}`,
              align: `#path-${nextQuestion - 1}`,
              alignOrigin: [0.5, 0.5],
              start: 0,
              end: 1,
            },
            duration: 0.5,
            ease: "power4.inOut",
            onComplete: markCorrect
          },
          "<"
        )
    }
  }, [buttonRef, nextQuestion])
  return {setNextQuestion, nextQuestion}
}

export default useMoveIndicator
