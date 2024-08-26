import React from 'react'
import './CallActions.css'
import wp_img from '../Assets/wp.png'
import call_img from '../Assets/call.png'

const CallActions = () => {
  return (
    <div className='call-actions'>
    <a href='tel:+919945255552'><img src={call_img} alt="call button" /></a>
      <a href='https://wa.link/g9s1db'>  <img src={wp_img} alt="Whatsapp button" /></a>
    </div>
  )
}

export default CallActions