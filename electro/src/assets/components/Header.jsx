import React from 'react'

const Header = () => {
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
                    <div className="collapse navbar-collapse rounded-bottom" id="allCat">
                        <div className="navbar-nav ms-auto py-0">
                            <ul className="list-unstyled categories-bars">
                                <li>
                                    <div className="categories-bars-item">
                                        <a href="#!">Accessories</a>
                                        <span>(3)</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="categories-bars-item">
                                        <a href="#!">Electronics & Computer</a>
                                        <span>(5)</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="categories-bars-item">
                                        <a href="#!">Laptops & Desktops</a>
                                        <span>(2)</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="categories-bars-item">
                                        <a href="#!">Mobiles & Tablets</a>
                                        <span>(8)</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="categories-bars-item">
                                        <a href="#!">SmartPhone & Smart TV</a>
                                        <span>(5)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-12 col-lg-9">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
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
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="shop.html" className="nav-item nav-link">Shop</a>
                            
                            <div className="nav-item dropdown">
                                <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="bestseller.html" className="dropdown-item">Bestseller</a>
                                    <a href="cart.html" className="dropdown-item">Cart Page</a>
                                    <a href="cheackout.html" className="dropdown-item">Cheackout</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link me-2">Contact</a>
                            <div className="nav-item dropdown d-block d-lg-none mb-3">
                                <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">All Category</a>
                                <div className="dropdown-menu m-0">
                                    <ul className="list-unstyled categories-bars">
                                        <li>
                                            <div className="categories-bars-item">
                                                <a href="#!">Accessories</a>
                                                <span>(3)</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="categories-bars-item">
                                                <a href="#!">Electronics & Computer</a>
                                                <span>(5)</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="categories-bars-item">
                                                <a href="#!">Laptops & Desktops</a>
                                                <span>(2)</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="categories-bars-item">
                                                <a href="#!">Mobiles & Tablets</a>
                                                <span>(8)</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="categories-bars-item">
                                                <a href="#!">SmartPhone & Smart TV</a>
                                                <span>(5)</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        <a href="" className="btn btn-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0"><i
                                className="fa fa-mobile-alt me-2"></i> +0123 456 7890</a>
                    </div>
                    <div className="nav-item dropdown">
                                <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-user " aria-hidden="true" style={{color:"#000"}}></i></a>
                                <div className="dropdown-menu m-0">
                                    <a href="reg" className="dropdown-item">REGISTRATION</a>
                                    <a href="login" className="dropdown-item">LOGIN</a>
                                   
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                </nav>
            </div>
        </div>
    </div>

</>
  )
}

export default Header