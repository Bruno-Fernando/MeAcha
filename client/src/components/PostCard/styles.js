import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints, theme }) => ({
  root: {
    borderRadius: 16, // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",

    textDecoration: "none",

    width: "90%",

    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20,
    [breakpoints.up("sm")]: {
      width: "70%",
      flexDirection: "row",
      alignItems: "flex-start",
      paddingTop: 20,
    },
  },
  lost:{
    borderLeft: "3px solid red"
  },
  found: {
    borderLeft: "3px solid green"
  },
  media: {
    width: "88%",
    height: "50%",

    paddingBottom: "50%",
    borderRadius: 16,

    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("sm")]: {
      paddingBottom: "30%",
      width: "50%",
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));
