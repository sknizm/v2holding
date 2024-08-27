import React from 'react'
import './AllPropertyList.css'
import {awardList2} from '../../data'

const AllPropertyList = ({setMenu}) => {
  return (
    <div className='all-property-list'>
        <div className="upper-section">
            <button onClick={()=>{setMenu('add-property')}}>Add Property</button>
        </div>
        <h1 className='title'>All Property List</h1>
        <div className="property-list">
            {
                awardList2.map((e)=>{
                    return <div className="list">
                        <img src={e.image} alt="" />
                        <h4>{e.text}</h4>
                        <div className="actions">
                            <button>Delete</button>
                        </div>
                    </div>
                })
            }

        </div>
    </div>
  )
}

export default AllPropertyList