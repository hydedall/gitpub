const express = require('express');
const drinks = require('./models/drinks');
const foods = require('./models/food')

const app = express();
const PORT = 3000;

//Routes
app.get('/', (req, res)=>{
    res.send(`Welcome to the Gitpub App!`);
});

//port
app.listen(PORT, ()=>{
    console.log(`Listening in port`, PORT);
});