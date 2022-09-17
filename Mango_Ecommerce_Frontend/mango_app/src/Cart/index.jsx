import { useLayoutEffect, useState, useEffect } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import CartList from "../CartList";
import Address from "../Address";
import Payment from "../Payment";
import Basket from "../Basket";
import PlaceOrder from "../PlaceOrder";
import jwt_decode from "jwt-decode";

import { URL } from "../../config";
import axios from "axios";

const Cart = () => {
  const [userId, setUserId] = useState(4);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [cartUpdater, setCartUpdater] = useState(false);
  const [cartDetails, setCartDetails] = useState([]);
  const [basketSbTotal, setBasketSbTotal] = useState();
  const [basketTotal, setBasketTotal] = useState();
  const [basketGst, setBasketGST] = useState();
  const steps = getSteps();

  function getSteps() {
    return ["1.Cart", "2.Address", "3.Payment"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <CartList
            cartDetails={cartDetails}
            cartUpdater={cartUpdater}
            setCartUpdater={setCartUpdater}
            userId={userId}
          />
        );
      case 1:
        return <Address userId={userId} />;
      case 2:
        return <Payment />;
      default:
        return "Something Went wrong Please Reload";
    }
  }

  const totalSteps = () => {
    return steps.length; //3
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps(); //3
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const buttonName = () => {
    if (activeStep === 0) {
      return "go to address";
    } else if (activeStep === 1) {
      return "Payment Mode";
    } else return "Place Order";
  };

  const fetchCart = () => {
    //use axios here and after that set Cart instead of sample
    const body = { userId };
    const url = `${URL}/cart/fetch-cart`;

    axios.post(url, body).then(async (response) => {
      const result = response.data;
      if (result["status"] === "success") {
        //console.log(result.data);
        setCartDetails(result.data);
        let Sbtotal = await result.data.reduce((current, item) => {
          return item.price * item.quantity + current;
        }, 0);
        setBasketSbTotal(Sbtotal);
        setBasketTotal(Sbtotal + Sbtotal * 0.18 + 70 - 100);
        setBasketGST(Sbtotal * 0.18);
      } else {
        //no items in the cart
        console.log("No items in the Cart");
      }
    });
  };

  useEffect(() => {
    //User/Cart pass UserId fetched from jwt
    fetchCart();
  }, [cartUpdater]);
  /* useEffect(async () => {
    await fetchCart();

    return () => {
      handleStep(0);
    };
  }, [cartUpdater]); */

  async function FetchUserDetails() {
    //will need to later fetch it from session storage
    // window.sessionStorage.setItem(
    //   'token',
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyIiwiRk4iOiJKb2huIiwiTE4iOiJQb2ludGluZyIsIlN0YXRlIjoiR29hIiwiUm9sZSI6MX0.9QH5Be4LN0fJEtWd-d923CBIf7o7DFFjyznZuC6EkLw'
    // )
    //console.log('inside fetch user details')
    /*  const Token = await window.sessionStorage.getItem("token");
    if (Token == null) {
      //setUserId(null);
      setUserId(1);
    } else {
      if (userId == null) {
        const DecodedToken = await jwt_decode(Token);
        //setUserId(DecodedToken.id);
        setUserId(1);
      }
    } */
  }
  //This hook will run everytime there is a change is UserId and will call FetchUserDetails function
  useLayoutEffect(() => {
    FetchUserDetails();
  }, [userId]);

  return (
    //userId === 4 && (
    <Box
      sx={[
        {
          minHeight: "800px",
          bgcolor: "#F6F9FC",
          width: "100%",
          display: "flex",
        },
        (theme) => ({
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }),
      ]}
    >
      <Box sx={{ width: "100%" }} >
        <br/>
        <Stepper
          nonLinear
          activeStep={activeStep}
          sx={{
            maxWidth: "60%",
            marginLeft: "15%",
            "& .MuiStepConnector-line": {
              borderColor: "#4cb0d4",
              borderTopWidth: "4px",
              minWidth: "30px",
            },
            "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
              borderColor: "#085E7D",
            },
            "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
              borderColor: "#085E7D",
            },
          }}
        >
          {steps.map((label, index) => (
            <Step key={label} sx={{ padding: "0px" }}>
              <Button
                variant="contained"
                onClick={handleStep(index)}
                completed={completed[index]}
                sx={{
                  bgcolor: "#085E7D",
                  borderRadius: "25px",
                  "&:hover": {
                    backgroundColor: "#085E7D",
                    boxShadow: "none",
                    textShadow: "none",
                  },
                }}
              >
                {label}
              </Button>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
      </Box>
      <Box
        sx={[
          {
            width: "35%",
            height: "300px",
            marginTop: "179px",
            marginRight: "6%",
          },
          (theme) => ({
            [theme.breakpoints.down("md")]: {
              marginX: "30%",
              marginY: "5%",
            },
          }),
        ]}
      >
        <Basket Sbtotal={basketSbTotal} total={basketTotal} gst={basketGst} />
        <div>
          {allStepsCompleted() ? (
            <div>
              <PlaceOrder />
              {handleReset}
            </div>
          ) : (
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  `Step ${activeStep + 1} already completed`
                ) : (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleComplete}
                  >
                    {buttonName()}
                  </Button>
                ))}
            </div>
          )}
        </div>
      </Box>
    </Box>
    // )
  );
};

export default Cart;
