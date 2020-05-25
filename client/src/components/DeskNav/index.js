import React from "react";
import { Link } from "react-router-dom";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InputBase from "@material-ui/core/InputBase";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { MdSearch } from "react-icons/md";
import {
  IoMdLogOut,
  IoMdAddCircleOutline,
  IoIosChatbubbles,
  IoMdLogIn,
} from "react-icons/io";

import useStyles from "./styles";

export default function DeskNav() {
  const classes = useStyles();
  
  const [loged, setLoged] = React.useState(localStorage.getItem("token"));

  const logOff = () => {
    localStorage.removeItem("token");
    setLoged(null);
  }

  const logedIn = (
    <>
      <List className={classes.routesContainer}>
        <Link to="/new/post" className={classes.itemLink}>
          <ListItem button className={classes.item}>
            <ListItemIcon className={classes.itemIcon}>
              <IoMdAddCircleOutline size="25px" />
            </ListItemIcon>
            <ListItemText primary="Criar Post" />
          </ListItem>
        </Link>

        <Link to="/chat" className={classes.itemLink}>
          <ListItem button className={classes.item}>
            <ListItemIcon className={classes.itemIcon}>
              <IoIosChatbubbles size="25px" />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
        </Link>

        <Link to="/user" className={classes.itemLink}>
          <ListItem button className={classes.item}>
            <ListItemIcon className={classes.itemIcon}>
              <Avatar className={classes.perfilAvatar} />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItem>
        </Link>

        <ListItem button className={classes.item} onClick={logOff}>
          <ListItemIcon className={classes.itemIcon}>
            <IoMdLogOut size="25px" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </>
  );

  const logedOut = (
    <>
      <List className={classes.routesContainer}>
        <Link to="/register" className={classes.itemLink}>
          <ListItem button className={classes.item}>
            <ListItemText primary="Cadastre-se" />
          </ListItem>
        </Link>

        <Link to="/login" className={classes.itemLink}>
          <ListItem button className={classes.item}>
            <ListItemIcon className={classes.itemIcon}>
              <IoMdLogIn size="25px" />
            </ListItemIcon>
            <ListItemText primary="LogIn" />
          </ListItem>
        </Link>
      </List>
    </>
  );

  return (
    <>
      <Hidden xsDown implementation="js">
        <Link to="/" className={classes.logo}>
          <Typography variant="h6" noWrap>
            MeAcha
          </Typography>
        </Link>
      </Hidden>
      <Hidden xsDown implementation="js">
        <div className={classes.menuContainer}>
          <form className={classes.search} onSubmit={(e) => e.preventDefault()}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />

            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <MdSearch />
            </IconButton>
          </form>

          {loged ? logedIn : logedOut}
        </div>
      </Hidden>
    </>
  );
}
