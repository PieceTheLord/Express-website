const pg = require('../database/database')
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const routeAuthentication = express.Router();
routeAuthentication.get('/', (req, res) => {
    res.send('it`s work')
})

routeAuthentication.post('/reg', async (req, res) => {
    const name = req.body.NickName_auth;
    const mail = req.body.mail_auth;
    const hashedPsw = await bcrypt.hash(req.body.password_auth, 10);
    const tryRegistr = 'SELECT * FROM users WHERE nickname = $1';
    if (pg.query(tryRegistr, [name])){
        try{
            const insertQuery = 'INSERT INTO users(nickname, mail, psw) VALUES($1, $2, $3)';
            const backUpData = [name, mail, hashedPsw];
            pg.query(insertQuery, backUpData)
            .then(() => console.log("user authorized successfuly"))
            .catch(error => console.error(error));
        } catch {
            res.redirect('/Error404')
            console.log('something went wrong');
        } finally{
            pg.end()
            .then(() => console.log('connection success is ended'))
            .catch(error => console.error());
        }
    } else{
        res.send('This name is occupied');
    }
})

module.exports = routeAuthentication;
