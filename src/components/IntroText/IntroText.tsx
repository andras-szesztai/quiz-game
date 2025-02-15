/** @jsx jsx */
import { AnimatePresence, motion } from "framer-motion"
import { css, jsx } from "@emotion/core"
import chroma from "chroma-js"

import { colors, buttonNoFocus, buttonFocus } from "../../styles/theme"
import Button from "../Button/Button"

interface Props {
  isIntro: boolean
  currentInput: string
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
  isMobile: boolean
}

const IntroText = ({
  isIntro,
  currentInput,
  setCurrentQuestion,
  isMobile,
}: Props) => {
  return (
    <AnimatePresence>
      {isIntro && (
        <motion.div
          id="intro-container"
          initial={{
            display: "none",
          }}
          animate={{
            display: "block",
          }}
          exit={{
            display: "none",
            transition: { delay: 0.5 },
          }}
          css={css`
            background-color: ${isMobile
              ? chroma(colors.bgRound).alpha(0.5).hex()
              : "transparent"};
            border-radius: 4px;
          `}
        >
          <h1
            id="title"
            className="intro-element"
            css={css`
              font-weight: 200 !important;
              margin: 0;
              font-size: ${isMobile ? 32 : 48}px;
              line-height: 1.2;
              margin-bottom: 16px;
            `}
          >
            The life of women and men in Europe
          </h1>
          <p
            id="intro"
            className="intro-element"
            css={css`
              margin: 0;
              font-size: 16px;
              font-weight: 500;
              line-height: ${isMobile ? 1.6 : 1.7};
            `}
          >
            This quiz is a redesigned version of the introduction to the digital
            publication{" "}
            <a
              href="https://ec.europa.eu/eurostat/cache/infographs/womenmen/bloc-1a.html?lang=en"
              rel="noopener noreferrer"
              target="_blank"
              css={css`
                color: ${colors.accent};
                ${currentInput === "mouse" ? buttonNoFocus : buttonFocus}
              `}
            >
              The life of women and men in Europe – a statistical portrait
            </a>
            . Each of the following questions is related to one of the 12 parts
            of the publication.
          </p>
          <div
            id="intro-button"
            className="intro-element"
            css={css`
              margin-top: 16px;
            `}
          >
            <Button
              text="START"
              currentInput={currentInput}
              handleClick={() => setCurrentQuestion(1)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroText
