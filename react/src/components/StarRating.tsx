import React, { ReactElement, useState } from 'react'
import Star from './common/Star'

const StarRating = ({ totalStars = 5, style = {}, ...props }) => {

  const createArray = (length: number) => [...Array(length)]

  const [selectedStars, setSelectedStars] = useState(0)

  return (
    <div 
      style={{ padding: "5px", ...style }}
      {...props}
    >
      {createArray(totalStars).map((_, i) => <Star
        selected={selectedStars > i}
        key={i}
        onSelect={() => setSelectedStars(i + 1)}
        /> )}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}

export default StarRating
