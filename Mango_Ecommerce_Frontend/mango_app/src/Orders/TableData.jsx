import React from 'react'
import { useStyles } from '../Dashboard/Styles';
import { Paper } from '@mui/material';
import { IconButton, Button, Grid, Hidden } from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom'
import OrderDetails from '../OrderDetails/OrderDetails';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import { color } from '@mui/system';
import { makeStyles } from '@mui/styles'

export default function TableData(props) {

    const classes = useStyles();
    const navigate = useNavigate();

    const { row } = props;
    console.log(row);

    const dataStyle = {
        fontSize: '18px',
        color: 'rgb(43, 52, 69)',
        fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
    }

    const handleClickForOrderDetails = () => {
        console.log(row);
        navigate('order-details', { state: { order: row } });
        window.location.reload();
    }

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const [orderStatus] = useState([{ "statusId": 1, "statusName": "Processing" }, { "statusId": 2, "statusName": "Dispatched" }, { "statusId": 3, "statusName": "Delivered" }]);
    // const myStyles = makeStyles(theme => ({


    //     orderInfoIcon: {
    //         backgroundColor: 'white',
    //         color: theme.palette.info.dark,
    //         '& .MuiSvgIcon-root': {
    //             fontSize: '1.7rem',
    //         },
    //         marginTop: '-17px',
    //     },
    // }))

    // const myStyle = myStyles();


    return (
        <Paper
            // className={classes.paperDimensions}
            sx={(theme) => ({
                widows: "100px",
                 marginTop: "25px",
                  height: "100%", borderRadius: '10px',
                marginLeft: '-16%',
                width: '100%',
                [theme.breakpoints.down("sm")]: {
                    height: '40%',
                },
            })}

            onClick={handleClickForOrderDetails} >

            <Grid
                columns={15}
                sx={(theme) => ({
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '1.5',
                    lineWeight: 600,
                    color: 'rgb(125, 135, 156)',
                    margin: "5px 40px",
                    whiteSpace: 'normal',
                    marginLeft: '2%',
                    fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                    flex: "1 1 0px",
                    [theme.breakpoints.down("sm")]: {
                        // marginTop: '10px',
                        fontSize: '14px',
                        lineHeight: '1',
                        margin: "0px 14px",
                        width: '90%',
                        height: '50px',
                    },

                })}
                container spacing={2} >

                <Grid
                    // style={dataStyle}
                    sx={(theme) => ({
                        fontSize: '18px',
                        color: 'rgb(43, 52, 69)',
                        fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                        [theme.breakpoints.down("sm")]: {
                            marginLeft: '4%',
                            fontSize: '14px',
                            lineHeight: '1',
                            // margin: "0px 14px",
                            height: '50px',
                        },
                    })}
                    item xs={3}>
                    {row.orderId}
                </Grid>

                {

                    orderStatus[row.statusId - 1].statusId === 1 ?
                        <Grid
                            // className={classes.ordersTableData} 
                            sx={(theme) => ({
                                fontSize: '18px',
                                color: '#ff1a1a',
                                fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                                marginTop: '-1%',                                    
                                [theme.breakpoints.down("sm")]: {
                                    marginLeft: '-2%',
                                    fontSize: '14px',
                                    lineHeight: '1',
                                    marginTop: '-4%',                                    
                                    height: '50px',
                                },
                            })}
                            item xs={3}>
                            <h5 >{orderStatus[row.statusId - 1].statusName}</h5>
                        </Grid>
                        :

                        (orderStatus[row.statusId - 1].statusId === 2 ?

                            <Grid
                                // className={classes.ordersTableData}
                                sx={(theme) => ({
                                    fontSize: '18px',
                                    color: '#0000ab',
                                    fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                                    marginTop: '-1%',                                    
    
                                    [theme.breakpoints.down("sm")]: {
                                        marginLeft: '-2%',
                                        fontSize: '14px',
                                        lineHeight: '1',
                                        marginTop: '-4%',                                    
                                        height: '50px',
                                    },
                                })}
                                item xs={3}>
                                <h5 >{orderStatus[row.statusId - 1].statusName}</h5>
                            </Grid>
                            :
                            <Grid
                                // className={classes.ordersTableData}
                                sx={(theme) => ({
                                    fontSize: '18px',
                                    color: '#007603',
                                    fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                                    marginTop: '-1%',                                    
                                    [theme.breakpoints.down("sm")]: {
                                        marginLeft: '-2%',
                                        fontSize: '14px',
                                        lineHeight: '1',
                                        marginTop: '-4%',                                    
                                        height: '50px',
                                    },
                                })}


                                item xs={3}>
                                
                                <h5>{orderStatus[row.statusId - 1].statusName}</h5>
                            </Grid>
                        )
                }


                {/* {orderStatus[row.statusId - 1].statusName} */}
                <Grid style={{ fontSize: '16px', color: 'rgb(43, 52, 69)' }}
                    // className={classes.ordersTableData}
                    sx={(theme) => ({
                        fontSize: '18px',
                        color: 'rgb(43, 52, 69)',
                        fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                        [theme.breakpoints.down("sm")]: {
                            marginLeft: '7%',
                            fontSize: '14px',
                            lineHeight: '1',
                            // margin: "0px 14px",
                            height: '50px',
                        },
                    })}

                    item xs={3}>
                    {formatDate(row.createdTimestamp)}
                </Grid>

                <Grid style={dataStyle}
                    // className={classes.ordersTableData} 
                    sx={(theme) => ({
                        fontSize: '18px',
                        color: 'rgb(43, 52, 69)',
                        fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                        [theme.breakpoints.down("sm")]: {
                            marginLeft: '8%',
                            fontSize: '14px',
                            lineHeight: '1',
                            // margin: "0px 14px",
                            height: '50px',
                        },
                    })}
                    item xs={2}>
                    {row.totalAmount}$
                </Grid>

                <Hidden smDown>
                    <Grid
                        // className={classes.ordersTableData}
                        item xs={2}>
                        <IconButton
                            // className={myStyle.orderInfoIcon}
                            sx={(theme) => ({
                                backgroundColor: 'white',
                                color: theme.palette.info.dark,
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1.7rem',
                                },
                                marginTop: '-17px',

                            })}
                            onClick={handleClickForOrderDetails}>
                            <InfoIcon />
                        </IconButton>
                    </Grid>
                </Hidden>

            </Grid >
        </Paper >

    )
}

