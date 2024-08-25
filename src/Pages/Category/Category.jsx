import React from 'react'
import './Category.css'
import { useParams } from 'react-router-dom'
import { dataList } from '../../data'
import Properties from '../../Components/Properties/Properties'
import Footer from '../../Components/Footer/Footer'

const Category = () => {
    const {type} = useParams()
  return (
    <div className='category'>
         <Properties title={`${type} Projects`} property={dataList}/>
         <Footer/>
    </div>
  )
}

export default Category