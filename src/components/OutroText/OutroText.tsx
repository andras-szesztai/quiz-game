/** @jsx jsx */
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { css, jsx } from "@emotion/core"
import gsap from "gsap"
import CountUp from "react-countup"

import { colors, buttonNoFocus, buttonFocus } from "../../styles/theme"

interface Props {
  currentQuestion: number
  currentInput: string
}

const OutroText = ({ currentQuestion, currentInput }: Props) => {
  const isLast = currentQuestion === 13
  React.useEffect(() => {
    if (isLast) {
      gsap.timeline().to(`#outro-container`, {
        opacity: 1,
        y: 25,
        ease: "back.out(1.8)",
        duration: 0.5,
        delay: 2,
      })
    }
  }, [isLast])

  return (
    <AnimatePresence>
      {isLast && (
        <motion.div
          id="outro-container"
          initial={{
            display: "none",
          }}
          animate={{
            display: "block",
            transition: { delay: 0.5 },
          }}
          onAnimationStart={() => {
            gsap.set("#outro-container", { opacity: 0, y: 100 })
          }}
        >
          <p
            id="outro"
            css={css`
              font-weight: 300;
              margin: 0;
              font-size: 32px;
              line-height: 1.2;
              margin-bottom: 16px;
            `}
          >
            Your score is <CountUp start={0} end={12} delay={3} duration={1} />
            /12
          </p>
          <a
            href="https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-1a.html?lang=en"
            rel="noopener noreferrer"
            target="_blank"
            css={css`
              color: ${colors.accent};
              margin-top: 16px;
              font-size: 16px;
              ${currentInput === "mouse" ? buttonNoFocus : buttonFocus}
            `}
          >
            Go to publication
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default OutroText
