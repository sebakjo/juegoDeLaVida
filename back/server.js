const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/src/public')));

app.get('/*', function (req,res){
    res.sendFile(path.join(__dirname + '/src/public', 'index.html'))
});

app.listen(3000,()=>console.log('server 3000'));