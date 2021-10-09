import React, { ReactElement } from 'react'
import Star from './common/Star'

const StarRating = ({ totalStars = 5 }): ReactElement => {

  const createArray = (length: number) => [...Array(length)]

  return (
    <div>
      {createArray(totalStars).map((item, i) => <Star selected key={i} /> )}
    </div>
  )
}

export default StarRating
