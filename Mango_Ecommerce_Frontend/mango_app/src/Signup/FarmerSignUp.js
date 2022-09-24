import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import axios from "axios";

//class component
export default class FarmerSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pwd: "",
      fname: "",
      lname: "",
      contactNo: "",
      // role:"",
      farmer: {},
      success: false,
    };
  }

  handleChange = (e) => {
    const nm = e.target.name;
    const val = e.target.value;
    this.setState({ [nm]: val });
  };

  FetchData = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/farmer/getallfarmers")
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        alert("user not fetched");
      });
  };

  submitData = (e) => {
    //   useEffect(()=>{ },[]);

    axios
      .post("http://localhost:8080/farmer/farmerregistration", {
        emailid: this.state.email,
        password: this.state.pwd,
        firstname: this.state.fname,
        lastname: this.state.lname,
        //  role: this.state.role,
        contactno: this.state.contactNo,
      })
      .then((response) => {
        console.log(response.data);
        alert("user added");
        window.location = "/FarmerSignIn";
      })
      .catch((e) => {
        console.log(e);
        alert("user not added");
      });
  };
  render() {
    return (
      <header>
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
                <h2>Farmer Registration Form</h2>
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
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={this.handleChange}
                          placeholder="Enter Email"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-6"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="pwd"
                          onChange={this.handleChange}
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-6"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="fname"
                          onChange={this.handleChange}
                          placeholder="Enter First Name"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-6"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lname"
                          onChange={this.handleChange}
                          placeholder="Enter Last Name"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-6"
                        controlId="formGroupPassword"
                      >
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="contactNo"
                          onChange={this.handleChange}
                          placeholder="Enter Contact Number"
                        />
                      </Form.Group>
                      <br />
                      {/* <Form.Group className="mb-6" controlId="formGroupPassword">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" name="role" onChange={this.handleChange} placeholder="Enter Contact Number" />
                    </Form.Group> */}
                      <Button
                        variant="primary"
                        type="button"
                        onClick={this.submitData}
                      >
                        Submit
                      </Button>
                      <br />
                      <br />
                      {/* <Button variant="primary" type="button" onClick={this.FetchData}>Get</Button> */}
                    </Form>
                    <p
                      style={{ display: this.state.success ? "block" : "none" }}
                    >
                      Farmer Registered Successfully
                    </p>
                    <a href="./FarmerSignIn" style={{ color: "#393f81;" }}></a>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

// import React, { useState } from "react";

// import axios from "axios";
// function FarmerSignUp()
// {

//     const [regestration, setRegestration] = useState({
//       firstname: "",
//       lastname: "",
//         email: "",
//         contact: "",
//        // user_name: "",
//        // address:"",
//         password: "",

//       });

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setRegestration({ ...regestration, [name]: value });
//   };

// const handleClick = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8080/farmer/farmerregistration",{
//         first_name : regestration.firstname,
//         last_name : regestration.lastname,
//         email_id: regestration.email,
//         contact_no: regestration.contact,
//        // user_name: regestration.user_name,
//        // address:regestration.address,
//         password: regestration.password
//     }).then((response) =>{
//         console.log(response.data);
//         alert("farmer added");
//     }).catch((e) => {
//         console.log(e);
//         alert("Farmer not added");
//     })
// }

// const getAll = (e) => {
//     e.preventDefault();
//     axios.get("http://localhost:8080/farmer/getallfarmers",{}).
//     then((response) => {
//         console.log(response.data)
//     }).catch((e) => {
//         console.log(e);
//         alert("Farmer not added")})
// }

//   return (

//       <>
//      fname <input type='text' name="firstname" onChange={handleChange}/>
//      lname <input type='text' name="lastname" onChange={handleChange}/>
//      email <input type='text' name="email" onChange={handleChange}/>
//     contact <input type='text' name="contact" onChange={handleChange}/>
//      {/* uname <input type='text' name="user_name" onChange={handleChange}/>
//     address  <input type='text' name="address" onChange={handleChange}/> */}
//     password  <input type='text' name="password" onChange={handleChange}/>
//       <input type='submit' value="add user" onClick={handleClick}/><br/>
//       <input type='submit' value="get all" onClick={getAll}/>

//     </>

//   );
// };

// export default FarmerSignUp;
