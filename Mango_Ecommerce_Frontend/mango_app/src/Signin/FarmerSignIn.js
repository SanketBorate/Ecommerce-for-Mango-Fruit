import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import axios, { Axios } from "axios";
import Header from "../pages/header";

export default function CustomerSignIn() {
  let [user, setUser] = useState();
  let [email,setEmail] =useState("");
  let [pwd,setPassword] =useState("");
  let navigate = useNavigate();
  let [actor, setActor] = useState("");
  //const dispatch= useDispatch()

  function loginHandler() {
    //if (actor === "customer") {
    var user= {emailid:email,password:pwd}  
    console.log("customer", email);

    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    
      axios
        .post("http://localhost:8080/customer/customerlogin",user


       // crossOriginIsolated:true


        )
        .then((data) => {
          console.log(data.data);
          if (data.data !== null) {
            alert("success");
            sessionStorage.setItem("custlogin",JSON.stringify(data.data));
            navigate("/CustomerHome");
          } else {
            alert("failed");
            navigate("/CustomerSignIn");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("error occured");
        });
    // }
    
      
    
  }

  return (
    <>
    <Header></Header>  
      
        <section className="vh-100" style={{ "background-color": "#b6c6d8;" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ "border-radius": "1rem;" }}>
                  <div className="row g-0">
                    <div className="col-md-8 col-lg-6 d-none d-md-block">
                      <img
                        src="../assets/images/customer.jpg"
                        width="100%"
                        height="100%"
                        alt="login form"
                        style={{ "border-radius": "1rem 0 0 1rem;" }}
                      />
                    </div>
                    <div className="col-md-4 col-lg-6 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219;" }}
                            ></i>
                            <span
                              className="h1 fw-bold mb-0"
                              style={{ "text-align": "center" }}
                            >
                              Sign In
                            </span>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form2Example17"
                              name="email"
                              placeholder=" Email "
                              className="form-control form-control-lg"
                              onChange={(e) => {
                                setEmail( e.target.value );
                              }}
                            />
                            <label className="form-label" for="form2Example17">
                              Email address
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              placeholder="Password"
                              name="pwd"
                              className="form-control form-control-lg"
                              onChange={(e) => {
                                setPassword( e.target.value );
                              }}
                            />
                            <label className="form-label" for="form2Example27">
                              Password
                            </label>
                          </div>
                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="button"
                              onClick={loginHandler}
                            >
                              Sign In
                            </button>
                          </div>
                          <a className="small text-muted" href="#!">
                            Forgot password?
                          </a>
                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81;" }}
                          >
                            Don't have an account?{" "}
                            
                            <a
                              href="./CustomerSignUp"
                              style={{ color: "#393f81;" }}
                            >
                              Register here
                            </a>
                          </p>
                        </form>
                        <span>
                          {pwd}
                          {email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
}

