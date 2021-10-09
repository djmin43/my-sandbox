import React, { ReactElement } from 'react'

interface Props {
  colors: {
    colors: Color[]
  }
}

interface Color {
  id: string;
  title: string;
  color: string;
  rating: number;
}

const ColorList = ({colors}: Props) => {
  return (
    <div>
    </div>
  )
}

export default ColorList
