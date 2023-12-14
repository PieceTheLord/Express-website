const pg = require('../database/database');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const routeAuthentication = express.Router();
routeAuthentication.get('/', (req, res) => {
    res.send('it`s work');
});

routeAuthentication.post('/auth/reg', async (req, res) => {
    const { name, mail, password} = req.body;
    

    let errors = [];

    if (password.length < 6) {
        errors.push({ message : "Password must be at least 7 characters" });
    };

    if (errors.length > 0) {
        res.render("G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/authentication.ejs", { errors });
    } else{
        const hashedPsw = await bcrypt.hash(password, 10);
        const insertDataQuery = 'INSERT INTO users(nickname, mail, psw) VALUES($1, $2, $3)';
        const insertDataCase = [name, mail, hashedPsw];
        const validateName = 'SELECT * FROM users WHERE  nickname = $1';
        const validateNameCase = [name];
        const validateMial = 'SELECT * FROM users WHERE mail = $1';
        const validateMailCase = [mail];

        function regUser(){
            pg.query(insertDataQuery, insertDataCase, (err, result) => {
                if (err) {
                    console.error(err);
                }
                req.flash("success_msg", "You are registered");
            })
        }

        pg.query(validateName, validateNameCase, (err, result) => {
            if (err) {
                console.error(err);
            }
            else if (result.rows.length > 0) {
                errors.push({ message: "Name or mail is invalid" })
                res.render("G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/authentication.ejs", { errors });
            } else {
                regUser();
            }
        })
    }
})

module.exports = routeAuthentication;
