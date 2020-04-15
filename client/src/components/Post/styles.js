import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  photos: {
    width: "100vw",
    [theme.breakpoints.up("sm")]: {
      width: "50vw",
    },
  },
  description: {
    width: "100vw",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    [theme.breakpoints.up("sm")]: {
      width: "50vw",
      padding: "0",
    },
  },
  fab: {
    position: 'fixed',
    bottom: "5vw",
    right: "5vw",
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
