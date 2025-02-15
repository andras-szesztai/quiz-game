import React from "react"

import { colors } from "../styles/theme"

interface Props {
  id: number
}

const CorrectIcon = ({ id }: Props) => {
  return (
    <g id={`correct-icon-${id}`} className="correct-icon">
      <circle fill={colors.correct} cx="217.5" cy="59.6" r="12.3" />
      <path
        fill={colors.bgRound}
        d="M222.6,55.4l-7.7,6.2l-2.2-3.1c-0.3-0.4-0.9-0.5-1.3-0.2c-0.4,0.3-0.5,0.9-0.2,1.3l2.8,4
		c0.2,0.2,0.4,0.4,0.7,0.4c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.6-0.2l8.5-6.9c0.4-0.3,0.5-0.9,0.1-1.3C223.6,55.2,223,55.1,222.6,55.4z
		"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="217.5"
        y1="39.2"
        x2="217.5"
        y2="45.3"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="207.3"
        y1="41.9"
        x2="210.4"
        y2="47.2"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="199.8"
        y1="49.3"
        x2="205.1"
        y2="52.4"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="197"
        y1="59.5"
        x2="203.1"
        y2="59.5"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="199.7"
        y1="69.7"
        x2="205"
        y2="66.7"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="207.1"
        y1="77.2"
        x2="210.2"
        y2="71.9"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="217.3"
        y1="80"
        x2="217.3"
        y2="73.9"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="227.5"
        y1="77.3"
        x2="224.5"
        y2="72.1"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="235"
        y1="69.9"
        x2="229.7"
        y2="66.9"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="237.8"
        y1="59.7"
        x2="231.7"
        y2="59.7"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="235.1"
        y1="49.5"
        x2="229.9"
        y2="52.6"
      />
      <line
        className={`correct-line-${id}`}
        stroke={colors.correct}
        strokeLinecap="round"
        x1="227.7"
        y1="42"
        x2="224.7"
        y2="47.3"
      />
    </g>
  )
}

export default CorrectIcon
