import React, { ReactElement, useState } from 'react'
import Star from './common/Star'

const StarRating = ({ totalStars = 5, style = {} }) => {

  const createArray = (length: number) => [...Array(length)]

  const [selectedStars, setSelectedStars] = useState(0)

  return (
    <>
      {createArray(totalStars).map((_, i) => <Star
        selected={selectedStars > i}
        key={i}
        onSelect={() => setSelectedStars(selectedStars + 1)}
        /> )}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}

export default StarRating
