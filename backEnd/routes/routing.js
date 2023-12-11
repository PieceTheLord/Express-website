const express = require('express');
const router = express.Router();

// Work directory of our files for front-end
var pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/';

// routes for our webpages
router.get('/profile', (req, res) => {
    res.render(pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/profileUser.ejs');
})

router.get('/authentication', (req, res) => {
    res.render(pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/authentication.ejs')
})

router.get('/signIn', (req, res) => {
    res.render(pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/signIn.ejs')
})

// export the router to connected it to our app
module.exports = router ;
