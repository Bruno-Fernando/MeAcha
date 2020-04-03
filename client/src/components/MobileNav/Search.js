import React from "react";
import { useHistory } from "react-router-dom";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

import useStyle from "./styles";

import { MdSearch, MdArrowBack } from "react-icons/md";

export default function Search() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  const classes = useStyle();

  return (
    <Hidden smUp implementation="js">
      <IconButton onClick={goBack}>
        <MdArrowBack />
      </IconButton>
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
}
