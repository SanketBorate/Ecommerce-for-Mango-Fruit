import React from 'react'
import { Button, ListItem, ListItemIcon } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings';
import { green } from '@mui/material/colors';
import { Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import { TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useStyles } from '../Dashboard/Styles';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';



export default function OrderData(props) {
    const classes = useStyles();
    const { row } = props;
    // console.log(row);
    return (

        <Paper
            // className={classes.detailsRowPaperDimensions}
            sx={(theme) => ({
                marginTop: "3%", height: "100%", borderRadius: '5px', width: '90%',
                marginLeft :'-12%',
                
                [theme.breakpoints.down("sm")]: {
                    height: '50%'
                },
            })}
        >

            <Grid container spacing={2} columns={12}>

                <Grid
                    // className={classes.tableHeader}
                    sx={(theme) => ({
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '1.5',
                        lineWeight: 600,
                        color: 'rgb(125, 135, 156)',
                        margin: "5px 40px",
                        whiteSpace: 'normal',
                        marginLeft: '-2%',
                        fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                        flex: "1 1 0px",
                        [theme.breakpoints.down("sm")]: {
                            marginLeft: '-11%',
                            fontSize: '14px',
                            lineHeight: '1',
                            margin: "0px 14px",
                            width: '90%',
                            height: '50px',
                        },
                    })}
                    align='center' item xs={4} style={{ color: 'black' }}>
                    {row.name} {(row.hasVariety === 1 && row.varietyName != null) ? '[' + row.varietyName + ']' : ''}
                </Grid>

                <Grid
                    // className={classes.orderStatus}
                    sx={(theme) => ({
                        [theme.breakpoints.down("sm")]: {
                            marginLeft: '-11%',
                            fontSize: '14px',
                            lineHeight: '1',
                            margin: "0px 14px",
                            width: '90%',
                            height: '50px',
                        },
                        fontSize: '18px',
                        fontWeight: 600,
                        lineHeight: '1.5',
                        lineWeight: 600,
                        color: 'rgb(125, 135, 156)',
                        marginLeft: "4%",
                        whiteSpace: 'normal',
                        fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                        flex: "1 1 0px"
                    })}

                    item xs={4}>
                    {row.quantity + " "} X {row.hasVariety === 1 ? row.varietyPrice : row.subCatPrice}
                </Grid>

                <Grid 
                // className={classes.tableHeader}
                sx={(theme) => ({
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '1.5',
                    lineWeight: 600,
                    color: 'rgb(125, 135, 156)',
                    margin: "5px 40px",
                    whiteSpace: 'normal',
                    marginLeft: '-13%',
                    fontFamily: 'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                    flex: "1 1 0px",
                    [theme.breakpoints.down("sm")]: {
                        marginLeft: '-11%',
                        fontSize: '14px',
                        lineHeight: '1',
                        margin: "0px 14px",
                        width: '90%',
                        height: '50px',
                    },
                })}
                 item xs={4}>
                    {row.productsAmount}$
                </Grid>

            </Grid>
        </Paper>

    );
}
