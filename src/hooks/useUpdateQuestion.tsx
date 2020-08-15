import React from "react"
import gsap from "gsap"
import { usePrevious } from "react-use"

interface Params {
  currentQuestion: number
  isAnswerFalse: boolean
  setIsAnswerFalse: React.Dispatch<React.SetStateAction<boolean>>
  isAnswerTrue: boolean
  setIsAnswerTrue: React.Dispatch<React.SetStateAction<boolean>>
}

const useUpdateQuestion = ({
  currentQuestion,
  isAnswerTrue,
  isAnswerFalse,
  setIsAnswerFalse,
  setIsAnswerTrue,
}: Params) => {
  const prevCurrentQuestion = usePrevious(currentQuestion)
  React.useEffect(() => {
    if (!!currentQuestion && prevCurrentQuestion !== currentQuestion) {
      const outElement =
        currentQuestion === 1
          ? "#intro-container"
          : `#question-${prevCurrentQuestion}`
      gsap
        .timeline({ defaults: { ease: "back.out(1.9)", duration: 0.5 } })
        .set(`#question-${currentQuestion}`, { opacity: 0, y: 100 })
        .to(outElement, {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "back.in(1.8)",
        })
        .to(
          `#question-${currentQuestion}`,
          {
            opacity: 1,
            y: 0,
            onComplete: () => {
              if (isAnswerTrue) setIsAnswerTrue(false)
              if (isAnswerFalse) setIsAnswerFalse(false)
            },
          },
          "+=.5"
        )
    }
  }, [
    currentQuestion,
    isAnswerFalse,
    isAnswerTrue,
    prevCurrentQuestion,
    setIsAnswerFalse,
    setIsAnswerTrue,
  ])
}

export default useUpdateQuestion
