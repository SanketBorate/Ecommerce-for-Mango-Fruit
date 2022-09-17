import React from "react";
import Drawer from '@mui/material/Drawer';
import { Hidden } from "@mui/material";
import { useStyles } from "./Styles";
import { Paper } from '@mui/material';
import SidenavData from "./SidenavData";
import { blueGrey, green } from "@material-ui/core/colors";

export default function Sidenav({
  mobileOpen,
  handleDrawerOpen,
  handleDrawerClose, }) {
  const classes = useStyles();
  const { roleId } = sessionStorage

  
  return (
    <nav >
      
      <Hidden smDown >
        <Paper
          //  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '250px'
          // ,height :'200px' }}
          // className ={classes.drawerPaper}
          sx={(theme) => ({
            width: "250px",
            height: '450%',
            borderRadius: '15px',
            marginTop: "250px",
            background: "white",
          
            [theme.breakpoints.down("sm")]: {
              marginTop: "120px",
              height: '50%',
            },            
          })}

        >
          <SidenavData handleDrawerClose={handleDrawerClose} />
        </Paper>
      </Hidden>

      <Hidden mdUp >
        <paper style={{ height: '10px' }}>

          <Drawer
            variant='temporary' anchor={"left"} open={mobileOpen} onClose={handleDrawerOpen}
            // classes={{
            //   paper: classes.drawerPaper,
            // }}
            sx={(theme) => ({
              width: "250px",
              height: '450%',
              borderRadius: '15px',
              marginTop: "250px",
              background: "white",
              color: blueGrey["A400"],
              "& :hover , &:hover div": {
                color: green["700"],
              },
             
            })}
          >
            <SidenavData handleDrawerClose={handleDrawerClose} />

          </Drawer>

        </paper>
      </Hidden>

      {/* <Hidden smDown>
        <Drawer classes={{ paper: classes.drawerPaper, }} variant='permanent' open>
          <SidenavData handleDrawerClose={handleDrawerClose} />
        </Drawer>
      </Hidden> */}



    </nav>
  );
}
