import React from 'react'
import StarRating from '../StarRating'
import { FaTrash } from 'react-icons/fa'

interface ColorType {
  id: string;
  title: string;
  color: string;
  rating: number;
  onRemove: (f: string) => void;
}

const Color = ({id, title, color, rating, onRemove = f => f}: ColorType) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color}}></div>
      <StarRating selectedStars={rating} />
    </section>
  )
}

export default Color
