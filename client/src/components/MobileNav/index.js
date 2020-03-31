import React from "react";
import { Link } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar, Grid } from "@material-ui/core";

import {
  IoMdLogOut,
  IoMdAddCircleOutline,
  IoIosChatbubbles
} from "react-icons/io";

import useStyles from "./styles";

export default function FilterMenu() {
  const classes = useStyles();

  return (
    <Grid>
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
    </Grid>
  );
}
