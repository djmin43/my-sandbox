import React from 'react'
import StarRating from '../StarRating'

interface ColorType {
  id: string;
  title: string;
  color: string;
  rating: number;
}

const Color = ({title, color, rating}: ColorType) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color}}></div>
      <StarRating selectedStars={rating} />
    </section>
  )
}

export default Color
