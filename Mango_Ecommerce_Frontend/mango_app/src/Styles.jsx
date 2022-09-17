import { makeStyles } from "@mui/styles"
import { blueGrey, green,blue } from '@mui/material/colors';

import { createTheme } from '@mui/material/styles';
import { styled } from "@mui/system"

export const useStyles = styled((theme) => ({
  
  //wrapper of main contianer
  wrapper: {

    minHeight: "100vh",
    height: "auto",
    background: "#f6f9fc",
    marginTop: "100px",
    
    width: '90%',
    padding: [4, 0, 2, 36],
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      marginTop: "70px",
      width: '120%',
    },
  },

  paperStyle: {
    // styling for paper or signin component
    height: '600%',
    width: '30%',
    margin: "70px auto", //20 px from top and side auto
    borderRadius: '10px',
  },


  //Side nav
  drawerPaper: {
    width: "250px",
    height: '450%',
    borderRadius: '15px',
    marginTop: "250px",
    background: "white",

    [theme.breakpoints.down("sm")]: {
      marginTop: "120px",
      height: '50%',
    },
  },
  navlinks: {
    color: blueGrey["A400"],
    "& :hover , &:hover div": {
      color: green["700"],
    },

  },
  activeNavlinks: {
    color: blue["A700"],
    "& div": {
      color: blue["A700"],
    },
  },
  navButton: {
    width: " 100%",
    textTransform: "capitalize",
  },

  selectedComponent: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "150%",
    },
    marginLeft : '800%',
    textTransform: "capitalize",
    fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    fontSize: "150%",
    color: 'black',
    
  }
  ,

  //Products  table Headings
  tableHeader: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '1.5',
    lineWeight: 600,
    color: 'rgb(125, 135, 156)',
    margin: "5px 40px",
    whiteSpace: 'normal',
    marginLeft : '-12%',
    fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    flex: "1 1 0px",
    [theme.breakpoints.down("sm")]: {    
      marginLeft : '-9.5%',
      fontSize: '14px',
      lineHeight: '1',
      margin: "0px 14px",
      width: '90%',
      height: '50px',
    },
  },

  // save changes button of edit profile
  saveChanges: {
    marginTop: '8%', marginBottom: '6%', marginLeft: '25%',
    [theme.breakpoints.down("sm")]: {
      marginTop: '15%',
      marginLeft: '-10%',
      marginBottom: '8%'
    },
  },

  // order & product individual paper
  paperDimensions: {
    widows: "100px", marginTop: "25px", height: "100%", borderRadius: '10px',
    marginLeft : '-16%',
    width: '100%' ,
    [theme.breakpoints.down("sm")]: {
      height: '40%',
    },
  },

  //signup paper style
  signupPaper: {
    padding: 20,
    height: '60%',
    width: '30%',
    margin: "70px auto", //20 px from top and side auto
    borderRadius: '10px',
    [theme.breakpoints.down("sm")]: {
      height: '50%',
      width: '90%',
    },
  },

  //order status style
  orderStatus: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '1.5',
    lineWeight: 600,
    color: 'rgb(125, 135, 156)',
    margin: "5px 40px",
    whiteSpace: 'normal',
    fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    flex: "1 1 0px"
  },

  //order details header page
  orderDetailsHeader: {
    borderRadius: '15px', width: '90%', marginTop: '20px',
    background: '#f1f3f9',
    [theme.breakpoints.down("sm")]: {
      height: '100%',
      width: '90%',
    },
  },

  //adress paper in order details
  innerAddressPaper: {
    borderRadius: '5px', height: '160px', width: '240%', marginTop: '10px',
    [theme.breakpoints.down("sm")]: {
      height: '120px',
      width: '250%',
      fontSize: '12px',
      fontWeight: 500,
    },
  },
  outerAddressPaper: {
    borderRadius: '9px', height: '300px', width: '40%', marginTop: '40px',

    [theme.breakpoints.down("sm")]: {
      height: '170px',
      width: '40%',
      fontSize: '12px',
      marginBottom: '70px',
      marginLeft: '15px'
    },
  },

  //order details rows data 
  detailsRowPaperDimensions: {
    marginTop: "10px", height: "100%", borderRadius: '5px', width: '90%',
    [theme.breakpoints.down("sm")]: {
      height: '50%'
    },
  },

  //total amount outer paper

  totalAmountOuterAddressPaper: {
    borderRadius: '9px', height: '80%', width: '80%', marginTop: '40px',

    [theme.breakpoints.down("sm")]: {
      height: '170px',
      width: '80%',
      fontSize: '12px',
      marginBottom: '70px',
    },
  },

  totalAmountInnerAddressPaper: {
    borderRadius: '5px', height: '100%', width: '270%', marginTop: '10px',
    [theme.breakpoints.down("sm")]: {
      height: '270%',
      width: '300%',
      fontSize: '12px',
      fontWeight: 500,
    },
  },


  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  item: {
    padding: [4.8]
  },

  paginator: {
    justifyContent: "center",
    padding: "10px"
  }
  ,

  paymentModeCashOnDeliveryStyle: {
    fontSize: '14px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '10px',
    },
  },

  orderDetailHeaderData: {
    fontSize: '120%',
    color: 'black',
    [theme.breakpoints.down("sm")]: {
      fontSize: '110%',
    },
  },

  addProductEditProductTextField: {
    width: '90%',
    [theme.breakpoints.down("sm")]: {
      width: '100%'
    },
  },


  //orders table Data
  ordersTableData: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '1.5',
    lineWeight: 600,
    color: 'rgb(125, 135, 156)',
    margin: "5px 40px",
    whiteSpace: 'normal',
    marginLeft : '2%',
    fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    flex: "1 1 0px",
    [theme.breakpoints.down("sm")]: {
      marginTop: '10px',
      fontSize: '14px',
      lineHeight: '1',
      margin: "0px 14px",
      width: '90%',
      height: '50px',
    },
  },

  formatListIcon: {
    // backgroundColor: theme.palette.warning.main,
    color: theme.palette.error.dark,
    '& .MuiSvgIcon-root': {
      fontSize: '1.7rem',
    },
  },

  addProductListIcon: {
    // backgroundColor: theme.palette.warning.main,
    color: theme.palette.success.dark,
    '& .MuiSvgIcon-root': {
      fontSize: '1.7rem',
    },
  },
  ordersIcon: {
    // backgroundColor: theme.palette.warning.main,
    color: theme.palette.primary.dark,
    '& .MuiSvgIcon-root': {
      fontSize: '1.7rem',
    },
  },
  settingIcon: {
    // backgroundColor: theme.palette.warning.main,
    color: theme.palette.info.dark,
    '& .MuiSvgIcon-root': {
      fontSize: '1.7rem',
    },
  },

  paperMarginLeft: {

    widows: "100px",
    marginTop: "25px",
    height: "100%",
    borderRadius: '10px',
    marginLeft: '-16%',

    [theme.breakpoints.down("sm")]: {

      marginLeft: '-12%'
    },
},


