const express = require('express');
const path = require('path')
const app = express();
//const __dirname = path.resolve(path.dirname(''));
const port = 8000;

app.get('/',function (req,res){
   // res.send('hello')
    res.sendFile(path.join(__dirname+'/Homepage.html'))
})

app.get('/admission',function (req,res){
    //res.send('about');
    res.sendFile(path.join(__dirname+'/engg_admin.html'))
})

app.listen(port);
