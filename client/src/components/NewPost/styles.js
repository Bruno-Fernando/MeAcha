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
    background: theme.primaryColor,
    color: "#fff",
    transition: "filter 0.2s",
    '&:hover': {
      filter: "brightness(110%)",
    }
  },
}));
