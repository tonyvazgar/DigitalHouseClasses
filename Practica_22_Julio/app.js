const express = require('express');
const path    = require('path');
const app     = express();

// npm install --save-dev nodemon

app.use(express.static('public'));

app.listen(3030, () => {
    console.log("Estamos listos en el puuerto 3030");
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
    console.log("-->Mandando archiivo al front: " + path.join(__dirname, '/views/index.html'));
});
// /babbage -> Debe direccionar al recurso babbage.html
app.get('/babbage', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/babbage.html'));
    console.log("-->Mandando archiivo al front: " + path.join(__dirname, '/views/babbage.html'));
});
// ● /berners-lee -> Debe direccionar al recurso berners-lee.html.
app.get('/berners-lee', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'));
});
// ● /clarke -> Debe direccionar al recurso clarke.html.
app.get('/clarke', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/clarke.html'));
});
// ● /hamilton -> Debe direccionar al recurso hamilton.html.
app.get('/hamilton', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/hamilton.html'));
});
// ● /hopper -> Debe direccionar al recurso hopper.html.
app.get('/hopper', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/hopper.html'));
});
// ● /lovelace -> Debe direccionar al recurso lovelace.html.
app.get('/lovelace', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/lovelace.html'));
});
// ● /turing-> Debe direccionar al recurso turing.html.
app.get('/turing', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/turing.html'));
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 not found</h1>');
});