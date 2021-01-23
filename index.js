var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=process.env.PORT || 3000;
app.get('/', function(req, res){
   res.send("Hello world!");
});
app.get('/data', function(req, res){
    res.send("Hello data!");
 });
 app.get('/data1', function(req, res){
    res.send("Hello data1!");
 })  ;
 app.get('/babay', function(req, res){
    res.send("Hello babayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy yyyyyyyyyy yenti sangathuluuuu!");
 });
 var x=0;
 app.post('/hehe',(req,res)=>{
    x=x+1;
     console.log(req.body,"heehhhehhehrhiii hiii hii",x)
   //   res.send("hiiiiiiiiiiii")
     app.get('/hehe',(req1,res1)=>{
        console.log(x)
        y={a:x}
         res1.send(y)
     })
 })
   
app.listen(PORT);