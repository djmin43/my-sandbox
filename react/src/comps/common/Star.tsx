import React, { ReactElement } from 'react'
import { FaStar } from 'react-icons/fa'

const Star = ({ selected = false }): ReactElement => {
  return (
    <div>
      <FaStar color={selected ? "red" : "grey"} />
    </div>
  )
}

export default Star
