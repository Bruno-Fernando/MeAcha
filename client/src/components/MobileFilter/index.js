import React, { useState } from "react";
import { Link } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { FiFilter } from "react-icons/fi";

import useStyles from "./styles";

export default function FilterMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.menu}
      >
        <FiFilter />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" className={classes.itemLink}>
          <MenuItem onClick={handleClose}>Todos</MenuItem>
        </Link>
        <Link to="/lost" className={classes.itemLink}>
          <MenuItem onClick={handleClose}>Perdidos</MenuItem>
        </Link>
        <Link to="/found" className={classes.itemLink}>
          <MenuItem onClick={handleClose}>Encontrados</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
