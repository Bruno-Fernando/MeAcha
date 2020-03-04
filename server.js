const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./config/db');
connectDB();

const post = require('./routes/post');
const lostPost = require('./routes/lostPosts');
const foundPost = require('./routes/foundPosts');

const app = express();

app.use(express.json());

// GET login

// POST login

// PUT login

app.use('/', post);
app.use('/lost', lostPost);
app.use('/found', foundPost);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}...`));