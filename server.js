const express = require('express');
const mongoose = require('mongoose');

const app = express();

// GET login

// POST login

// PUT login

// GET achados e perdidos 

// GET achados/perdidos

// POST achados/perdidos

// PUT achados/perdidos

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}...`));