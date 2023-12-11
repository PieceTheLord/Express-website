const express = require('express');
const path = require('path')
const app = express()

var pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/'

app.set('view engine', 'ejs');
app.use(express.static(path.join(pathWork, 'public')));

app.get('/', (req, res) => {
    res.render(pathWork = 'G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/home.ejs')
})

app.listen(3000)