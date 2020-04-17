import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./global.css";

import Routes from "./routes";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {

  const theme = createMuiTheme({
    primaryColor: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
    lostColor: "#cb2d3e",
    foundColor: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)"
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme} >
        <Routes />

      </ThemeProvider>
    </>
  );
}

export default App;
