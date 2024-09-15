import React from 'react'
import './PropertyList.css'
import Card1 from '../Card1/Card1'

const PropertyList = ({title, property}) => {
  return (
    <div className='property-list-section'>
        <h1 className='title'>{title}</h1>
        <div className={`list-div ${property.length===1?'single':''}`}>
        {property.map((e)=>{
            return <Card1 propertyid={e.propertyid} image={e.propertyImage[0]} title={e.projectTitle} price={e.propertyPrice} address={e.location} />
        })}
        </div>
        {/* <button>VIEW ALL</button> */}
    </div>
  )
}

export default PropertyList