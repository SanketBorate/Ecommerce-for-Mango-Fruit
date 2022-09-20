import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import axios from "axios";

export default function CustomerSignUp() {

    
    
        const [customer,setCustomer]=useState(
         {
            email:"",
            pwd:"",
            fname:"",
            lname:"",
            contactNo:"",
            flatNo:"",
            street:"",
            city:"",
            district:"",
            state:"",
            pincode:"",
         })
           // role:"",
        
    

   const  handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setCustomer({...customer,[name]:value})
    }

    
    //  FetchData = (e) => {
    //     e.preventDefault();
    //     axios.get("http://localhost:8080/customer/getallcustomers",{
    //         email:"",
    //         pwd:"",
    //         fname:"",
    //         lname:"",
    //         contactNo:"",
    //         flatNo:"",
    //         street:"",
    //         city:"",
    //         district:"",
    //         state:"",
    //         pincode:"",  
    //     }).
    //     then((response) => {
    //         console.log(response.data)
    //     }).catch((e) => {
    //         console.log(e);
    //         alert("user not fetched")})
    // }
        
    // submitData=(e)=>{
    // //   useEffect(()=>{ },[]);
  
        
       
const RegisterCustomer =(e)=>{
    console.log(customer)
    e.preventDefault();
    console.log("inside register function");
    
    axios.post("http://localhost:8080/customer/customerregistration",{
        emailid: customer.email,
        password: customer.pwd,
        firstname: customer.fname,
      
        last_name: customer.lname,
      //  role: this.state.role,
        contactno: customer.contactNo,
       address:{ flatno:customer.flatNo,
        streetname:customer.street,
        city:customer.city,
        district:customer.district,
        state:customer.state,
        pincode:customer.pincode,}
    }).then((response) =>{
        console.log(response.data);
        if(response.data==="Customer registered")
        {
            alert("user added")
            
    };
    }).catch((e) => {
        console.log(e);
        alert("user not added");
    })

}


    
        return(
            <div>
                <h2>Customer Registration Form</h2>
                {/* <h2>Customer Registration</h2>
                <form>
                    Enter Email-ID : <input type="text" name="email" onChange={this.handleChange}/><br/>
                    Enter Password : <input type="text" name="pwd" onChange={this.handleChange}/><br/>
                    Enter Name : <input type="text" name="name" onChange={this.handleChange}/><br/>
                    Enter Address : <input type="text" name="address" onChange={this.handleChange}/><br/>
                    Enter Contact Number : <input type="text" name="contact" onChange={this.handleChange}/><br/>
                    <input type="submit"  value="Register" onClick={this.submitData} />              
                </form> */}
                
                <Container>
                    <div class="vertical-center">
                    <Form>
                    <Form.Group className="mb-6" controlId="formGroupEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="pwd" onChange={handleChange} placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="fname" onChange={handleChange} placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lname" onChange={handleChange} placeholder="Enter Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" name="contactNo" onChange={handleChange} placeholder="Enter Contact Number" />
                    </Form.Group><br/>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Flat No</Form.Label>
                        <Form.Control type="text" name="flatNo" onChange={handleChange} placeholder="Enter Contact Number" />
                    </Form.Group><br/>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Street Name</Form.Label>
                        <Form.Control type="text" name="street" onChange={handleChange} placeholder="Enter Contact Number" />
                    </Form.Group><br/>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" onChange={handleChange} placeholder="Enter Contact Number" />
                    </Form.Group><br/>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" name="district" onChange={handleChange} placeholder="Enter Contact Number" />
                    </Form.Group><br/>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name="state" onChange={handleChange} placeholder="Enter Contact Number" />
                    </Form.Group><br/>
                    <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" name="pincode" onChange={handleChange} placeholder="Enter Contact Number" />
                    </Form.Group><br/>
                    {/* <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" name="role" onChange={this.handleChange} placeholder="Enter Contact Number" />
                    </Form.Group> */}
                    <Button variant="primary" type="button" onClick={RegisterCustomer}>
                        Submit
                    </Button><br/>
                    <br/>
                    {/* <Button variant="primary" type="button" onClick={this.FetchData}>Get</Button> */}
                    </Form>
                    {/* <p style={{ display: customer.success ? 'block' : 'none' }}>
                    Customer Registered Successfully
                    </p> */}
                    <a
                              href="./CustomerSignIn"
                              style={{ color: "#393f81;" }}
                            >
                            
                            </a>
                    </div>
                </Container>
                
            </div>
        )
                }          

            
