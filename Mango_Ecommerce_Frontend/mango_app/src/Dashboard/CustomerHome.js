
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function CustomerHome() {
  var customer=JSON.parse(sessionStorage.getItem("custlogin")) 
  // var email= sessionStorage.getItem('email');
   let navigate=useNavigate(); 
  // console.log(email);
   useEffect(()=>{
      if(customer===null){
         alert("Please login first");
      navigate("/CustomerSignIn");
      }
   },[])
   
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
                                 <a className="nav-link" href="/Mangolist">View Products</a>
                              </li>
                             
                              {/* <li className="nav-item">
                                 <a className="nav-link" href="/AddtoCart"> Add to Cart</a>
                              </li> */}
                              <li className="nav-item">
                                 <a className="nav-link" href="/Cart">Cart</a>
                              </li>

                              {/* <li className="nav-item">
                                 <a className="nav-link" href="#c1">Delivery Details</a>
                              </li> */}
                              <li className="nav-item">
                                 <a className="nav-link" href="/logout">Logout</a>
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
                           <span>Customer</span>
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
  
  export default CustomerHome;
