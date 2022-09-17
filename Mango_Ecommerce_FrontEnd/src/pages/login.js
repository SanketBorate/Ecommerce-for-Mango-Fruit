function Login() {
    return (
       <div className="main-layout inner_page">
        
          <div className="loader_bg">
             <div className="loader"><img src="images/loading.gif" alt="#"/></div>
          </div>
        
          <header className="full_bg">
            
             <div className="header">
                <div className="container-fluid">
                   <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                         <div className="full">
                            <div className="center-desk">
                               <div className="logo">
                                  <a href="index.html"><img src="images/logo.png" alt="#" /></a>
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
                                  <li className="nav-item ">
                                     <a className="nav-link" href="index.html">Home</a>
                                  </li>
                                  <li className="nav-item active">
                                     <a className="nav-link" href="about.html">About</a>
                                  </li>
                                  <li className="nav-item">
                                     <a className="nav-link" href="product.html">our product</a>
                                  </li>
                                  <li className="nav-item">
                                     <a className="nav-link" href="gallery.html">gallery</a>
                                  </li>
                                  <li className="nav-item">
                                     <a className="nav-link" href="contact.html">Contact Us</a>
                                  </li>
                               </ul>
                            </div>
                         </nav>
                      </div>
                   </div>
                </div>
             </div>
          
         
          </header>
         
          <div className="back_re">
             <div className="container">
                <div className="row">
                   <div className="col-md-12">
                      <div className="title">
                              <h2>About Us</h2>
                      </div>
                   </div>
                </div>
             </div>
          </div>
         
          <div id="about" className="about">
             <div className="container">
                <div className="row">
                   <div className="col-md-6 offset-md-3">
                      <div className="titlepage">
                        
                         <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu </span>
                      </div>
                   </div>
                   <div className="col-md-12">
                      <div className="about_img">
                         <figure><img src="images/about.png" alt="#"/></figure>
                         <a className="read_more" href="Javascript:void(0)"> Read More</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
         
          <footer>
             <div className="footer">
                <div className="container">
                   <div className="row">
                      <div className="col-md-8 offset-md-2">
                         <div className="newslatter">
                            <h4>Subscribe Our Newsletter</h4>
                            <form className="bottom_form">
                               <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                               <button className="sub_btn">subscribe</button>
                            </form>
                         </div>
                      </div>
                      <div className="col-sm-12">
                         <div className=" border_top1"></div>
                      </div>
                   </div>
                   <div className="row">
                      <div className="col-md-4">
                         <h3>menu LINKS</h3>
                         <ul className="link_menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="about.html"> About</a></li>
                            <li><a href="product.html">Our Product</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                         </ul>
                      </div>
                      <div className=" col-md-3">
                         <h3>TOP food</h3>
                         <p className="many">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                         </p>
                      </div>
                      <div className="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
                         <h3>Contact </h3>
                         <ul className="conta">
                            <li><i className="fa fa-map-marker" aria-hidden="true"></i> Location</li>
                            <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                            <li><i className="fa fa-mobile" aria-hidden="true"></i> Call : +01 1234567890</li>
                         </ul>
                      </div>
                   </div>
                </div>
                <div className="copyright">
                   <div className="container">
                      <div className="row">
                         <div className="col-md-10 offset-md-1">
                            <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a></p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </footer>
         
       
       </div>
    )
  }
  
  export default Login;