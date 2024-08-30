import React, { useEffect } from 'react'
import './Awards.css'
import { awardList } from '../../data'
import Card2 from '../../Components/Card2/Card2'
import Footer from '../../Components/Footer/Footer'

const Awards = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className='awards'>
        <div className="header">
            <div className="title-box">
            <h1>Awards</h1>
            </div>
        </div>
        <div className="awards-list">
            {
                awardList.map((e)=>{
                    return <Card2 image={e.image} text={e.text}/>
                })
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Awards