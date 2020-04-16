import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints, theme }) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    [breakpoints.up("sm")]: {
      height: "90vh",
      flexDirection: "row",
    },
  },
  userInfo: {
    [breakpoints.up("sm")]: {
      width: "30vw",
    },
  },
  userPosts: {
    width: "90vw",
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [breakpoints.up("sm")]: {
      width: "70vw",
      height: "100%",

      flexDirection: "row",
      flexWrap: "wrap",
      
      overflow: "scroll",
      overflowX: "hidden",
    },
  },
  avatar: {
    width: "150px",
    height: "150px",
    margin: "15px",
  },
  divider: {
    width: "100%",
    [breakpoints.up("sm")]: {
      display: "none"
    },
  },
}));
