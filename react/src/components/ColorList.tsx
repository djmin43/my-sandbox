import React, { ReactElement } from 'react'
import Color from './common/Color'

interface Props {
  colors: ColorType[]
}

interface ColorType {
  id: string;
  title: string;
  color: string;
  rating: number;
}

const ColorList = ({colors = []}: Props) => {

  if (!colors.length) return <div>there is no color to render</div>

  return (
    <div>
      {
        colors.map(color => <Color key={color.id} {...color}/> )
      }
    </div>
  )
}

export default ColorList
