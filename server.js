const express = require('express');
const drinks = require('./models/drinks');
const foods = require('./models/food')

const app = express();
const PORT = 3000;

//Routes
app.get('/', (req, res)=>{
    res.send(`Welcome to the Gitpub App!`);
});

app.get('/drinks', (req,res)=>{
    res.render('drinks_index.ejs', {
        allDrinks: drinks,
        allFoods: foods,
    });
});


app.get('/drinks/:id', (req, res)=>{
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
    });
});

app.get('/foods/:id', (req, res) => {
    res.render('foods_show.ejs', {
        food: foods[req.params.id],
    });
});

//port
app.listen(PORT, ()=>{
    console.log(`Listening in port`, PORT);
});