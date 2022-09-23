import React from "react";
import axios from "axios";
import { useState } from "react";
export default function MangoArraylist(props) {
  let [cart, setCart] = useState([]);
  let variety = props.name;
  let mangoid = props.id;
  let description = props.desc;
  let priceperdozen = props.price;
  let farmer_id = props.fid;
  let [qty, setQty] = useState(1);

  var date = new Date();
  date =
    date.getUTCFullYear() +
    "-" +
    ("00" + (date.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("00" + date.getUTCDate()).slice(-2);
  var time = new Date().toISOString().slice(11, 19);
  function CartHandler() {
    let custid = JSON.parse(sessionStorage.getItem("custlogin"));
    console.log(custid);
    axios
      .post("http://localhost:8080/cart/add", {
        mangoid: mangoid,
        farmerid: farmer_id,
        mangoname: variety,
        description: description,
        priceperdozen: priceperdozen,
        customerid: custid.customerid,
        quantity: qty,
        date: date,
      })
      .then((response) => {
        console.log(response.data);
        setCart(response.data);
        sessionStorage.setItem("cartdetails", JSON.stringify(response.data));
        alert("added to cart");
      })
      .catch((e) => {
        console.log(e);
        alert(e);
        //alert("registration failed")
        // window.location="";
      });
  }
  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div class="row container">
            <div class="row-2">
              <div class="column">
                <div class="card">
                  <img
                    src="../assets/images/pro1.png"
                    // style={"width:50% , height:50%"}

                    className="card-img-top"
                    alt=""
                  />
                  <h4 class="card-title">{variety}</h4>
                  <p>Description:{description}</p>
                  <p>Price:{priceperdozen}/-</p>

                  <label htmlFor="qty">Quantity :</label>
                  <input
                    type="number"
                    id="qty"
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  ></input>

                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={CartHandler}
                  >
                    Add to Cart
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
