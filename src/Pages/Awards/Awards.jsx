import React from 'react'
import './Awards.css'
import { award_list } from '../../data'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'

const Awards = () => {
 
  return (
    <div className='awards'>
        <div className="header">
            <div className="title-box">
            <h1>Awards</h1>
            </div>
        </div>
        <div className="awards-list">
            {
                award_list.map((e)=>{
                    return <Card2 image={e.image} text={e.text}/>
                })
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Awards