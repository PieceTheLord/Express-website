const express = require('express');
const router = express.Router();

// Work directory of our files for front-end

// routes for our webpages
router.get('/profile', (req, res) => {
    res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/profileUser.ejs');
})

router.get('/authentication', (req, res) => {
    res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/authentication.ejs')
})

router.get('/signIn', (req, res) => {
    res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/signIn.ejs')
})

router.get('/Error404', (req, res) => {
    res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/Error404.ejs')
})

// export the router to connected it to our app
module.exports = router ;
