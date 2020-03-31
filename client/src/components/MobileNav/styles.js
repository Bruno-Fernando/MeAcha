import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center"
  },
  avatar: {
    paddingTop: "30px",
    paddingBottom: "30px"
  },
  perfilAvatar: {
    width: "50px",
    height: "50px"
  },
  itemLink: {
    textDecoration: "none",
    color: "#212F3C"
  },
}));
