
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function FarmerHome() {
   var farmer=JSON.parse(sessionStorage.getItem("farmerlogin"));
   let navigate=useNavigate();
   console.log(farmer);
   useEffect(()=>{
      
      if(farmer===null){
         alert("Please login first");
      navigate("/FarmerSignIn");
      }

   },[])
   
  // window.location.reload(false);
   return (

      <div className="main-layout">
    
      {/* <div className="loader_bg">
         <div className="loader"><img src="images/loading.gif" alt="#"/></div>
      </div> */}
    
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
                                 <a className="nav-link" href="/AddProduct">Add Products</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/FarmerViewProduct">Our Product</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/ViewCustomer">Our Customer</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" href="/Orderdetailsforfarmer">Delivery Details</a>
                              </li>
                              <li className="nav-item">

                                  <  Link className="nav-link" to="/logout"  > Logout </Link>
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
                           <span>Farmer</span>
                           <br/>
                           <h1> <span><strong>Mango Crazy !!!</strong></span></h1>
                           <a className="read_more" href="#about" role="button">AboutUs</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </header>
     
   
     
   </div>
    )
   }
   //{
     // alert("Please login first");
      //navigate("/FarmerSignIn");
   
    
  
  
  export default FarmerHome;