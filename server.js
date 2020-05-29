const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const router = require("./routes/routesManager");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); //alterar para que apenas dominios restritos possam acessar

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}...`));
