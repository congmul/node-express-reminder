// Dependencies
const express = require('express');

const app = express();
const PORT = 5000;

// Data 
const yoda = {
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  };

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Main Page');
})

app.get('/login', (req, res) => {
    res.send('Log In page')
})

app.get('/login/:id/:password', (req, res) => {
    let userInput = `
    Your Id : ${req.params.id}
    <br><br>
    Your PassWord: ${req.params.password}
    `
    res.send(userInput);
})

app.get('/yoda', (req, res) => {
    res.json(yoda);
})


// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));