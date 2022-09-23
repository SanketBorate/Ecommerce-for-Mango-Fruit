import React from "react";
import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart()
{
  var cart=  JSON.parse(sessionStorage.getItem("cartdetails"));
    var cust=JSON.parse(sessionStorage.getItem("custlogin"));
    function addDataHandler(event){
        var id=event.target.name;
       
        
        axios
      .post("http://localhost:8080/customerproduct/placeorder/"+id, {
        
      })
      .then((Response) => {
        if (Response.status === 200) {

          var selectedcart={};
          for(var i=0;i<cart.length;i++)
          {
              console.log(cart[i].id)
              if(cart[i].id==id)
              {
                console.log(cart[i].id)
                selectedcart=cart[i];
                  break;
              }
          }
          console.log("cart", cart);
          console.log("Mangoes", selectedcart );
          var total=parseInt(selectedcart.priceperdozen)*parseInt(selectedcart.quantity);

          alert("Örder Placed    "+
                    "Total Amount :"+total+" rs  "+
                    "Äddress :"+cust.address.flatno+","+cust.address.streetname+","
                    +cust.address.city+","+cust.address.district
                    +","+cust.address.state+"-"+cust.address.pincode);
          sessionStorage.setItem("cartdetails",JSON.stringify(Response.data));
          window.location='/CustomerHome';
        } else {
          alert("Data not added");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
    }

    return(
        <header className="full_bg">
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img src="../assets/images/logo.png" alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              
                <h1 id="title">Cart</h1>
                <center>
               <table border="2" bgcolor="white">
                  <thead>
                    <tr>
                      <th>Mango Name</th>
                      
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Price/Dozen</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {cart.map((element,index) => {
                      return (
                        <tr key={index}>
                          <td>{element.mangoname}</td>
                          <td>{element.description}</td>
                          <td>{element.quantity}</td>
                          <td>{element.priceperdozen}</td>
                          <td >
                          <input
                            type="button"
                            value="place order"
                            className="submit"
                            name={element.id}
                            id="submit"
                            onClick={addDataHandler}
                          />  
                          </td>
                        </tr>
                      );
                    })}
                    
                  </tbody>
                  
                </table>
                </center>
              </div>
            </div>
          </div>
        </div>
      </header>






    )
}