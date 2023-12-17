const express = require('express');
const router = express.Router();

// Work directory of our files for front-end

// routes for our webpages
router.get('/Profile', checkNotAuthenticated, (req, res) => {
    res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/profileUser.ejs',
    { userName: req.user.nickname, userMail: req.user.mail });
    // console.log(req.user);
})

router.get('/Authentication', checkAuthenticated,(req, res) => {
    res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/authentication.ejs')
})

router.get('/SignIn', checkAuthenticated, (req, res) => {
    res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/signIn.ejs');
})

router.get('/Error404', (req, res) => {
    res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/Error404.ejs')
})

// export the router to connected it to our app
module.exports = router ;

function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){  
        return res.redirect('/profile');
    };
    next();
};

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    };

    res.redirect('/SignIn');
};