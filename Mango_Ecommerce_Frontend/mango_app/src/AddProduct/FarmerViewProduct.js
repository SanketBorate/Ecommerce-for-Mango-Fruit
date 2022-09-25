import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ViewProducts() {

  var fpro=JSON.parse(sessionStorage.getItem("farmerlogin"))
  let [user, setUser] = useState([]);
  //let email=sessionStorage.getItem('email');

  useEffect(() => { 
    axios
      .get("http://localhost:8080/farmer/getmango/"+ fpro.email)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:8080/farmer/remove/"+fpro.email)
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
            
              <h1 id="title">Product Table</h1>
              <center>
             <table border="2" bgcolor="white">
                <thead>
                  <tr>
                    <th>Mango Id</th>
                    <th>Variety</th>
                    <th>Description</th>
                    <th>Price/Dozen</th>
                    <th>Remove</th>
                    
                  </tr>
                </thead>
                
                <tbody>
                  {user.map((element) => {
                    return (
                      <tr>
                        <td>{element.mangoid}</td>
                        <td>{element.variety}</td>
                        <td>{element.description}</td>
                        <td>{element.priceperdozen}</td>
                        <td>< button type="button" id={element.mangoid}>Remove</button></td>
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

// import React from "react";
// import { useNavigate } from "react-router-dom";
// export default function ViewProducts(props) {
//   //const img = props.img;
//   const variety = props.variety;
//   const description = props.description;
//   const priceperdozen=props.priceperdozen;
//   const mangoid=props.mangoid;
//   //const dispatch= useDispatch()
//   let navigate=useNavigate();
//   function handler1()
//   {
//     //dispatch({type:"product_select",payload:{mangoid:id}})
//     sessionStorage.setItem('product_select',JSON.stringify({mangoid:id}))
//     navigate('/Order');
//   }
//   return (

//     <header className="full_bg">
//            <div className="header">
//              <div className="container-fluid">
//                <div className="row">
//                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
//                    <div className="full">
//                      <div className="center-desk">
//                        <div className="logo">
//                          <a href="index.html">
//                            <img src="../assets/images/logo.png" alt="#" />
//                         </a>
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                  <div>
//                    <h1 id="title">Product Table</h1>
//                    <table>
//                      <thead>
//                        <tr>
//                          <th>{mangoid}</th>
//                          <th>{variety}</th>
//                          <th>{description}</th>
//                          <th>{priceperdozen}</th>
//                        </tr>
//                    </thead>

//                    </table>
//                    <a href="#ViewProducts">
//               <span onClick={handler1}></span>
//             </a>
//                  </div>
//               </div>
//              </div>
//            </div>
//          </header>

//   );
// }
