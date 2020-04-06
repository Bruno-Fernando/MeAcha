import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import useStyles from "./styles";

export default function MobilePost(props) {
  const classes = useStyles();

  const { id, type, mainImg, title, description } = props.post;

  return (
    <>
      <br />
      <Card className={type === "lost" ? classes.lost : classes.found}>
        <CardActionArea component={Link} to={`post/${id}`}>
          <CardMedia className={classes.media} image={mainImg} title={title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              display="inline"
            >
              {type === "lost" ? "Perdido: " : "Encontrado: "}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h4"
              display="inline"
            >
              {title}
            </Typography>
            <Divider />
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
