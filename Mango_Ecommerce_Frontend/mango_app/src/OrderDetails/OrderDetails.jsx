import React from 'react';
import { useEffect } from 'react';
import { useStyles } from '../Dashboard/Styles';
import { green } from '@mui/material/colors';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useLocation } from 'react-router'
import { ListItem, ListItemIcon } from "@material-ui/core"
import Details from './Details';


export default function OrderDetails(props) {

    const classes = useStyles();
    const { state } = useLocation();
    // const {id} = state;
    // console.log(state);


    return (
        <div>
              <ListItem

                sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "1500%",
                    },
                    fontSize: "15000%",
                    marginLeft: '-16%',
                    textTransform: "capitalize",
                    fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",

                    color: 'black',
                })}
            >
                <ListItemIcon 
                
                style={{ color: green["800"], marginTop: '-3%' ,marginLeft : '-17%',
            }}
                 
                 >
                    <ShoppingBagIcon fontSize='large' />
                </ListItemIcon>
                <h1
                    style= {{marginTop : '-2%',fontSize: "250%"}}
                    
                    sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "110%",
                        },                   
                    })}

                > Order Details </h1>

             </ListItem>  

            <Details />
        </div>
    )
}
