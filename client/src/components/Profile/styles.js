import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userInfo: {
    width: "30vw",
    
  },
  userPosts: {
    height: "100%",
    width: "70vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    overflow: "scroll",
    overflowX: "hidden"
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
