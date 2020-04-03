import React from "react";
import { Route, Switch } from "react-router-dom";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";

import { useHistory } from "react-router-dom";
import useStyle from "./styles";

import { MdMenu, MdSearch, MdArrowBack } from "react-icons/md";

import FilterMenu from "../FilterMobile";

export default function Test({ handleDrawerToggle }) {
  const classes = useStyle();

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  const home = (
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
  const search = (
    <Hidden smUp implementation="js">
      <form className={classes.search} onSubmit={e => e.preventDefault()}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />

        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <MdSearch />
        </IconButton>
      </form>
    </Hidden>
  );
  const back = (
    <Hidden smUp implementation="js">
      <IconButton onClick={goBack}>
        <MdArrowBack />
      </IconButton>
    </Hidden>
  );

  return (
    <Switch>
      <Route path="/" exact>
        {home}
      </Route>
      <Route path="/search">{search}</Route>
      <Route>{back}</Route>
    </Switch>
  );
}
