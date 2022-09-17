import React from "react";

function Gallery() {
    return (
      <section id="g1">
      <div  className="gallery">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Gallery</h2>
                     <span>Some Farm Pictures and Mangoes Pictures from our farmers fields </span>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src="../assets/images/gallery1.png" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src="../assets/images/gallery2.png" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src="../assets/images/gallery3.png" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src="../assets/images/gallery4.png" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src="../assets/images/gallery5.png" alt="#"/></figure>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div className="gallery_img">
                     <figure><img src="../assets/images/gallery6.png" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </section>
 )
  }
  
  export default Gallery;