import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'
import Header from './Header'
import Footer from './Footer'
import Registration from '../pages/Registration'
const AllRoute = () => {
  return (
   <>
   <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/con' element={<Contact/>}/>
  <Route path='/reg' element={<Registration/>}/>


  
</Routes>
<Footer/>
   
   
   
   
   </>
  )
}

export default AllRoute