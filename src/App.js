import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Category from './Pages/Category/Category'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/category/:type' element={<Category/>}/>
    <Route path='/property-details/:id' element={<PropertyDetails/>}/>

    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App