paperMarginLeftAddProduct: {
  [theme.breakpoints.down("sm")]: {
    fontSize: "150%",
    marginLeft : '-50%',
    marginTop : '-2%',

  },
  marginLeft : '-122%',
  textTransform: "capitalize",
  fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  fontSize: "150%",
  color: 'black',
},

innerPaperMarginLeftAddProduct: {
  borderRadius: '25px', width: '80%', marginTop: '1.5%', 
  marginLeft: '-13%',
  [theme.breakpoints.down("sm")]: {
    marginLeft : '-8%',
    width: '93%'
  },

},

paperMarginOrders: {
  [theme.breakpoints.down("sm")]: {
    fontSize: "150%",
    // marginLeft : '-50%',
    // marginTop : '-2%',

  },
  marginLeft : '-15%',
  textTransform: "capitalize",
  fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  fontSize: "150%",
  color: 'black',
},


ordersTableHeader: {
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '1.5',
  lineWeight: 600,
  color: 'rgb(125, 135, 156)',
  margin: "5px 40px",
  whiteSpace: 'normal',
  marginLeft : '-13%',
  fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  flex: "1 1 0px",
  [theme.breakpoints.down("sm")]: {    
    marginLeft : '-11%',
    fontSize: '14px',
    lineHeight: '1',
    margin: "0px 14px",
    width: '90%',
    height: '50px',
  },
},

EditProfileComponent: {
  [theme.breakpoints.down("sm")]: {
    fontSize: "150%",
  },
  marginLeft : '-16%',
  textTransform: "capitalize",
  fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  fontSize: "150%",
  color: 'black',
  
},
innerPaperMarginLeftEditProfile: {
  borderRadius: '15px', width: '80%', marginTop: '20px',
  marginLeft: '-14%',
  [theme.breakpoints.down("sm")]: {
    marginLeft : '-8%',
    width: '93%'
  },

},
editProductSelected: {
  [theme.breakpoints.down("sm")]: {
    fontSize: "150%",
    marginLeft : '-50%',
  },
  marginLeft : '-120%',
  textTransform: "capitalize",
  fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  fontSize: "150%",
  color: 'black',

},
innerEditProductSelected: {
  [theme.breakpoints.down("sm")]: {
    fontSize: "150%",
    marginLeft : '-50px',
  },
  borderRadius: '15px',
  width: '90%',
  marginTop: '1.5%',
  marginLeft: '-15%',

},


  // orderDetailsHeader: {
  //   fontSize: '18px',
  //   fontWeight: 600,
  //   lineHeight: '1.5',
  //   lineWeight: 600,
  //   color: 'rgb(125, 135, 156)',
  //   margin: "5px 40px",
  //   whiteSpace: 'normal',
  //   fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  //   flex: "1 1 0px",
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: '14px',
  //     lineHeight: '1',
  //     margin: "0px 14px",
  //     width: '90%',
  //     height :'50px',    
  //   },
  // },
}));
