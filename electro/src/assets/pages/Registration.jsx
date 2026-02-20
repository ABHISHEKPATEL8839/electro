import React from 'react'

const Registration = () => {
  return (
    <>
       <div class="container-fluid contact py-5">
        <div class="container py-5">
            <div class="p-5 bg-light rounded">
                <div class="row g-4">
                    <div class="col-12">
                        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "900px"}}>
                            <h4 class="text-primary border-bottom border-primary border-2 d-inline-block pb-2">REGISTRATION</h4>
                            <p class="mb-5 fs-5 text-dark">ALL READY HAVE ACCOUNT 
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-7 offset-3">
                        <h5 class="text-primary wow fadeInUp" data-wow-delay="0.1s">Let’s Connect</h5>
                       
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
                                        <select class="form-control" id="project" placeholder="city"/>
                                        <label for="project " style={{color:"#000"}}>select CITY</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <select class="form-control" id="subject" placeholder="gender"/>
                                      
                                        {/* <Option>MALE</Option>
                                        <Option>FEMALE</Option> */}

                                       
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
                                    <button class="btn btn-primary w-100 py-3">SUBMIT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                  
                    
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Registration