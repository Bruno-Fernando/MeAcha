const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => res.send('lost posts'))
    .post((req, res) => res.send(req.body))

router
    .route('/:id')
    .get((req, res) => res.send(`lost get with id: ${req.params.id}`))
    .put((req, res) => res.send(`lost pus with id: ${req.params.id}`))
    .delete((req, res) => res.send(`lost delete with id: ${req.params.id}`));

module.exports = router;
