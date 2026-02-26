import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'
import Registration from '../pages/Registration'
import Login from '../pages/Login'
import Protected from '../../../Routes/Protected'
const AllRoute = () => {
  return (
   <>
  
<Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/reg' element={<Registration/>}/>
  <Route path='' element={<Protected/>}>

  <Route path='/' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/con' element={<Contact/>}/>

</Route>


  
</Routes>

   
   
   
   
   </>
  )
}

export default AllRoute