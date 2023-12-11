const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const routeSignIn = express.Router();

routeSignIn.post('/login', async (req, res, next) => {

})


module.exports = routeSignIn;