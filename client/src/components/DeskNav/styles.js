import { makeStyles, fade } from "@material-ui/core/styles";

export default makeStyles(theme => ({
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
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "10px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  menuContainer: {
    display: "flex",
    alignItems: "center"
  },
  routesContainer: {
    display: "flex",
    alignItems: "center"
  },
  item: {
    width: "auto"
  },
  itemIcon: {
    minWidth: 0,
    padding: "3px"
  },
  itemLink: {
    textDecoration: "none",
    color: "#ffff"
  },
  perfilAvatar: {
    width: "25px",
    height: "25px"
  },
  logo: {
    textDecoration: "none",
    color: "#ffff"
  }
}));
