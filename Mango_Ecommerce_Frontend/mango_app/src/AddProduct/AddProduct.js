import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
//import { Link } from "react-router-dom";

export default function AddProduct() {
  let [email_id, setEmail_id] = useState("");
  let [mango_variety, setMango_varity] = useState("");
  let [description, setDescription] = useState("");
  // let [stock, setstock] = useState("")
  let [selling_price, setSelling_price] = useState("");
  //let [image, setImage] = useState("")
  let navigate = useNavigate();

  function addDataHandler() {
    // console.log(item)
    axios
      .post("http://localhost:8080/farmer/addmango", {
        variety: mango_variety,
        description: description,
        //stock: stock,
        priceperdozen: selling_price,
        farmer: { emailid: email_id },
      })
      .then((Response) => {
        if (Response.status === 200) {
          alert(" Data added Successfully  ");
          navigate("/FarmerHome");
        } else {
          alert("Data not added");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <>
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
            </div>
          </div>
        </div>
      </header>

      <center>
        <section className="vh-100" style={{ "background-color": "#b6c6d8;" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ "border-radius": "1rem;" }}>
                  <div className="row g-0">
                    <div className="col-md-8 col-lg-6 d-none d-md-block">
                      <div className="border">
                        <div className="col-md-4 col-lg-6 d-flex align-items-center">
                          <div className="card-body p-4 p-lg-5 text-black">
                            <h1>
                              <u>Add Mango </u>
                            </h1>

                            <div className="form-row">
                              {/* <div className="form-group">
                <label htmlFor="f_name">Product Id:</label>
                <input type="text" maxLength={"25"} name="productid" id="p_id" placeholder="product name" required onBlur={(event)=>{setProduct_id(event.target.value)}} />
              </div> */}
                              <div className="form-outline mb-4">
                                <label htmlFor="l_name"> Mango Variety :</label>
                                <input
                                  type="text"
                                  maxLength={"100"}
                                  placeholder=""
                                  name="variety"
                                  id="v1"
                                  required
                                  onBlur={(event) => {
                                    setMango_varity(event.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div className="form-row">
                              <div className="form-group">
                                <label htmlFor="l_name">Description:</label>
                                <input
                                  type="textarea"
                                  maxLength={"100"}
                                  placeholder=""
                                  name="desc"
                                  id="d1"
                                  required
                                  onBlur={(event) => {
                                    setDescription(event.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div className="form-row">
                              <div className="form-group">
                                <label htmlFor="mobile">
                                  Price Per Dozen :
                                </label>
                                <input
                                  type="number"
                                  maxLength={"14"}
                                  name="cost"
                                  id="c1"
                                  required
                                  onBlur={(event) => {
                                    setSelling_price(event.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div className="form-row">
                              <div className="form-group">
                                <label htmlFor="mobile">Email :</label>
                                <input
                                  type="text"
                                  maxLength={"30"}
                                  name="email"
                                  id="e1"
                                  required
                                  onBlur={(event) => {
                                    setEmail_id(event.target.value);
                                  }}
                                />
                              </div>
                            </div>

                            <div className="form-submit">
                              <input
                                type="button"
                                value="Submit Form"
                                className="submit"
                                name="submit"
                                id="submit"
                                onClick={addDataHandler}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  );
}
