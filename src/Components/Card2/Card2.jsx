import React from 'react'
import './Card2.css'

const Card2 = ({image, text}) => {
  return (
    <div className='card-2'>
        <img src={image} alt="" />
        <div className="details">
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Card2