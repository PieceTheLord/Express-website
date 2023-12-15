const pg = require('../database/database');
const express = require('express'); 
const bcrypt = require('bcrypt');


const routeAuthentication = express.Router();

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
        const validateUser = 'SELECT * FROM users WHERE  nickname = $1 or mail = $2';
        const validateUserCase = [name, mail];

        pg.query(validateUser, validateUserCase, (err, result) => {
            console.log(`name: ${name}, mail: ${mail}`);
            if (err) {
                console.error(err);
            }
            else if (result.rows.length > 0) {
                errors.push({ message: "Name or mail is invalid" })
                res.render("G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/authentication.ejs", { errors });
            } else {
                pg.query(insertDataQuery, insertDataCase, (err, result) => {
                    if (err) {
                        console.error(err);
                    }
                    else{
                        req.flash('success_msg', "You are registered. Now sign In");
                        res.redirect('/SignIn');
                    }
                    
                })
            }
        })
    }
})

module.exports = routeAuthentication;
