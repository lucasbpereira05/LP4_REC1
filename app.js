const express = require('express');
const app = express();
const { json } = require('express')

app.set('view engine', 'ejs'); 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(3000, ()=>{ 
    console.log('SERVER execundo em http://localhost:3000');
})