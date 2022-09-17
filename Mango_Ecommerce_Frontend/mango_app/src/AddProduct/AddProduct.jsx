import React from 'react'
import {
  Grid,
  Paper,
  Button,
  ListItem,
  ListItemIcon,
  TextField,
} from '@mui/material'
import { useStyles } from '../Dashboard/Styles'

import { green } from '@mui/material/colors'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import jwtDecode from "jwt-decode";


export default function Product() {
  const classes = useStyles()

  // let [categoryError, setCategoryError] = useState(false);
  // let [subCategoryError, setSubCategoryError] = useState(false);
  // let [stockError, setStockError] = useState(false);
  // let [priceError, setPriceError] = useState(false);

  let categoryError = false
  let subCategoryError = false
  let stockError = false
  let priceError = false

 
  let [variety, setVariety] = useState('')
  let [stock, setStock] = useState(0)
  let [price, setPrice] = useState(0)

  
  let [userId, setUserId] = useState(null)

  const handleUndefinedUserId = () => {

    const Token = sessionStorage.getItem('token')
    const DecodedToken = jwtDecode(Token)
  
    userId = DecodedToken.data.userId
    setUserId(DecodedToken.data.userId)

    console.log(userId);

  }
  
  const navigate = useNavigate()




  const fetchVariety = () => {
    variety = null
    // let subCategoryObj = subCategoryData.filter(function (e1) { return e1.subCategoryId === subCategory })

    const subCategoryId = subCategory
    // console.log(subCategoryObj);

    // if (subCategoryObj[0].hasVariety === 1) {
    const url = `http://localhost:4000/product/get/variety/${subCategoryId}`

    axios.get(url).then((response) => {
      const result = response.data

      if (result['status'] === 'success') {
        setVarietyData(result['data'])
        // console.log(result['data']);
        setStaticPrice()
      } else {
        toast.error(result['error'])
      }
    })
    // }
  }



  const saveProduct = () => {
    if (variety === '') {
      variety = null
    }

    price = parseInt(price)
    stock = parseInt(stock)
    userId = parseInt(userId)

    const body = { variety, price, stock, userId }
    console.log(body)
    const url = `http://localhost:4000/product/add`

    axios.post(url, body).then((response) => {
      const result = response.data
      if (result['status'] === 'success') {
        // console.log(result);
        toast.success('Product added')
        navigate('/dashboard/product-list')
      } else {
        toast.error(result['error'])
      }
    })
  }

  useEffect(() => {
    handleUndefinedUserId()      
    
  }, [])

  const setMeasurement = () => {
    if (subCategoryData.length !== 0) {
      var measureDetails
      for (let index = 0; index < subCategoryData.length; index++) {
        if (subCategoryData[index].subCategoryId === subCategory) {
          measureDetails = subCategoryData[index]
        }
      }

      // console.log(measureDetails);

      if (measureDetails !== undefined) {
        if (measureDetails.measurementId == 1) {
          return 'Kg'
        }
        if (measureDetails.measurementId == 2) {
          return 'Litre'
        }
        if (measureDetails.measurementId == 3) {
          return 'Units'
        }
      }
    }
  }

  const setStaticPrice = () => {
    if (subCategoryData !== undefined && subCategoryData.length !== 0) {
      var staticPrice
      for (let index = 0; index < subCategoryData.length; index++) {
        if (subCategoryData[index].subCategoryId === subCategory) {
          staticPrice = subCategoryData[index]
        }
      }

      if (staticPrice !== undefined) {
        console.log(staticPrice)
        if (staticPrice.hasVariety !== 1) {
          return staticPrice.price // send subcategpry price
        } else {
          if (varietyData !== undefined) {
          }
          let varietyPrice

          for (let index = 0; index < varietyData.length; index++) {
            if (varietyData[index].varietyId === variety) {
              varietyPrice = subCategoryData[index].price
            }
          }
          console.log(varietyPrice)
          return varietyPrice
        }
      }
    }
  }

  const handleBlankSubmmit = (e) => {
    e.preventDefault()

    console.log(price)
    console.log(stock)
    console.log(category)
    console.log(subCategory)

    if (subCategory === 0) {
      subCategoryError = true
      toast.error('SubCategory cannot be empty')
      // setSubCategoryError(true);
    }
    if (category === '') {
      toast.error('Category cannot be empty')
      categoryError = true
      // setCategoryError(true);
    }
    if (stock <= 0) {
      stockError = true
      toast.error('Stock should be greater than 0')
      // setStockError(true);
    }
    if (price <= 0) {
      priceError = true
      toast.error('Price should be greater than 0')
      // setPriceError(true);
    }

    console.log(subCategoryError)
    console.log(categoryError)
    console.log(stockError)
    console.log(priceError)

    if (
      subCategoryError === false &&
      categoryError === false &&
      stockError === false &&
      priceError === false
    ) {
      saveProduct()
    }
  }

  const CssSelect = styled(Select)({
    '&:before': {
      borderColor: 'green',
    },
    '&:after': {
      borderColor: 'green',
    },
  })
  return (
    <div>
      <Button disabled>
        <ListItem
          // className={classes.selectedComponent}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize: "110%",
              marginLeft: '-35%',
              marginTop: '-15%',
            },
            marginLeft: '-110%',
            marginTop: '-25%',
            textTransform: "capitalize",
            fontFamily: "Open Sans,Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
            fontSize: "150%",
            color: 'black',
          })}
        >
          <ListItemIcon style={{ color: green['800'], marginTop: '-12px' }}>
            <AddBusinessIcon fontSize='large' />
          </ListItemIcon>
          <h1
          // className={classes.selectedComponent}

          >

            Add Product</h1>
        </ListItem>
      </Button>

      <Paper
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: "110%",
            marginLeft: '-8%',
          },
          borderRadius: '25px',
          width: '90%',
          marginTop: '1.5%',
          marginLeft: '-15%',
        })}
      >
        <Grid style={{ marginLeft: '25px', marginRight: '25px' }}>
          <form noValidate autoComplete='off' onSubmit={handleBlankSubmmit}>
            <Grid container spacing={2} columns={12}>
              <Grid
                style={{ marginTop: '4%', marginLeft: '25%' }}
                align='center'
                item
                xs={6}
              >
                <FormControl fullWidth>
                  <InputLabel
                    id='demo-simple-select-standard-label'
                    required
                    error={categoryError}
                  >
                    Category
                  </InputLabel>

                  <CssSelect
                    // className={classes.addProductEditProductTextField}
                    sx={(theme) => ({
                      width: '90%',
                      [theme.breakpoints.down("sm")]: {
                        width: '100%'
                      },
                    })}
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={category}
                    label='Category'
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  >
                    {categoryData.map((option) => (
                      <MenuItem key={option.name} value={option.categoryId}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </CssSelect>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              style={{ marginLeft: '15%' }}
              container
              spacing={2}
              columns={12}
            >
              <Grid style={{ marginTop: '20px' }} item xs={4}>
                <FormControl fullWidth>
                  <InputLabel
                    id='demo-simple-select-standard-label'
                    required
                    error={subCategoryError}
                  >
                    Sub Category
                  </InputLabel>

                  <Select
                    // className={classes.addProductEditProductTextField}
                    sx={(theme) => ({
                      width: '90%',
                      [theme.breakpoints.down("sm")]: {
                        width: '100%'
                      },
                    })}
                    disabled={subCategoryData.length === 0}
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={subCategory}
                    label='Category'
                    onChange={(e) => {
                      handleSubCategoryChange(e.target.value)
                    }}
                  >
                    {/* value can be chande to option.name */}
                    {subCategoryData.map((option) => (
                      <MenuItem
                        key={option.subCategoryId}
                        value={option.subCategoryId}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid style={{ marginTop: '20px' }} item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-standard-label' required>
                    {' '}
                    Variety{' '}
                  </InputLabel>

                  <Select
                    // className={classes.addProductEditProductTextField}
                    sx={(theme) => ({
                      width: '90%',
                      [theme.breakpoints.down("sm")]: {
                        width: '100%'
                      },
                    })}
                    disabled={varietyData.length === 0}
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={variety}
                    label='Category'
                    onChange={(e) => {
                      setVariety(e.target.value)
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  >
                    {varietyData.map((option) => (
                      <MenuItem key={option.varietyId} value={option.varietyId}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid
              style={{
                marginTop: '25px',
                marginLeft: '5%',
                marginBottom: '50px',
              }}
              container
              spacing={2}
              columns={12}
            >
              <Grid item xs={4}>
                <TextField
                  style={{ width: '70%' }}
                  required
                  error={stockError}
                  id='outlined-number'
                  label='Stock'
                  type='Number'
                  onChange={(e) => {
                    setStock(e.target.value)
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  style={{ width: '70%' }}
                  required
                  error={priceError}
                  label='Expected Price'
                  type='Number'
                  onChange={(e) => {
                    setPrice(e.target.value)
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  disabled
                  style={{ textAlign: 'center', width: '50%' }}
                  label={setMeasurement()}
                >
                  style={{ width: '60%' }}
                </TextField>
              </Grid>
            </Grid>

            <Grid
              style={{ marginTop: '20px', marginBottom: '6%' }}
              align='center'
            >
              <Button
                type='submit'
                style={{
                  width: '270px',
                  backgroundColor: 'rgb(50, 150, 70)',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                {' '}
                Save Product{' '}
              </Button>
            </Grid>
            <br></br>
          </form>
        </Grid>
      </Paper>
    </div>
  )
}
