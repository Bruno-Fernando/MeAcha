import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Bruno Fernando",
    email: "bruno@email.com",
    postsIds: [1, 2, 3],
  });
  return (
    <Grid>
      <Avatar />

      <Divider />
      <List>
        <ListItem>{user.name}</ListItem>
        <ListItem>{user.email}</ListItem>
      </List>
    </Grid>
  );
}
