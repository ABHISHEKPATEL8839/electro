import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import WhyShopWithUs from '../components/WhyShopWithUs'
import {NavLink} from 'react-router-dom'

import axios from 'axios'
import ProductBox from '../components/ProductBox'
import {API_URL} from '../config/API'
const Home = () => {

   let [product, setProduct] = useState([]);

   useEffect(()=>{
      axios
         .get(`${import.meta.env.VITE_API_URL}/product`)
         .then(response => {
            // console.log(response.data);
            setProduct(response.data.result);
         })
   },[])

   

      
  

   return (
      <>
         <div className="container carousel bg-light px-0">
        <div className="row g-0 justify-content-end">
            <div className="col-12 col-lg-7 col-xl-9">
                <div className="header-carousel owl-carousel bg-light py-5">
                    <div className="row g-0 header-carousel-item align-items-center">
                        <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
                            <img src="/elc/img/carousel-1.png" className="img-fluid w-100" alt="Image"/>
                        </div>
                        <div className="col-xl-6 carousel-content p-4">
                            <h4 className="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s"
                                style={{letterSpacing: "3px"}}>Save Up To A $400</h4>
                            <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s">On Selected
                                Laptops & Desktop Or Smartphone</h1>
                            <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">Terms and Condition Apply</p>
                            <NavLink className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s"
                                href="#!">Shop Now</NavLink>
                        </div>
                    </div>
                    <div className="row g-0 header-carousel-item align-items-center">
                        <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
                            <img src="/elc/img/carousel-2.png" className="img-fluid w-100" alt="Image"/>
                        </div>
                        <div className="col-xl-6 carousel-content p-4">
                            <h4 className="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s"
                                style={{letterSpacing: "3px"}}>Save Up To A $200</h4>
                            <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s">On Selected
                                Laptops & Desktop Or Smartphone</h1>
                            <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">Terms and Condition Apply</p>
                            <NavLink className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s"
                                href="#!">Shop Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-12 col-xl-12 col-md-12 wow fadeInRight" data-wow-delay="0.1s">
                <div className="carousel-header-banner h-100">
                    <img src="/elc/img/header-img.jpg" className="img-fluid w-100 h-100" style={{objectFit: "cover",height:"100%",width:"100%"}} alt="Image"/>
                    <div className="carousel-banner-offer">
                        <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">Save $48.00</p>
                        <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
                    </div>
                    <div className="carousel-banner">
                        <div className="carousel-banner-content text-center p-4">
                            <NavLink href="#!" className="d-block mb-2">SmartPhone</NavLink>
                            <NavLink href="#!" className="d-block text-white fs-3">Apple iPad Mini <br/> G2356</NavLink>
                            <del className="me-2 text-white fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                        </div>
                        <NavLink href="#!" className="btn btn-primary rounded-pill py-2 px-4"><i
                                className="fas fa-shopping-cart me-2"></i> Add To Cart</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
         {/* =---------- */}
         <section className="product_section layout_padding">
            <div className="container">
               <div className="heading_container heading_center">
                  <div className="d-flex justify-content-between align-items-center w-100">
                     <h2>
                     Our <span>products</span>
                  </h2>
                  <NavLink to="/all-products">View All</NavLink>
                  </div>
                  
               </div>
               <div className="row">


                  {
                     product.map(item => {
                        return(
                           <ProductBox item={item} />
                        )
                     })
                  }





               </div>

            </div>
         </section>

         <br/>
         <WhyShopWithUs />
      </>
   )
}

export default Home