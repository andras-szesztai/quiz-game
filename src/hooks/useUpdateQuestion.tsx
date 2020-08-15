import React from "react"
import gsap from "gsap"
import { usePrevious } from "react-use"

interface Params {
  currentQuestion: number
  nextQuestion: number
}

const useUpdateQuestion = ({ currentQuestion, nextQuestion }: Params) => {
  const prevCurrentQuestion = usePrevious(currentQuestion)
  React.useEffect(() => {
    if (!!currentQuestion && prevCurrentQuestion !== currentQuestion) {
      gsap
        .timeline({ defaults: { ease: "back.out(1.9)", duration: 0.5 } })
        .to("#intro-container", {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "back.in(1.8)",
        })
        .set(`#question-${nextQuestion}`, { opacity: 0, y: 100 })
        .to(`#question-${nextQuestion}`, { opacity: 1, y: 0 }, "+=.5")
    }
  }, [currentQuestion, nextQuestion, prevCurrentQuestion])
}

export default useUpdateQuestion
