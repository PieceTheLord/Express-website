const express = require('express')
const path = require('path')
const app = express()

// const hostname = 'localhost';
const port = 3000;

app.use(express.static(path.join('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd', 'public')))

app.get('/', (req, res) => {
  res.render('G:/IT/JavaScriptTrain/ExploreNodeJs/SecondProject/frontEnd/views/')
})

app.listen(port)
