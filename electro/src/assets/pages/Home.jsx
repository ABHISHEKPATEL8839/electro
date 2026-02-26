import React from 'react'
import Shop from './Shop'


const Home = () => {
  return (
    <>
   
    
    


   <div className="container carousel bg-light px-0">
        <div className="row g-0 justify-content-end">
            <div className="col-12 col-lg-7 col-xl-9">
                <div className="header-carousel owl-carousel bg-light py-5">
                    <div className="row g-0 header-carousel-item align-items-center">
                        <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
                            <img src="img/carousel-1.png" className="img-fluid w-100" alt="Image"/>
                        </div>
                        <div className="col-xl-6 carousel-content p-4">
                            <h4 className="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s"
                                style={{letterSpacing: "3px"}}>Save Up To A $400</h4>
                            <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s">On Selected
                                Laptops & Desktop Or Smartphone</h1>
                            <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">Terms and Condition Apply</p>
                            <a className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s"
                                href="#!">Shop Now</a>
                        </div>
                    </div>
                    <div className="row g-0 header-carousel-item align-items-center">
                        <div className="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
                            <img src="img/carousel-2.png" className="img-fluid w-100" alt="Image"/>
                        </div>
                        <div className="col-xl-6 carousel-content p-4">
                            <h4 className="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s"
                                style={{letterSpacing: "3px"}}>Save Up To A $200</h4>
                            <h1 className="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s">On Selected
                                Laptops & Desktop Or Smartphone</h1>
                            <p className="text-dark wow fadeInRight" data-wow-delay="0.5s">Terms and Condition Apply</p>
                            <a className="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s"
                                href="#!">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-12 col-xl-12 col-md-12 wow fadeInRight" data-wow-delay="0.1s">
                <div className="carousel-header-banner h-100">
                    <img src="img/header-img.jpg" className="img-fluid w-100 h-100" style={{objectFit: "cover",height:"100%",width:"100%"}} alt="Image"/>
                    <div className="carousel-banner-offer">
                        <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">Save $48.00</p>
                        <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
                    </div>
                    <div className="carousel-banner">
                        <div className="carousel-banner-content text-center p-4">
                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                            <a href="#!" className="d-block text-white fs-3">Apple iPad Mini <br/> G2356</a>
                            <del className="me-2 text-white fs-5">$1,250.00</del>
                            <span className="text-primary fs-5">$1,050.00</span>
                        </div>
                        <a href="#!" className="btn btn-primary rounded-pill py-2 px-4"><i
                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid px-0">
        <div className="row g-0">
            <div className="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp" data-wow-delay="0.1s">
                <div className="p-4">
                    <div className="d-inline-flex align-items-center">
                        <i className="fa fa-sync-alt fa-2x text-primary"></i>
                        <div className="ms-4">
                            <h6 className="text-uppercase mb-2">Free Return</h6>
                            <p className="mb-0">30 days money back guarantee!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.2s">
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <i className="fab fa-telegram-plane fa-2x text-primary"></i>
                        <div className="ms-4">
                            <h6 className="text-uppercase mb-2">Free Shipping</h6>
                            <p className="mb-0">Free shipping on all order</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.3s">
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-life-ring fa-2x text-primary"></i>
                        <div className="ms-4">
                            <h6 className="text-uppercase mb-2">Support 24/7</h6>
                            <p className="mb-0">We support online 24 hrs a day</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.4s">
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-credit-card fa-2x text-primary"></i>
                        <div className="ms-4">
                            <h6 className="text-uppercase mb-2">Receive Gift Card</h6>
                            <p className="mb-0">Recieve gift all over oder $50</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.5s">
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-lock fa-2x text-primary"></i>
                        <div className="ms-4">
                            <h6 className="text-uppercase mb-2">Secure Payment</h6>
                            <p className="mb-0">We Value Your Security</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.6s">
                <div className="p-4">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-blog fa-2x text-primary"></i>
                        <div className="ms-4">
                            <h6 className="text-uppercase mb-2">Online Service</h6>
                            <p className="mb-0">Free return products in 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* -------------------------- */}





    <Shop/>
  
    {/* ---------------------------- */}


    
    <div class="container-fluid contact py-5">
        <div class="container py-5">
            <div class="p-5 bg-light rounded">
                <div class="row g-4">
                    <div class="col-12">
                        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "900px"}}>
                            <h4 class="text-primary border-bottom border-primary border-2 d-inline-block pb-2">Get in
                                touch</h4>
                            <p class="mb-5 fs-5 text-dark">We are here for you! how can we help, We are here for you!
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <h5 class="text-primary wow fadeInUp" data-wow-delay="0.1s">Let’s Connect</h5>
                        <h1 class="display-5 mb-4 wow fadeInUp" data-wow-delay="0.3s">Send Your Message</h1>
                        <p class="mb-4 wow fadeInUp" data-wow-delay="0.5s">The contact form is currently inactive. Get a
                            functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste
                            the files, add a little code and you're done. <a
                                href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <form>
                            <div class="row g-4 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="phone" class="form-control" id="phone" placeholder="Phone"/>
                                        <label for="phone">Your Phone</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="project" placeholder="Project"/>
                                        <label for="project">Your Project</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a message here" id="message"
                                            style={{height: "160px"}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-5 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="h-100 rounded">
                            <iframe class="rounded w-100" style={{height: "100%"}}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>

    
    


    

    
   
 
    
    </>
  )
}

export default Home