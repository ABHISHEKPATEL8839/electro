import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/assets/components/Header'
import Footer from '../src/assets/components/Footer'


const Protected = () => {
  return (

<>
 <Header/>

   <Outlet/>
   <Footer/>
</>
  )
}

export default Protected