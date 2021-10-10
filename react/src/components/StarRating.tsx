import React, { ReactElement, useState } from 'react'
import Star from './common/Star'

const StarRating = ({ totalStars = 5, style = {}, selectedStars=0 }) => {

  const createArray = (length: number) => [...Array(length)]

  return (
    <div 
      style={{ padding: "5px", ...style }}
    >
      {createArray(totalStars).map((_, i) => <Star
        selected={selectedStars > i}
        key={i}
        /> )}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}

export default StarRating
