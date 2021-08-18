const express = require('express');
const path    = require('path');
const app     = express();

// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));

let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Servidor funcionando en ' + port);
});
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
});