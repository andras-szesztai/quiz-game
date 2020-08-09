/** @jsx jsx */
import { AnimatePresence, motion } from "framer-motion"
import { css, jsx } from "@emotion/core"

import { colors, buttonNoFocus, buttonFocus } from "../../styles/theme"

interface Props {
  isStart: boolean,
  currentInput: string
}

const IntroText = ({isStart, currentInput}: Props) => {
  return (
    <AnimatePresence>
      {!isStart && (
        <motion.div
          id="intro-container"
          exit={{
            visibility: "hidden",
            transition: { delay: .5 },
          }}
        >
          <h1
            id="title"
            css={css`
              font-weight: 200 !important;
              margin: 0;
              font-size: 48px;
              line-height: 1.3;
              margin-bottom: 24px;
            `}
          >
            The life of women and men in Europe
          </h1>
          <p
            id="intro"
            css={css`
              margin: 0;
              font-size: 16px;
              font-weight: 500;
              line-height: 1.7;
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroText
