import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  gridContainer: {
    width: "90vw",
    height: "80vh",
    [theme.breakpoints.up("sm")]: {
      width: "50vh",
    },
  },
  gridInput: {
    width: "100%",
    marginTop: "10px",
  },
  submitBtn: {
    width: "80%",
    marginTop: "20px",
  },
  registerLink: {
    textDecoration: "none",
    color: "black",
    marginTop: "25px",
  },
  avatar: {
    width: "150px",
    height: "150px",
    margin: "15px",
  },
  divider: {
    width: "100%",
  },
}));
