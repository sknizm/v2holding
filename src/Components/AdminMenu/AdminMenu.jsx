import React from 'react'
import './AdminMenu.css'

const AdminMenu = ({menu, setMenu,handleLogout}) => {
  return (
    <div className='admin-menu'>
        <h1>V2 Holdings Admin</h1>
        <div className="menus">
        <h3 onClick={()=>{setMenu('properties')}} className={`${menu==='properties'?'active':''}`}>All Properties</h3>
        <h3 onClick={()=>{setMenu('enquiry')}} className={`${menu==='enquiry'?'active':''}`}>Enqueries</h3>
        <h3 onClick={()=>handleLogout()} >Log out</h3>
        {/* <h3 onClick={()=>{setMenu('enquiry')}} className={`${menu==='properties'?'active':''}`}>All Properties</h3> */}
        </div>
    </div>
  )
}

export default AdminMenu