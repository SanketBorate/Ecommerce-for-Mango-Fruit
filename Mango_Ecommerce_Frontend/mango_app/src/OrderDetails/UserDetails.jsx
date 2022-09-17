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
import jwtDecode from 'jwt-decode'

//create blank page and provide it as parent for navigation from order to order details
export default function UserDetails(props) {
  let [body, setBody] = useState([])

  let [bodyi, setBodyi] = useState([])

  let [userId, setUserId] = useState(null)

  const handleUndefinedUserId = () => {
    const Token = sessionStorage.getItem('token')
    const DecodedToken = jwtDecode(Token)

    userId = DecodedToken.data.userId
    setUserId(DecodedToken.data.userId)

    //console.log(userId);
  }

  const fetchUserDetails = () => {
    const body = { userId }
    const url = `http://3.217.73.222:4000/user/get-details`

    axios.post(url, body).then((response) => {
      const result = response.data

      if (result['status'] === 'success') {
        setBodyi(result['data'])
        bodyi = result['data']       
      } else {
        toast.error(result['error'])
      }
    })
  }

  useEffect(() => {
    handleUndefinedUserId()
    fetchUserDetails()
  }, [])

  const classes = useStyles()

  
    return (
      <>
      {bodyi.length !== 0 ? 
      <Paper
         
        sx={(theme) => ({
          borderRadius: '9px',
          height: '300px',
          width: '40%',
          marginTop: '40px',
          marginLeft: '-11%',
          [theme.breakpoints.down('sm')]: {
            height: '170px',
            width: '40%',
            fontSize: '12px',
            marginBottom: '70px',
            marginLeft: '-8%',
          },
        })}
      >
        <Grid
          
          sx={(theme) => ({
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '1.5',
            lineWeight: 600,
            color: 'rgb(125, 135, 156)',
            margin: '5px 40px',
            whiteSpace: 'normal',
            // marginLeft : '-13%',
            fontFamily:
              'Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
            flex: '1 1 0px',
            [theme.breakpoints.down('sm')]: {
              marginLeft: '-25%',
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
          Address
          <Paper
            variant='outlined'
            
            sx={(theme) => ({
              borderRadius: '5px', height: '160px', width: '240%', marginTop: '10px',
              [theme.breakpoints.down("sm")]: {
                height: '120px',
                width: '250%',
                fontSize: '12px',
                fontWeight: 500,              
              },
            })}
          >
            <Grid style={{ marginLeft: '5%', marginTop: '25px' }}>
              {bodyi[0].addressLine1 + ','}
              <br></br>
              {bodyi[0].addressLine2 + ','}
              <br></br>
              {bodyi[0].pincodeId}
              <br></br>
              Landmark : {bodyi[0].landmark + ','}
            </Grid>
          </Paper>
        </Grid>
      </Paper>
      :
      <h5>Fetching User Data</h5> 
      
      }
      </>
    )
  

  
}
