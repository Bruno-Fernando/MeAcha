import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import PostCard from "../PostCard";

import useStyles from "./styles";

export default function Profile() {
  const classes = useStyles();

  const [user, setUser] = useState({
    name: "Bruno Fernando",
    email: "bruno@email.com",
    postsIds: [1, 2, 3],
  });

  const posts = [
    {
      id: 1,
      type: "lost",
      mainImg:
        "https://pm1.narvii.com/6319/fb3d27f9b46ab2863b7a75d6d38605903bad056c_hq.jpg",
      title: "Gata",
      description: "Saiu de casa sozinha ontem",
    },
    {
      id: 2,
      type: "found",
      mainImg:
        "https://www.animesxis.com.br/wp-content/uploads/2014/09/Neko-Hanekawa.jpg",
      title: "Gata",
      description: "Apareceu miando no meu quintal",
    },
    {
      id: 23,
      type: "found",
      mainImg:
        "https://www.animesxis.com.br/wp-content/uploads/2014/09/Neko-Hanekawa.jpg",
      title: "Gata",
      description: "Apareceu miando no meu quintal",
    },
    {
      id: 25,
      type: "found",
      mainImg:
        "https://www.animesxis.com.br/wp-content/uploads/2014/09/Neko-Hanekawa.jpg",
      title: "Gata",
      description: "Apareceu miando no meu quintal",
    },
    {
      id: 22,
      type: "found",
      mainImg:
        "https://www.animesxis.com.br/wp-content/uploads/2014/09/Neko-Hanekawa.jpg",
      title: "Gata",
      description: "Apareceu miando no meu quintal",
    },
  ];
  return (
    <>
      <div className={classes.container}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.userInfo}
        >
          <Avatar className={classes.avatar} />

          <Typography variant={"h6"}>{user.name}</Typography>

          <Typography variant={"body1"}>{user.email}</Typography>
        </Grid>

        {/* <Divider className={classes.divider} /> */}

        <div className={classes.userPosts}>
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
}

// TODO adicionar botoes para atualizar o post
