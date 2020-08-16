/** @jsx jsx */
import { css, jsx } from "@emotion/core"

interface Props {
  isLeftAlign?: boolean
  text: string
  isMobile: boolean
}

const Paragraph = ({ isLeftAlign, text, isMobile }: Props) => {
  return (
    <p
      id="intro"
      css={css`
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        line-height: ${isMobile ? 1.6 : 1.7};
        text-align: ${isLeftAlign ? "left" : "center"};
        margin-bottom: ${isMobile ? 8 : 4}px;
      `}
    >
      {text}
    </p>
  )
}

export default Paragraph
