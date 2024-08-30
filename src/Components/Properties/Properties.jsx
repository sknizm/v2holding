import React from 'react'
import './Properties.css'
import Card1 from '../Card1/Card1'

const Properties = ({title, property}) => {
  return (
    <div className='property-list-section2'>
      <div className="heading">
      <div className="title-box">
      <h1 className='title'>{title}</h1>
      </div>
      </div>
        <div className="list-div">
        {property.map((e)=>{
         return <Card1 propertyid={e.propertyid} image={e.propertyImage[0]} title={e.projectTitle} price={e.propertyPrice} address={e.location} />
        })}
        </div>
    </div>
  )
}

export default Properties