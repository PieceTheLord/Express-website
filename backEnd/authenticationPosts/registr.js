const pg = require('../database/database')
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const routeAuthentication = express.Router();
routeAuthentication.get('/', (req, res) => {
    res.send('it`s work')
})

routeAuthentication.post('/auth/reg', async (req, res) => {
    const { name, mail, password} = req.body;
    const hashedPsw = await bcrypt.hash(password, 10);

    let errors = []

    if (password.length < 6) {
        errors.push({ message : "Password must be at least 7 characters" });
    }

    if (errors.length > 0) {
        res.render("G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/authentication.ejs", { errors });
    } else{
    pg.query('INSERT INTO users(nickname, mail, psw) VALUES($1, $2, $3)', [name, mail, hashedPsw], (err, result) => {
        
    });
    }


})

module.exports = routeAuthentication;
