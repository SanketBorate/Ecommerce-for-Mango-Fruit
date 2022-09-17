import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Sidenav from "./Sidenav";
import { Routes, Route } from "react-router-dom";
import { useStyles } from "./Styles";
import { useNavigate } from "react-router";
import Product from '../Products/Product'
import Orders from '../Orders/Orders'
import AddProduct from '../AddProduct/AddProduct'
import EditProfile from '../EditProfile/EditProfile'
import OrderDetails from '../OrderDetails/OrderDetails'
import BlankPage from "../OrderDetails/BlankPage";
import EditProduct from '../EditProduct/EditProduct'
import { Hidden } from "@mui/material";
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ProductBlankPage from "../EditProduct/ProductBlankPage";
import { ThemeProvider } from "@mui/styles";
import EcommHeader from '../EcommHeader'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import jwtDecode from "jwt-decode";




export default function HeaderComponent() {

  const navigate = useNavigate();
  let [userId, setUserId] = useState(null) 

  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
 // const { userId } = sessionStorage
 // const userId = 1;
 useEffect(() => { handleUndefinedUserId() }, []);
  const handleUndefinedUserId = () => {
    const Token = sessionStorage.getItem('token')
    if (Token == null && Token == undefined  ) {
      setUserId(null)
      navigate('/signin')
    } else {
      const DecodedToken = jwtDecode(Token)
      console.log(DecodedToken)
      setUserId(DecodedToken.data.userId)
      userId  =DecodedToken.data.userId
    }
    // if (userId === undefined) {
    //   navigate('/signin')
    // }
  };
 

  let theme = createTheme();

  // else {

  return (
    <div>

      {/* <Menubar handleDrawerOpen={handleDrawerOpen} /> */}

      <Box bgcolor='#f6f9fc'>
        <Grid container columns={12} spacing={2}>

          <Grid item xs={2}
            sx={(theme) => ({
              height: '800px',
              background: '#f6f9fc', marginTop: '-12%',
              [theme.breakpoints.down("sm")]: {
                padding: 0,
                marginTop: "70px",
                width: '120%',
              },
            })}          
        // background :'red'}}
        >

              <Sidenav
                mobileOpen={mobileOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
              />

          
        </Grid>

        <Grid item xs={10}  >
          <Box
            sx={(theme) => ({
              minHeight: "100vh",
              height: "auto",
              background: "#f6f9fc",
              marginTop: "-20%",
              marginLeft: "-2%",
              width: '90%',
              padding: [4, 0, 2, 36],
              [theme.breakpoints.down("sm")]: {
                padding: 0,
                marginTop: "70px",
                width: '110%',
              },
            })} >

            <Hidden mdUp >
              <IconButton onClick={handleDrawerOpen} style={{ marginLeft: '70%', marginTop: '0%' }}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            {/* <Product/> */}
            <Routes>
              {/* <Route path='/order-details' element={<OrderDetails />} /> */}
              <Route path='/product-list' element={<Product />} />
              {/* <Route path="/add-product">
              <AddProduct />
          </Route> */}

              <Route path='/product-list/*' element={<ProductBlankPage />} />
              <Route path='/add-product' element={<AddProduct />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/orders/*' element={<BlankPage />} />
              <Route path='/edit-profile' element={<EditProfile />} />
            </Routes>
          </Box>
          {/* <EcommHeader></EcommHeader> */}
        </Grid>


      </Grid>
    </Box>
    </div >
  );
  // }
}