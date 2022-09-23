import React, { useEffect } from "react";
import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Orderdetailsforfarmer()
{
    let [order,setOrder]=useState([]);
    var farmer=JSON.parse(sessionStorage.getItem("farmerlogin"));


        useEffect(()=>{
            axios
            .get("http://localhost:8080/customerproduct/farmer/placeorder/"+farmer.farmerid, {
              
            })
            .then((Response) => {
              if (Response.status === 200) {
                        setOrder(Response.data);
              } else {
                alert("Data not added");
              }
            })
            .catch((error) => {
              alert(error.message);
            });
        },[])

    return(
        <header >
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
              
                <h1 id="title">Product Table</h1>
                <center>
               <table border="2" bgcolor="white">
                  <thead>
                    <tr>
                      <th>Mango Name</th>
                      <th>Quantity</th>
                      <th>Customer Name</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {order.map((element,index) => {
                      return (
                        <tr key={index}>
                          <td>{element.mangoname}</td>
                          <td>{element.quantity}</td>
                          <td>{element.customername}</td>
                          <td>{element.address}</td>
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