import * as React from 'react'
import Paper from '@mui/material/Paper'
import TableData from './TableData'
import { Grid } from '@mui/material'
import { Hidden } from '@mui/material'
import { useStyles } from '../Dashboard/Styles'
import { List, Box } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { green } from '@mui/material/colors'
import jwtDecode from "jwt-decode";

export default function CustomizedTables() {
  const classes = useStyles()

  let [orderDetails, setOrderDetails] = useState([])
  
  
  let [userId, setUserId] = useState(null)

  const handleUndefinedUserId = () => {

    const Token = sessionStorage.getItem('token')
    const DecodedToken = jwtDecode(Token)
  
    userId = DecodedToken.data.userId
    setUserId(DecodedToken.data.userId)

    console.log(userId);

  }
  
  
  const fetchOrderDetails = () => {
    const url = `http://localhost:4000/orders/${userId}`

    axios.get(url).then((response) => {
      const result = response.data

      if (result['status'] === 'success') {
        setOrderDetails(result['data'])
        orderDetails = result.data;
        console.log(orderDetails);
        console.log(orderDetails);
        console.log(orderDetails);
        console.log(orderDetails);
      } else {
        toast.error(result['error'])
      }
    })
  }

  useEffect(() => {
    handleUndefinedUserId()
    fetchOrderDetails()
  }, [])



  const itemsPerPage = 4
  const [page, setPage] = React.useState(1)

  // const [noOfPages] = React.useState(
  //   // productsCount = productDetails.length,
  //   console.log(productDetail),
  //   Math.ceil(productsCount / itemsPerPage));

  let ordersCount = orderDetails.length
  // console.log(productsCount)
  const noOfPages = Math.ceil(ordersCount / itemsPerPage)
  // console.log(noOfPages);

  const handleChange = (event, value) => {
    setPage(value)
  }

  const CssPagination = styled(Pagination)({
    '& .MuiPaginationItem-textPrimary.Mui-selected': {
      backgroundColor: green['800'],
    },
  })

  return (
    <div>
      <List dense compoent='span'>
        {/* <Hidden smDown> */}
        <Grid
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
              // marginLeft: '-11%',
              // fontSize: '14px',
              // lineHeight: '1',
              // margin: "0px 14px",
              width: '90%',
              // height: '50px',
            },
          })}
          container spacing={2}
          columns={15}
        >


          <Grid
            // className={classes.ordersTableHeader} 
            sx={(theme) => ({

              [theme.breakpoints.down("sm")]: {
                marginLeft: '1%',
                fontSize: '14px',
                lineHeight: '1',
                // margin: "0px 14px",
                // width: '90%',
                height: '50px',
              },
            })}

            item xs={3}>
            Order#
          </Grid>
          <Grid
            // className={classes.ordersTableHeader}
            sx={(theme) => ({

              [theme.breakpoints.down("sm")]: {
                marginLeft: '2%',
                fontSize: '14px',
                lineHeight: '1',
                // margin: "0px 14px",
                // width: '90%',
                height: '50px',
              },
            })}
            item xs={3}>
            Status
          </Grid>
          <Grid
            // className={classes.ordersTableHeader}
            sx={(theme) => ({

              [theme.breakpoints.down("sm")]: {
                marginLeft: '7%',
                fontSize: '14px',
                lineHeight: '1',
                // margin: "0px 14px",
                // width: '90%',
                height: '50px',
              },
            })}
            item xs={3}>
            Date
          </Grid>

          <Grid
            // className={classes.ordersTableHeader}
            sx={(theme) => ({

              [theme.breakpoints.down("sm")]: {
                marginLeft: '8%',
                fontSize: '14px',
                lineHeight: '1',
                // margin: "0px 14px",
                height: '50px',
              },
            })}
            item xs={3}>
            Total
          </Grid>

          <Hidden smDown>
            <Grid
              item xs={2}></Grid>
          </Hidden>
        </Grid>
        {/* </Hidden> */}
      </List>

      <List dense compoent='span'>
        {orderDetails
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((data) => {
            return <TableData row={data} />
          })}
      </List>

      {orderDetails.length === 0 ? (
        <h4
          style={{
            marginLeft: '35%',
            marginTop: '1%',
            color: 'red',
            size: '10%',
          }}
        >
          No Orders Placed
        </h4>
      ) : (
        <Box style={{ marginTop: '30px' }}>
          <CssPagination


            sx={(theme) => ({
              marginLeft: '20%',
              [theme.breakpoints.down("sm")]: {
                marginLeft: '2%',
              },
            })}

            // sx={{ color: '#227b00' }}
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            color='primary'
            size='large'
            showFirstButton
            showLastButton
            classes={{ ul: classes.paginator }}
          />
        </Box>
      )}
    </div>
  )
}
