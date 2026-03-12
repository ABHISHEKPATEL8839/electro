import React from 'react'

const UpperFooter = () => {
  return (
   <>
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
            <div className="row g-4 rounded mb-5" style={{background: "rgba(255, 255, 255, .03)"}}>
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="rounded p-4">
                        <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                            style={{width: "70px", height: "70px"}}>
                            <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 className="text-white">Address</h4>
                            <p className="mb-2">123 Street New York.USA</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="rounded p-4">
                        <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                            style={{width: "70px", height: "70px"}}>
                            <i className="fas fa-envelope fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 className="text-white">Mail Us</h4>
                            <p className="mb-2">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="rounded p-4">
                        <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                            style={{width: "70px", height: "70px"}}>
                            <i className="fa fa-phone-alt fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 className="text-white">Telephone</h4>
                            <p className="mb-2">(+012) 3456 7890</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="rounded p-4">
                        <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                            style={{width: "70px", height: "70px"}}>
                            <i className="fab fa-firefox-browser fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 className="text-white">Yoursite@ex.com</h4>
                            <p className="mb-2">(+012) 3456 7890</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           </div>


   

   
   </>
  )
}

export default UpperFooter