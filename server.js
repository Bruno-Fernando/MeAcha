const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const post = require("./routes/post");
const lostPost = require("./routes/lostPosts");
const foundPost = require("./routes/foundPosts");
const user = require("./routes/user");
const auth = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); //alterar para que apenas dominios restritos possam acessar

// GET login

// POST login

// PUT login

app.use("/", post);
app.use("/lost", lostPost);
app.use("/found", foundPost);
app.use("/user", user);
app.use("/auth", auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}...`));
