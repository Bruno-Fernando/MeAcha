import React from "react";
import { useHistory } from "react-router-dom";

import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import { MdArrowBack } from "react-icons/md";

export default function Back() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Hidden smUp implementation="js">
      <IconButton onClick={goBack}>
        <MdArrowBack />
      </IconButton>
    </Hidden>
  );
}
