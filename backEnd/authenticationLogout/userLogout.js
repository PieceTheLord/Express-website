const express = require('express');
// const flash = require('express-flash');

const RouteLogout = express.Router();

RouteLogout.get('/auth/logout', (req, res) => {
    req.logOut((err) => {
        if (err) {
            console.error(err);
            res.render("G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/Error404.ejs",
            {message: `${err}`});
        } else {
            req.flash("success_msg", "You have logged out");
            res.redirect('/SignIn');
        };
    }); 
});

module.exports = RouteLogout;