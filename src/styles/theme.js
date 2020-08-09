import { css } from "@emotion/core"


const colors = {
  bgRound: "#577590",
  accent: "#F9C750",
  text: "#FFFFFF"
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