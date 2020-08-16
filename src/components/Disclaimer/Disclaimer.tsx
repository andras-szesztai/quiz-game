/** @jsx jsx */
import chroma from "chroma-js"
import { IoMdBuild } from "react-icons/io"
import { css, jsx } from "@emotion/core"
import { useWindowSize } from "react-use"

import { colors } from "../../styles/theme"

export default function Disclaimer() {
  const { width, height } = useWindowSize()
  return (
    <div
      css={css`
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 100;
        height: ${height}px;
        width: ${width}px;
        font-size: 32px;

        background-color: ${chroma(colors.bgRound).alpha(0.98).hex()};
        padding: 32px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: ${colors.accent};
        font-weight: 300;
        text-align: center;

        .explain {
          margin-top: 8px;
          font-size: 16px;
        }
      `}
    >
      <p>Sorry, the dashboard has not yet been optimized for mobile.</p>
      <p className="explain">
        Please use it in your desktop browser until mobile layout is added!
      </p>
      <div style={{ marginTop: 8 }}>
        <IoMdBuild size={30} color={colors.accent} />
      </div>
    </div>
  )
}
