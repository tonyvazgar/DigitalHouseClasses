const express = require('express');
const path    = require('path');
const app     = express();

// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'));
});