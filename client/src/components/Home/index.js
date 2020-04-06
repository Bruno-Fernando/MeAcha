import React from "react";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import useStyle from "./styles";

import { MdMenu, MdSearch } from "react-icons/md";

import FilterMenu from "../MobileFilter";

export default function Home({ handleDrawerToggle }) {
  const classes = useStyle();

  return (
    <>
      <Hidden smUp implementation="css">
        <Grid container alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MdMenu />
          </IconButton>
          <Typography variant="h6" noWrap>
            MeAcha
          </Typography>
        </Grid>
      </Hidden>

      <Hidden smUp implementation="css">
        <Grid container>
          <IconButton
            type="submit"
            aria-label="search"
            style={{ color: "#ffff" }}
          >
            <MdSearch />
          </IconButton>
          <FilterMenu />
        </Grid>
      </Hidden>
    </>
  );
}
