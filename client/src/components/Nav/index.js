import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Grid from "@material-ui/core/Grid";

import { MdMenu, MdSearch } from "react-icons/md";

import { useTheme } from "@material-ui/core/styles";
import useStyles from "./styles";

import FilterMenu from "../FilterMobile";
import DeskNav from "../DeskNav";
import SideMenu from "../MobileSideMenu";
import MobileNav from "../MobileNav";

export default function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <MobileNav handleDrawerToggle={handleDrawerToggle} />
          <DeskNav />
        </Toolbar>
      </AppBar>
      <nav>
        <Hidden smUp implementation="js">
          <SwipeableDrawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            <SideMenu />
          </SwipeableDrawer>
        </Hidden>
      </nav>
    </div>
  );
}
