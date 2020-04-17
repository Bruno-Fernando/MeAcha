import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import { IoIosChatbubbles } from "react-icons/io";

import useStyles from "./styles";

export default function Post() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Carousel className={classes.photos}>
          <img alt={"test"} src="https://pm1.narvii.com/6319/fb3d27f9b46ab2863b7a75d6d38605903bad056c_hq.jpg" />

          <img alt={"test"} src="https://www.animesxis.com.br/wp-content/uploads/2014/09/Neko-Hanekawa.jpg" />
        </Carousel>

        <div className={classes.description}>
          <Typography>Categoria</Typography>
          <Typography>Título</Typography>
          <Typography>Descrição</Typography>
          <Typography>Usuário</Typography>
        </div>
      </Grid>

      <Fab aria-label="chat" className={classes.fab}>
        <IoIosChatbubbles />
      </Fab>
    </>
  );
}
