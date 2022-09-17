import React from "react";

import { Link } from "react-router-dom";
export default function Header(){
    return(
      <header className="full_bg">
      
      <div className="header">
         <div className="container-fluid">
            <div className="row">
               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                     <div className="center-desk">
                        <div className="logo">
                           <a href="index.html"><img src="../assets/images/logo.png" alt="#" /></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                           <li className="nav-item active">
                              <a className="nav-link" href="#index">Home</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#about">About</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#p1">our product</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#g1">gallery</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="#c1">Contact Us</a>
                           </li>
                           <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Login
                              </a>
                           {/* <ul>
                                 <li><a href="/login">SignIn</a></li>
                                 <li className="dropdown"><a href="#"><span>SignUp</span></a></li>
                          
 </ul>*/}
                             <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="login1">SignIn</Link>
                                <Link className="dropdown-item" to="login2"><span>SignUp</span></Link>
                           <ul>
                              <li><a href="#">As Admin</a></li>
                              <li><a href="#">As Customer</a></li>
                              <li><a href="#">As Farmer</a></li>
                                 </ul> 
                             </div>
                              {/*<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Admin</a>
                                <a className="dropdown-item" href="#">Farmer</a>
                                <a className="dropdown-item" href="#">Customer</a>
 </div>*/}
                            </li>
                            <li>
                            <Link className="dropdown-item" to="login1">SignIn</Link>
                              </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   
      <section className="banner_main">
         <div className="container">
            <div className="banner_po">
               <div className="row">
                  <div className="col-md-7">
                     <div className="text_box">
                        <span>Now Started</span>
                        <h1> <strong>Mango</strong></h1>
                        <a className="read_more" href="#about" role="button">About us</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </header>
    )
}