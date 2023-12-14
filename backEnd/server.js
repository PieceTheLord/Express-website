const express = require('express');
const path = require('path')

const app = express()
var pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/'

app.set('view engine', 'ejs');
app.use(express.static(path.join(pathWork, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render(pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/home.ejs')
});

const profileRoute = require('./routes/routing')
const reg = require('./authenticationPosts/registr');
const signIn = require('./authenticationPosts/signIn');
app.use('/',  [profileRoute, reg, signIn]);

app.listen(3000);

