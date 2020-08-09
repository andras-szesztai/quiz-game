import { css } from "@emotion/core"

export const colors = {
  bgRound: "#577590",
  correct: "#cfe5b8",
  correctDark: "#8ba56b",
  false: "#F8ABAD",
  falseDark: "#9A5358",
  accent: "#F9C750",
  text: "#FFFFFF",
}

export const buttonFocus = css`
  :focus {
    box-shadow: 0 0 0 1px ${colors.accent};
    outline: none;
  }
`

export const buttonNoFocus = css`
  :focus {
    outline: none;
  }
`
