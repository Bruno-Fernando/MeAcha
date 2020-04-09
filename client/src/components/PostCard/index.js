import React from "react";
import { Link } from "react-router-dom";

import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

export default function PostCard(props) {
  const classes = useStyles();

  const { id, type, mainImg, title, description } = props.post;

  return (
    <>
      <br />
      
      <Card
        className={cx(
          classes.root,
          type === "lost" ? classes.lost : classes.found
        )}
        component={Link} to={`post/${id}`}
      >
        
        <CardMedia className={classes.media} image={mainImg} />
        
        <CardContent >
          
            <Typography component="p">09/04</Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              display="inline"
            >
              {type === "lost" ? "Perdido: " : "Encontrado: "}
              <Typography
                gutterBottom
                variant="h6"
                component="h4"
                display="inline"
              >
                {title}
              </Typography>
            </Typography>

            <Typography component="p">{description}</Typography>
          
        </CardContent>
      </Card>
    </>
  );
}
