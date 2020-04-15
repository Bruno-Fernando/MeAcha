import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
}));
