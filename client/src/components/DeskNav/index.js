import React from "react";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MdSearch } from "react-icons/md";
import InputBase from "@material-ui/core/InputBase";
import { Avatar } from "@material-ui/core";
import {
  IoMdLogOut,
  IoMdAddCircleOutline,
  IoIosChatbubbles
} from "react-icons/io";
import useStyles from "./styles";

function DeskNav() {
  const classes = useStyles();

  return (
    <Hidden xsDown implementation="css">
      <div className={classes.sectionDesktop}>
        <div className={classes.menuContainer}>
          <form className={classes.search} onSubmit={e => e.preventDefault()}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
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
            
            <ListItem button className={classes.item}>
              <ListItemIcon className={classes.itemIcon}>
                <IoMdLogOut size="25px" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </div>
    </Hidden>
  );
}

export default DeskNav;
