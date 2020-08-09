import React from "react"

import { colors } from "../styles/theme"

interface Props {
  id: number
  path: string
}

const StarIcon = ({ id, path }: Props) => {
  return (
    <path id={`star-${id}`} className="star" fill={colors.accent} d={path} />
  )
}

export default StarIcon
