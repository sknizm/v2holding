import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Category from './Pages/Category/Category'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import Awards from './Pages/Awards/Awards'
import Leadership from './Pages/Leadership/Leadership'
import Admin from './Pages/Admin/Admin'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/category/:type' element={<Category/>}/>
    <Route path='/property-details/:id' element={<PropertyDetails/>}/>
    <Route path='/awards' element={<Awards/>}/>
    <Route path='/leadership' element={<Leadership/>}/>
    <Route path='/v2-admin' element={<Admin/>}/>

    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App