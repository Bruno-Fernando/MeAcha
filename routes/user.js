const express = require('express')
const router = express.Router()
const User = require('../models/User')
const userValidation = require('../validationSchemas/user')

//post /user/register
router.post('/register', userValidation, (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            return res.status(500).json({
                    sucess: false,
                    error: "server error"
                }
            )
        } else if(user) {
            return res.status(400).json({
                sucess: false,
                error: "user already exists"
            })
        } else {
            
        }
    })
})
//get perfil /user e|ou /user/:id
//put perfil /user ou /user/:id
//delete perfil /user ou /user/:id