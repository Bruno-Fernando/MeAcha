import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MdMenu as MenuIcon } from "react-icons/md";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import { MdSearch as SearchIcon } from "react-icons/md";
import InputBase from "@material-ui/core/InputBase";
import { FiFilter } from "react-icons/fi";

import {
  IoMdLogIn,
  IoMdAddCircleOutline,
  IoIosChatbubbles
} from "react-icons/io";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Avatar } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "10px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Avatar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <IoMdLogIn />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <IoMdLogIn />
          </ListItemIcon>
          <ListItemText primary="Criar Post" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <IoMdLogIn />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const topMenu = (
    <div style={{ display: "flex", alignItems: "center" }}>
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
          <SearchIcon />
        </IconButton>
      </form>

      <List style={{ display: "flex" }}>
        <ListItem button style={{ width: "auto" }}>
          <ListItemIcon style={{ minWidth: 0, padding: "3px" }}>
            <IoMdLogIn size="25px" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>

        <Link to="/new/post" style={{ textDecoration: "none", color: "#ffff" }}>
          <ListItem button style={{ width: "auto" }}>
            <ListItemIcon style={{ minWidth: 0, padding: "3px" }}>
              <IoMdAddCircleOutline size="25px" />
            </ListItemIcon>
            <ListItemText primary="Criar Post" />
          </ListItem>
        </Link>

        <Link to="/chat" style={{ textDecoration: "none", color: "#ffff" }}>
          <ListItem button style={{ width: "auto" }}>
            <ListItemIcon style={{ minWidth: 0, padding: "3px" }}>
              <IoIosChatbubbles size="25px" />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
        </Link>

        <Link to="/user" style={{ textDecoration: "none", color: "#ffff" }}>
          <ListItem button style={{ width: "auto" }}>
            <ListItemIcon style={{ minWidth: 0, padding: "3px" }}>
              <Avatar style={{ width: "25px", height: "25px" }} />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: "none", color: "#ffff" }}>
              <Typography variant="h6" noWrap>
                MeAcha
              </Typography>
            </Link>
          </div>

          <Hidden smUp implementation="css">
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              style={{ color: "#ffff" }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              style={{ color: "#ffff" }}
            >
              <FiFilter />
            </IconButton>
          </Hidden>

          <Hidden xsDown implementation="css">
            <div className={classes.sectionDesktop}>{topMenu}</div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <nav>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
