const express = require('express');
const bcrypt = require('bcrypt')
const passport = require('passport')

const routeSignIn = express.Router();

routeSignIn.post('/auth/SignIn', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: "/SignIn",
  failureFlash: true,
  keepSessionInfo: false
}));


module.exports = routeSignIn;