const express = require('express');
const flash = require('express-flash');
const expressSession = require('express-session');
const passport = require('passport');
const path = require('path');

const initializePassport = require('./passport/passportConfig');
    
initializePassport(passport);

const app = express();
var pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/';

// Acitvate supprots of .ejs files
app.set('view engine', 'ejs');

// Deploying onto the server the public folder, which keeps design files
app.use(express.static(path.join(pathWork, 'public')));

// Apply supports of sends json files
app.use(express.json())

// Reject the encode of url addresses
app.use(express.urlencoded({ extended: false }));

// Set up the user seesion for authentication
app.use(expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,    
}));

// Initializing a user, hence get a data from the database
app.use(passport.initialize());

// Set up the session for out server
app.use(passport.session());

// Set up the flash method for our server
app.use(flash());

// Render main webpage
app.get('/', (req, res) => {
    res.render(pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/home.ejs');
});
// Import the routes' of our server
const profileRoute = require('./routes/routing');
const reg = require('./authenticationPosts/registr');
const signIn = require('./authenticationPosts/signIn');
const userLogout = require('./authenticationLogout/userLogout');
// Add the routes
app.use('/',  [profileRoute, reg, signIn]);
// Add logout function
app.use('/', [userLogout]);

// Start the server
app.listen(3000);




