import React from 'react'
import './PropertyList.css'
import Card1 from '../Card1/Card1'

const PropertyList = ({title, property}) => {
  return (
    <div className='property-list-section'>
        <h1 className='title'>{title}</h1>
        <div className="list-div">
        {property.map((e)=>{
            return <Card1 image={e.image} title={e.title} price={e.price} address={e.address} beds={e.beds} bath={e.bath} area={e.area}/>
        })}
        </div>
        <button>VIEW ALL</button>
    </div>
  )
}

export default PropertyList