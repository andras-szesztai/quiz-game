/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import { colors, buttonNoFocus, buttonFocus } from "../../styles/theme"

interface Props {
  text: string
  currentInput: string
  handleClick: () => void
}

const Button = ({ text, currentInput, handleClick }: Props) => {
  return (
    <button
      css={css`
        align-self: flex-start;
        font-size: 16px;
        font-weight: 500;
        border-radius: 4px;
        padding: 8px 16px;
        background: ${colors.accent};
        border: none;
        color: ${colors.bgRound};

        ${currentInput === "mouse" ? buttonNoFocus : buttonFocus}

        cursor: pointer;
      `}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
