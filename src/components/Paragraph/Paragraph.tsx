import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

interface Props {
  isLeftAlign?: boolean
  text: string
}

const Paragraph = ({ isLeftAlign, text }: Props) => {
  return (
    <p
      id="intro"
      css={css`
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.7;
        text-align: ${isLeftAlign ? "left" : "center"};
        margin-bottom: 8px;
      `}
    >
      {text}
    </p>
  )
}

export default Paragraph
