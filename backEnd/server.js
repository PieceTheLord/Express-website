const express = require('express');
const flash = require('express-flash');
const expressSession = require('express-session');
const path = require('path')

const app = express()
var pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/'

app.set('view engine', 'ejs');
app.use(express.static(path.join(pathWork, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,    
}));
app.use(flash());

app.get('/', (req, res) => {
    res.render(pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/home.ejs')
});

const profileRoute = require('./routes/routing')
const reg = require('./authenticationPosts/registr');
const signIn = require('./authenticationPosts/signIn');
app.use('/',  [profileRoute, reg, signIn]);

app.listen(3000);

