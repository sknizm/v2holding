import React, { useState } from 'react'
import './Admin.css'
import AdminMenu from '../../Components/AdminMenu/AdminMenu'

const Admin = () => {
    const [menu,setMenu] = useState('properties')
  return (
    <div className='admin'>
        <AdminMenu menu={menu} setMenu={setMenu} />
    </div>
  )
} 

export default Admin