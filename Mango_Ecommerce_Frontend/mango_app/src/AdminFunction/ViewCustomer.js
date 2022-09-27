import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
//import React from "react";

export default function ViewCustomer(){
   
        let [user, setUser] = useState([]);
        useEffect(() => {
          axios
            .get("http://localhost:8080/admin/getallcustomers",{})
            .then((res) => {
              setUser(res.data);
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }, []);
      
   
   
   
    return (
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
                
                  <h1 id="title">Registered Customers</h1>
                  <center>
                 <table border="2" bgcolor="white">
                    <thead>
                      <tr>
                        <th>Customer Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact Number</th>
                        <th>Email Address</th>
                        <th>Password</th>
                        {/* <th></th>
                        <th>Email Address</th>
                        <th>Email Address</th> */}
                      </tr>
                    </thead>
                    
                    <tbody>
                      {user.map((element) => {
                        return (
                          <tr>
                            <td>{element.customerid}</td>
                            <td>{element.firstname}</td>
                            <td>{element.lastname}</td>
                            <td>{element.contactno}</td>
                            <td>{element.emailid}</td>
                            <td>{element.password}</td>
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
      );
    }
    
