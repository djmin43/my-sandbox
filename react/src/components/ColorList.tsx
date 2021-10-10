import React, { ReactElement } from 'react'
import Color from './common/Color'

interface Props {
  colors: ColorType[]
  onRemoveColor: (f: string) => void
}

interface ColorType {
  id: string;
  title: string;
  color: string;
  rating: number;
}

const ColorList = ({colors = [], onRemoveColor = f => f}: Props) => {

  if (!colors.length) return <div>No colors listed. (add a color)</div>

  return (
    <div>
      {
        colors.map(color => <Color key={color.id} {...color} onRemove={onRemoveColor}/> )
      }
    </div>
  )
}

export default ColorList
