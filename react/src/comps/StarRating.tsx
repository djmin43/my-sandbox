import React, { ReactElement } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = (): ReactElement => {
  return (
    <div>
      <FaStar color='red' />
      <FaStar color='red' />
      <FaStar color='red' />
      <FaStar color='grey' />
      <FaStar color='grey' />
    </div>
  )
}

export default StarRating
