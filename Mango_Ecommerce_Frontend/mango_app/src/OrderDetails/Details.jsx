import React from 'react'
import { Button, ListItem, ListItemIcon } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { green } from '@mui/material/colors'
import { Paper, Grid } from '@mui/material'
import { useNavigate } from 'react-router'
import { TextField } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useStyles } from '../Dashboard/Styles'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import OrderData from './OrderData'
import BlankPage from './BlankPage'
import { useLocation } from 'react-router'
import UserDetails from './UserDetails'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import jwtDecode from 'jwt-decode'

//create blank page and provide it as parent for navigation from order to order details
export default function Details() {
  //fetch userid from session storage

  let [userId, setUserId] = useState(null)

  const handleUndefinedUserId = () => {
    const Token = sessionStorage.getItem('token')
    const DecodedToken = jwtDecode(Token)

    userId = DecodedToken.data.userId
    setUserId(DecodedToken.data.userId)

    //console.log(userId);
  }

  const { state } = useLocation()
  const { order } = state

  // const navigate = useNavigate();
  //category data
  const [orderStatus] = useState([
    { statusId: 1, statusName: 'Processing' },
    { statusId: 2, statusName: 'Arriving Soon' },
    { statusId: 1, statusName: 'Delivered' },
  ])

  const [orderStatusError, setOrderStatusError] = useState(false)

  const handleBlankSubmmit = (e) => {
    e.preventDefault()

    setOrderStatusError(false)
    if (orderStatusError === '') {
      setOrderStatusError(true)
    }
  }

  let [body, setBody] = useState([])

  const fetchOrderDetails = () => {
    // await setTimeout(1000);
    const url = `http://3.217.73.222:4000/orders/order-details/${order.orderId}`

    axios.get(url).then((response) => {
      const result = response.data

      if (result['status'] === 'success') {
        setBody(result['data'])
      } else {
        toast.error(result['error'])
      }
    })
  }

  useEffect(() => {
    handleUndefinedUserId()
    fetchOrderDetails()
  }, [])

  const details = body[0]

  const classes = useStyles()

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  return (
    <Grid>
      <Paper
        // className={classes.orderDetailsHeader}
        sx={(theme) => ({
          borderRadius: '15px',
          width: '90%',
          marginTop: '2%',
          marginLeft: '-12%',

          background: '#f1f3f9',
          [theme.breakpoints.down('sm')]: {
            height: '80px',
            width: '90%',
          },
        })}
        style={{ marginBottom: '30px' }}
      >
        <Grid style={{ marginLeft: '5%', marginRight: '25px' }}>
          <form noValidate autoComplete='off' onSubmit={handleBlankSubmmit}>
            <Grid
              container
              spacing={2}
              columns={12}
              sx={(theme) => ({
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '1.5',
                lineWeight: 600,
                color: 'rgb(125, 135, 156)',
                margin: '5px 40px',
                whiteSpace: 'normal',
                fontFamily:
                  'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                flex: '1 1 0px',
                [theme.breakpoints.down('sm')]: {
                  marginLeft: '-11%',
                  fontSize: '14px',
                  lineHeight: '1',
                  margin: '0px 14px',
                  width: '90%',
                  height: '50px',
                },
              })}
            >
              {details !== undefined ? (
                <>
                  <Grid
                    //  className={classes.tableHeader}

                    item
                    xs={4}
                  >
                    OrderId
                    <Typography
                      variant='h5'
                      color={'black'}
                      sx={(theme) => ({
                        fontSize: '22px',
                        fontWeight: 600,
                        lineHeight: '1.5',
                        lineWeight: 600,
                        margin: '10px 40px',
                        fontFamily:
                          'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                        flex: '1 1 0px',
                        [theme.breakpoints.down('sm')]: {
                          marginLeft: '-11%',
                          fontSize: '14px',
                          lineHeight: '1',
                          margin: '10px 14px',
                          width: '90%',
                          height: '50px',
                        },
                      })}
                    >
                      {details.orderId}
                    </Typography>
                  </Grid>

                  <Grid
                    // className={classes.tableHeader}

                    item
                    xs={4}
                  >
                    PlacedOn
                    <Typography
                      variant='h5'
                      color={'black'}
                      sx={(theme) => ({
                        fontSize: '22px',
                        fontWeight: 600,
                        lineHeight: '1.5',
                        lineWeight: 600,
                        margin: '10px 40px',
                        marginLeft: '2px',
                        fontFamily:
                          'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                        flex: '1 1 0px',
                        [theme.breakpoints.down('sm')]: {
                          marginLeft: '-11%',
                          fontSize: '14px',
                          lineHeight: '1',
                          margin: '10px 14px',
                          width: '90%',
                          height: '50px',
                        },
                      })}
                    >
                      {formatDate(details.createdTimestamp)}
                    </Typography>
                  </Grid>

                  <Grid
                    // className={classes.tableHeader}

                    item
                    xs={4}
                  >
                    Status
                    <Typography
                      variant='h5'
                      color={'black'}
                      sx={(theme) => ({
                        fontSize: '22px',
                        fontWeight: 600,
                        lineHeight: '1.5',
                        lineWeight: 600,
                        marginLeft: '2px',
                        marginTop: '10px',
                        fontFamily:
                          'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                        [theme.breakpoints.down('sm')]: {
                          marginLeft: '-11%',
                          fontSize: '14px',
                          lineHeight: '1',
                          margin: '10px 14px',
                          width: '90%',
                          height: '50px',
                        },
                      })}
                    >
                      {orderStatus[details.statusId - 1].statusName}
                    </Typography>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid
                    // className={classes.tableHeader}

                    item
                    xs={4}
                  >
                    OrderId <h5 style={{ color: 'black' }}> # </h5>
                  </Grid>

                  <Grid
                    // className={classes.tableHeader}
                    sx={(theme) => ({
                      fontSize: '18px',
                      fontWeight: 600,
                      lineHeight: '1.5',
                      lineWeight: 600,
                      color: 'rgb(125, 135, 156)',
                      margin: '5px 40px',
                      whiteSpace: 'normal',
                      marginLeft: '-13%',
                      fontFamily:
                        'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                      flex: '1 1 0px',
                      [theme.breakpoints.down('sm')]: {
                        marginLeft: '-11%',
                        fontSize: '14px',
                        lineHeight: '1',
                        margin: '0px 14px',
                        width: '90%',
                        height: '50px',
                      },
                    })}
                    item
                    xs={4}
                  >
                    PlacedOn <h5 style={{ color: 'black' }}> # </h5>
                  </Grid>
                  <Grid
                    // className={classes.tableHeader}

                    item
                    xs={4}
                  >
                    Status <h5 style={{ color: 'black' }}> # </h5>
                  </Grid>
                </>
              )}
            </Grid>
          </form>
        </Grid>
      </Paper>

      <paper>
        {body.map((data) => {
          return <OrderData row={data} />
        })}
      </paper>

      <Grid container spacing={2} columns={12}>
        {/* <Grid item xs={6}> */}
          <UserDetails />
        {/* </Grid> */}

        <Grid item xs={6}>
          <Paper
            // className={classes.totalAmountOuterAddressPaper}
            sx={(theme) => ({
              borderRadius: '9px',
              height: '80%',
              width: '80%',
              marginTop: '40px',

              [theme.breakpoints.down('sm')]: {
                height: '170px',
                width: '80%',
                fontSize: '12px',
                marginBottom: '70px',
              },
            })}
            style={{ marginLeft: '50px' }}
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
                  margin: '5px 40px',
                  whiteSpace: 'normal',
                  // marginLeft: '-13%',
                  fontFamily:
                    'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                  flex: '1 1 0px',
                  [theme.breakpoints.down('sm')]: {
                    // marginLeft: '-11%',
                    fontSize: '14px',
                    lineHeight: '1',
                    margin: '0px 14px',
                    width: '90%',
                    height: '50px',
                  },
                })}
                item
                xs={4}
              >
                Total Amount
                <Paper
                  variant='outlined'
                  //  className={classes.totalAmountInnerAddressPaper}
                  sx={(theme) => ({
                    borderRadius: '5px',
                    height: '70%',
                    width: '270%',
                    marginTop: '10px',
                    [theme.breakpoints.down('sm')]: {
                      height: '270%',
                      width: '300%',
                      fontSize: '12px',
                      fontWeight: 500,
                    },
                  })}
                >
                  {details !== undefined ? (
                    <Grid style={{ marginLeft: '5%', marginTop: '25px' }}>
                      {
                        //console.log(details)
                      }
                      Total : ₹ {details.totalAmount}
                      <br />
                      <br />
                      <h6
                        // className={classes.paymentModeCashOnDeliveryStyle}
                        sx={(theme) => ({
                          fontSize: '14px',
                          [theme.breakpoints.down('sm')]: {
                            fontSize: '10px',
                          },
                        })}
                      >
                        {' '}
                        Payment Mode: Cash On Delivery
                      </h6>
                    </Grid>
                  ) : (
                    <>
                      <LinearProgress color='success' />
                      <h5>Fetching Data...</h5>
                    </>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
