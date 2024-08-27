import React from 'react'
import './EnquiryList.css'
import {awardList2} from '../../data'
import { Link } from 'react-router-dom'

const EnquiryList = () => {
  return (
    <div className='enquiry-list'>
        <h1 className='title'>All Enquiry List</h1>
        <div className="property-list">
            {
                awardList2.map((e)=>{
                    return <Link className="list">
                        <h4>{e.text}</h4>
                        <div className="actions">
                            <button>Delete</button>
                        </div>
                    </Link>
                })
            }

        </div>
    </div>
  )
}

export default EnquiryList