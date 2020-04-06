import React from "react";

import Grid from "@material-ui/core/Grid";

import useStyles from "./styles";
import MobilePost from "../MobilePost";

export default function Post() {
  const classes = useStyles();

  const posts = [
      {
        id: 1,
        type: "lost",
        mainImg: "https://pm1.narvii.com/6319/fb3d27f9b46ab2863b7a75d6d38605903bad056c_hq.jpg",
        title: "Gata",
        description: "Saiu de casa sozinha ontem"
      },
      {
        id: 2,
        type: "found",
        mainImg: "https://www.animesxis.com.br/wp-content/uploads/2014/09/Neko-Hanekawa.jpg",
        title: "Gata",
        description: "Apareceu miando no meu quintal"
      },
  ]

  return (
    <Grid container direction="column" alignItems="center">
      {posts.map(post => <MobilePost post={post} key={post.id} />)}
    </Grid>
  );
}
