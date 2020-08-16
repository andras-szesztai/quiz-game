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

export const twitterMobile = css`
  right: 0px;
  top: 0px;
  margin-right: 20px;
  margin-top: 16px;
`


export const twitterNotMobile = css`
  right: 0px;
  bottom: 0px;
  margin-right: 24px;
  margin-bottom: 16px;
`
