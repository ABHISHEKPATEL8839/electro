import React from 'react'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../config/API';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {
   
   let [allCate, setAllCate] = useState([])

   useEffect(() => {
      console.log(import.meta.env.VITE_API_URL)
      axios

         .get(import.meta.env.VITE_API_URL + "/category/subcate")
         .then(response => {
            console.log(response.data.result);
            setAllCate(response.data.result);
         })
   }, [])
  
  return (
<>

<div className="container-fluid nav-bar p-0">
        <div className="row gx-0 bg-primary px-5 align-items-center">
            <div className="col-lg-3 d-none d-lg-block">
                <nav className="navbar navbar-light position-relative" style={{width: "250px"}}>
                     <div className="col-md-4 col-lg-3 text-center text-lg-start">
                <div className="d-inline-flex align-items-center">
                    <a href="" className="navbar-brand p-0">
                        <h1 className="display-5 text-primary m-0"><i
                                className="fas fa-shopping-bag text-secondary me-2"></i><span style={{color:"#FA4F33"}}>Electro</span>Electro</h1>
                        {/* <img src="img/logo.png" alt="Logo"/> */}
                    </a>
                </div>
            </div>
                   
                </nav>
            </div>
            <div className="col-12 col-lg-9">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light ">
                    <a href="" className="navbar-brand d-block d-lg-none">
                        <h1 className="display-5 text-secondary m-0"><i
                                className="fas fa-shopping-bag text-white me-2"></i>Electro</h1>
                         {/* <img src="img/logo.png" alt="Logo"/> */}
                    </a>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#!navbarCollapse">
                        <span className="fa fa-bars fa-1x"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/" className="nav-item nav-link active">Home</a>
                             <a href="/about" className="nav-item nav-link me-2">About</a>
                            
                          <div className='nav-item dropdown'>
                        <NavLink className="dropdown-toggle nav-link" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Categories
                        </NavLink>
                        <ul className="dropdown-menu m-0" role="menu" aria-labelledby="dropdownMenu">
                           {
                              allCate.map(item1=>{
                                 return(
                                    <li className="dropdown-submenu">
                              <NavLink className="dropdown-item" href="#">{item1.category ? item1.category.name : ''}</NavLink>
                              <ul className="dropdown-menu">
                                 {
                                    item1.info.map(item2=>{
                                       return(
                                          <li className="dropdown-item"><NavLink href="#">{item2.name}</NavLink></li>
                                       )
                                    })
                                 }                                 
                              </ul>
                           </li>
                                 )
                              })
                           }
                        </ul>
                     </div>
                            <a href="/all-products" className="nav-item nav-link">Shop</a>
                          
                            
                        </div>
                        <a href="" className="btn btn-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0"><i
                                className="fa fa-mobile-alt me-2"></i> +0123 45 7890</a>
                    </div>
               
                      {
                  
                           
                            localStorage.getItem("access_user")

                           
                        
                        ?
                        <li className="nav-item dropdown user-dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label text-dark fw-bold">{localStorage.getItem("name")} <span className="caret"></span></span></NavLink>
                        <ul className="dropdown-menu">   
                           <li><NavLink to='/myprofile'>My Profile</NavLink></li>
                           <li><NavLink to='/myorders'>My Orders</NavLink></li>
                           <li><NavLink href=''>Wishlist</NavLink></li>
                           <li><NavLink to='/logout'>Logout</NavLink></li>
                           
                        </ul>
                        </li>
                        :
                        <>
                        <li className="nav-item text-dark">
                           <NavLink className="nav-link text-dark fw-bold" to="/Login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link text-dark fw-bold" to="/signup">Signup</NavLink>
                        </li>
                        </>
                     } 
                  
                </nav>
            </div>
        </div>
    </div>

</>

  )
}
export default Header