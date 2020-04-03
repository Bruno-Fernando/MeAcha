import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import useStyles from "./styles";

import DeskNav from "../DeskNav";
import SideMenu from "../MobileSideMenu";
import MobileNav from "../MobileNav";

export default function ResponsiveDrawer() {
  const classes = useStyles();
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
        <SideMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </nav>
    </div>
  );
}
