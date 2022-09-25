import React from "react";
function OurProduct() {
    return (
      <section id="p1">
      <div className="products">
         <div className="container">
            <div className="row">
               <div className="col-md-7">
                  <div className="titlepage">
                     <h2>Our Products</h2>
                     <span>The system introduces, promote and manage mangoes of different variety cutting middle man costs.This system ensures that the end user get the fresh product directly from the farmer for the best market price. 
                     </span>
                  </div>
               </div>
            </div>
           
            <div className="row"> 
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <div id="ho_bo" class="our_products">
                     <div className="product">
                        <figure><img src="../assets/images/pro1.png" alt="#"/></figure>
                     </div>
                     <h3>Alphanso</h3>
                     <span>Geographic Indication Maharashtra</span>
                     <p>Most popular Mango from India,Cultivate in Konkan Region of Maharashtra </p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <div id="ho_bo" className="our_products">
                     <div className="product">
                        <figure><img src="../assets/images/pro2.png" alt="#"/></figure>
                     </div>
                     <h3>Malada</h3>
                     <span>Geographic Indication West-Bengal</span>
                     <p>Most popular Mango from Eastern India,Cultivate in Malada Region of West Bengal</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <div id="ho_bo" className="our_products">
                     <div className="product">
                        <figure><img src="../assets/images/pro3.png" alt="#"/></figure>
                     </div>
                     <h3>Gir Kesar</h3>
                     <span>Geographic Indication Gujrat </span>
                     <br/>
                     <p>Most Popular Mango from Western India, Cultivate in Girnar Region of Gujrat </p> 
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <div id="ho_bo" className="our_products">
                     <div class="product">
                        <figure><img src="../assets/images/pro4.png" alt="#"/></figure>
                     </div>
                     <h3>Dasheri</h3>
                     <span>Geographic Indication Uttar Pradesh</span>
                     <p>Most Popular Mango of North India, Cultivate in Lucknow Uttar Pradesh</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
</section>
    )
  }
  
  export default OurProduct;
