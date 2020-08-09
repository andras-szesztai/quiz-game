import React from "react"
import { colors } from "../styles/theme"

const FalseIcon = ({ id }: { id: number }) => {
  return (
    <g id={`false-icon-${id}`} className="false-icon">
      <circle fill={colors.false} cx="299.4" cy="84.2" r="12.3" />
      <path
        fill={colors.falseDark}
        d="M299.4,85l-3.9,3.9c-0.1,0.1-0.2,0.2-0.4,0.2c-0.3,0-0.5-0.2-0.5-0.5c0-0.1,0.1-0.3,0.2-0.4l3.9-3.9l-3.9-3.9
c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.3,0.2-0.5,0.5-0.5c0,0,0,0,0,0c0.1,0,0.3,0.1,0.4,0.2l3.9,3.9l3.9-3.9c0.2-0.2,0.5-0.2,0.8,0
c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1-0.1,0.3-0.2,0.4l-3.9,3.9l3.9,3.9c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.5,0.2-0.7,0L299.4,85z"
      />
    </g>
  )
}

export default FalseIcon
