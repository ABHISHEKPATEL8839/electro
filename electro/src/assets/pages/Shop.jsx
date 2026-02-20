import React from 'react'

const Shop = () => {
  return (
   <>
   
   <div className="container-fluid bg-light py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                    <a href="#!" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                        <div>
                            <p className="text-muted mb-3">Find The Best Camera for You!</p>
                            <h3 className="text-primary">Smart Camera</h3>
                            <h1 className="display-3 text-secondary mb-0">40% <span
                                    className="text-primary fw-normal">Off</span></h1>
                        </div>
                        <img src="img/product-1.png" className="img-fluid" alt=""/>
                    </a>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                    <a href="#!" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                        <div>
                            <p className="text-muted mb-3">Find The Best Whatches for You!</p>
                            <h3 className="text-primary">Smart Whatch</h3>
                            <h1 className="display-3 text-secondary mb-0">20% <span
                                    className="text-primary fw-normal">Off</span></h1>
                        </div>
                        <img src="img/product-2.png" className="img-fluid" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </div>
 
    <div className="container-fluid product py-5">
        <div className="container py-5">
            <div className="tab-className">
                <div className="row g-4">
                    <div className="col-lg-4 text-start wow fadeInLeft" data-wow-delay="0.1s">
                        <h1>Our Products</h1>
                    </div>
                    <div className="col-lg-8 text-end wow fadeInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex text-center mb-5">
                            <li className="nav-item mb-4">
                                <a className="d-flex mx-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill"
                                    href="#!tab-1">
                                    <span className="text-dark" style={{width: "130px"}}>All Products</span>
                                </a>
                            </li>
                            <li className="nav-item mb-4">
                                <a className="d-flex py-2 mx-2 bg-light rounded-pill" data-bs-toggle="pill" href="#!tab-2">
                                    <span className="text-dark" style={{width: "130px"}}>New Arrivals</span>
                                </a>
                            </li>
                            <li className="nav-item mb-4">
                                <a className="d-flex mx-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#!tab-3">
                                    <span className="text-dark" style={{width: "130px"}}>Featured</span>
                                </a>
                            </li>
                            <li className="nav-item mb-4">
                                <a className="d-flex mx-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#!tab-4">
                                    <span className="text-dark" style={{width: "130px"}}>Top Selling</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-3.png" className="img-fluid w-100 rounded-top" alt=""/>
                                            <div className="product-new">New</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-4.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-sale">sale</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-5.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"/><i
                                                            className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-6.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-new">New</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-7.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-sale">Sale</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-8.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-9.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-new">New</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"/><i
                                                            className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-10.png" className="img-fluid w-100 rounded-top" alt=""/>
                                            <div className="product-sale">Sale</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-3.png" className="img-fluid rounded-top" alt=""/>
                                            <div className="product-new">New</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"></span><i
                                                            className="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-4.png" className="img-fluid w-100 rounded-top" alt=""/>
                                            <div className="product-new">New</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-5.png" className="img-fluid w-100 rounded-top" alt=""/>
                                            <div className="product-new">New</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-6.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-new">New</div>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-9.png" className="img-fluid w-100 rounded-top" alt=""/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-10.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-11.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-12.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-4" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-14.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-15.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-17.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3">
                                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="product-item-inner border rounded">
                                        <div className="product-item-inner-item">
                                            <img src="img/product-16.png" className="img-fluid w-100 rounded-top"
                                                alt="Image"/>
                                            <div className="product-details">
                                                <a href="#!"><i className="fa fa-eye fa-1x"></i></a>
                                            </div>
                                        </div>
                                        <div className="text-center rounded-bottom p-4">
                                            <a href="#!" className="d-block mb-2">SmartPhone</a>
                                            <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                            <del className="me-2 fs-5">$1,250.00</del>
                                            <span className="text-primary fs-5">$1,050.00</span>
                                        </div>
                                    </div>
                                    <div
                                        className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                        <a href="#!"
                                            className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex">
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star text-primary"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <div className="d-flex">
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-random"></i></span></a>
                                                <a href="#!"
                                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                        className="rounded-circle btn-sm-square border"><i
                                                            className="fas fa-heart"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                    <a href="#!">
                        <div className="bg-primary rounded position-relative">
                            <img src="img/product-banner.jpg" className="img-fluid w-100 rounded" alt=""/>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                                style={{background: "rgba(255, 255, 255, 0.5)"}}>
                                <h3 className="display-5 text-primary">EOS Rebel <br/> <span>T7i Kit</span></h3>
                                <p className="fs-4 text-muted">$899.99</p>
                                <a href="#!" className="btn btn-primary rounded-pill align-self-start py-2 px-4">Shop
                                    Now</a>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                    <a href="#!">
                        <div className="text-center bg-primary rounded position-relative">
                            <img src="img/product-banner-2.jpg" className="img-fluid w-100" alt=""/>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                                style={{background: "rgba(242, 139, 0, 0.5)"}}>
                                <h2 className="display-2 text-secondary">SALE</h2>
                                <h4 className="display-5 text-white mb-4">Get UP To 50% Off</h4>
                                <a href="#!" className="btn btn-secondary rounded-pill align-self-center py-2 px-4">Shop
                                    Now</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
 

    <div className="container-fluid products productList overflow-hidden">
        <div className="container products-mini py-5">
            <div className="mx-auto text-center mb-5" style={{maxWidth: "900px"}}>
                <h4 className="text-primary border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp"
                    data-wow-delay="0.1s">Products</h4>
                <h1 className="mb-0 display-3 wow fadeInUp" data-wow-delay="0.3s">All Product Items</h1>
            </div>
            <div className="productList-carousel owl-carousel pt-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="productImg-carousel owl-carousel productList-item">
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-4.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-4.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-6.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-7.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productImg-carousel owl-carousel productList-item">
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-8.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-9.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-10.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-11.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productImg-carousel owl-carousel productList-item">
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-12.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-13.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-14.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"><i className="fas fa-heart"></i></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-15.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"><i className="fas fa-heart"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productImg-carousel owl-carousel productList-item">
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-16.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"><i className="fas fa-heart"></i></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-17.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"><i className="fas fa-heart"></i></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="productImg-item products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-3.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="container-fluid products pb-5">
        <div className="container products-mini py-5">
            <div className="mx-auto text-center mb-5" style={{maxWidth: "700px"}}>
                <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius wow fadeInUp"
                    data-wow-delay="0.1s">Bestseller Products</h4>
                <p className="mb-0 wow fadeInUp" data-wow-delay="0.2s">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Modi, asperiores ducimus sint quos tempore officia similique quia? Libero, pariatur
                    consectetur?</p>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-3.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-4.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-5.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-6.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-7.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"/><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="products-mini-item border">
                        <div className="row g-0">
                            <div className="col-5">
                                <div className="products-mini-img border-end h-100">
                                    <img src="img/product-11.png" className="img-fluid w-100 h-100" alt="Image"/>
                                    <div className="products-mini-icon rounded-circle bg-primary">
                                        <a href="#!"><i className="fa fa-eye fa-1x text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="products-mini-content p-3">
                                    <a href="#!" className="d-block mb-2">SmartPhone</a>
                                    <a href="#!" className="d-block h4">Apple iPad Mini <br/> G2356</a>
                                    <del className="me-2 fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="products-mini-add border p-3">
                            <a href="#!" className="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                    className="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                            <div className="d-flex">
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-3"><span
                                        className="rounded-circle btn-sm-square border"><i
                                            className="fas fa-random"></i></span></a>
                                <a href="#!"
                                    className="text-primary d-flex align-items-center justify-content-center me-0"><span
                                        className="rounded-circle btn-sm-square border"><i className="fas fa-heart"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
   
   
   
   
   </>
  )
}

export default Shop