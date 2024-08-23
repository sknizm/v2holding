import React from 'react'
import './Card1.css'
const Card1 = ({image,title,price, address, bath, area, beds }) => {
  return (
    <div className='card-1'>
        <img src={image} alt="property-image" />
        <p className='status-prop'>FOR SALE</p>
        <div className="content">
            <div className="bottom-details">
                <div className="shown-div flex-box">
                <h1>{title}</h1>
                <h3>${price}</h3>

                </div>
                <div className="hidden-div flex-box">
                    <div className="details">
                        <p>{address}</p>
                        <p>{beds}BEDS | {bath}BATHS | {area}SQ FT</p>
                    </div>
                    <button>DETAILS</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card1