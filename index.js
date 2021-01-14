var express = require('express');
var app = express();
const PORT=process.env.PORT || 3000;
app.get('/', function(req, res){
   res.send("Hello world!");
});
app.get('/data', function(req, res){
    res.send("Hello data!");
 });
 app.get('/data1', function(req, res){
    res.send("Hello data1!");
 });
 app.get('/babay', function(req, res){
    res.send("Hello babayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy!");
 });
 
app.listen(PORT);