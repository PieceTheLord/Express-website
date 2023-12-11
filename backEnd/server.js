const express = require('express');
const path = require('path')

const app = express()
var pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/'

app.set('view engine', 'ejs');
app.use(express.static(path.join(pathWork, 'public')));
app.use(express.json())

app.get('/', (req, res) => {
    res.render(pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/home.ejs')
})

const Route = require('./routes/routing')

app.use('/', Route)

app.listen(3000)