import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Button, ListItem, ListItemIcon } from "@mui/material"
import { useStyles } from '../Dashboard/Styles';
import { green } from '@mui/material/colors';
import OrderTable from './OrderTable'
import { Routes, Route } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';

export default function Product() {

    const classes = useStyles();
    return (
        <div>


            <ListItem 
            // className={classes.paperMarginOrders}
            sx={(theme) => ({
                [theme.breakpoints.down("sm")]: {
                    fontSize: "110%",
                    // marginLeft : '-50%',
                    // marginTop : '-2%',            
                  },
                  marginLeft : '-17%',
                  marginTop : '-5%',
                  textTransform: "capitalize",
                  fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
                  fontSize: "150%",
                  color: 'black',
            })}
            >
                <ListItemIcon style={{ color: green["800"], marginTop: '-12px'}} >
                    <ShoppingBagIcon fontSize='large' />
                </ListItemIcon >
                <h1 
                // className={classes.paperMarginOrders}
                  style ={{marginLeft :'10px'}}> Orders</h1>
            </ListItem>

           
            <OrderTable></OrderTable>
            {/* <OrderDetails /> */}

        </div>
    )
}
