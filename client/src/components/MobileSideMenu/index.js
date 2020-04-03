import React from "react";
import { Link } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import {
  IoMdLogOut,
  IoMdAddCircleOutline,
  IoIosChatbubbles
} from "react-icons/io";

import { useTheme } from "@material-ui/core/styles";
import useStyles from "./styles";

export default function MobileSideMenu({ mobileOpen, handleDrawerToggle }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
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
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.avatar}
        >
          <Link to="/user" className={classes.itemLink}>
            <Avatar className={classes.perfilAvatar} />
          </Link>
        </Grid>

        <Divider />
        <List>
          <Link to="new/post" className={classes.itemLink}>
            <ListItem button>
              <ListItemIcon>
                <IoMdAddCircleOutline size="20px" />
              </ListItemIcon>
              <ListItemText primary="Criar Post" />
            </ListItem>
          </Link>

          <Link to="/chat" className={classes.itemLink}>
            <ListItem button>
              <ListItemIcon>
                <IoIosChatbubbles size="20px" />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
          </Link>

          <ListItem button>
            <ListItemIcon>
              <IoMdLogOut size="20px" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <Divider />
      </SwipeableDrawer>
    </Hidden>
  );
}
