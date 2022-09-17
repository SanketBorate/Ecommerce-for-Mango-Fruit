import React from "react";
import { useEffect } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { blueGrey, green } from "@material-ui/core/colors";
import AddCardIcon from '@mui/icons-material/AddCard';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { useStyles } from "./Styles";
import { ListItemButton } from "@mui/material";
import jwtDecode from "jwt-decode";
import { useState } from "react";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();

  

  let [roleId,setRoleId] = useState();
  
  const handleUndefinedUserId = () => {

    const Token = sessionStorage.getItem('token')
    const DecodedToken = jwtDecode(Token)
  
    roleId = DecodedToken.data.roleId
    setRoleId(DecodedToken.data.roleId)
    

  }

  useEffect(() => { handleUndefinedUserId()  }, []);

  let listItemData = [];

  if (roleId == 1) {
    listItemData = [
      {
        label: "Orders", link: "orders", icon: <ShoppingCartIcon
          // className={classes.ordersIcon} 
          sx={(theme) => ({
            // backgroundColor: theme.palette.warning.main,
            color: theme.palette.primary.dark,
            '& .MuiSvgIcon-root': {
              fontSize: '1.7rem',
            },
          })}
        />,
      },
      {
        label: "Setting", link: "edit-profile", icon: <SettingsIcon
          // className={classes.settingIcon} 
          sx={(theme) => ({
            color: theme.palette.info.dark,
            '& .MuiSvgIcon-root': {
              fontSize: '1.7rem',
            },
          })}
        />
      }
    ]
  }
  else {
    listItemData = [

      {
        label: "Products", link: "product-list", icon: <FormatListBulletedIcon
          // className={classes.formatListIcon} 
          sx={(theme) => ({
            // backgroundColor: theme.palette.warning.main,
            color: theme.palette.error.dark,
            '& .MuiSvgIcon-root': {
              fontSize: '1.7rem',
            },
          })}
        />
      },
      {
        label: "Add New Product", link: "add-product", icon: <AddCardIcon
          // className={classes.addProductListIcon} 
          sx={(theme) => ({
            color: theme.palette.success.dark,
            '& .MuiSvgIcon-root': {
              fontSize: '1.7rem',
            },
          })}
        />
      },
      {
        label: "Orders", link: "orders", icon: <ShoppingCartIcon
          // className={classes.ordersIcon} 
          sx={(theme) => ({
            // backgroundColor: theme.palette.warning.main,
            color: theme.palette.primary.dark,
            '& .MuiSvgIcon-root': {
              fontSize: '1.7rem',
            },
          })}
        />,
      },
      {
        label: "Setting", link: "edit-profile", icon: <SettingsIcon
          // className={classes.settingIcon} 
          sx={(theme) => ({
            color: theme.palette.info.dark,
            '& .MuiSvgIcon-root': {
              fontSize: '1.7rem',
            },
          })}
        />
      },

    ];
  }
  return (
    <List>
      {listItemData.map((item) => (
        <ListItemButton size='small'
          // className={classes.navButton}
          sx={(theme) => ({
            width: " 90%",
            textTransform: "capitalize",
          })}
          onClick={() => handleDrawerClose()}>

          <ListItem component={NavLink} to={item.link}
            // className={classes.navlinks}
            sx={(theme) => ({
              color: blueGrey["A400"],
              "& :hover , &:hover div": {
                color: green["700"],
              },
            })}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>

        </ListItemButton>
      ))}
    </List>
  );
}