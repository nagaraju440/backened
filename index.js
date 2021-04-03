var express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress,ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
var Schema=mongoose.Schema;
var app = express();
var user;
const cors = require('cors');
app.use(cors())
app.use(bodyParser.json());
const url="mongodb+srv://balanagaraju:Nagaraju2506@cluster0.xka5z.mongodb.net/example?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log("data connected sucsessfully")
});
var ex=new Schema({
  name:String,
})
var ex1=mongoose.model('ex3',ex)
var ex2=new ex1({name:"ganesh"})

ex2.save((err,res)=>{
  console.log("name saved sucsessfully")
})
app.post('/users',(req,res)=>{
  //  var x=eval(req.body);
  console.log("sucsessfull")
  //  console.log(req.body.data,typeof(req.body.data),"this is my datar")
    user=req.body.data;
app.get('/users',(req1,res1)=>{
  res1.send(req.body.data)
      })
    })
const books = [
   {
     title: "Harry Potter and the Sorcerer's stone",
     author: 'J.K. Rowling',
     hi:"hi1",
   },
   {
     title: 'Jurassic Park',
     author: 'Michael Crichton',
     hi:"hi2",
   },
 ];
 const books1 = [
  {
    title: "praveen",
    author: 'html',
    hi:"hi andi nenu praveen",
  },
  {
    title: 'Hanuma',
    author: 'css',
    hi:"hi andi nenu hanuma",
  },
];
 const typeDefs = `
  type Query { books: [Book],books1:[Book1],user:[Users],ex2:[ex2] }
  type Book { title: String, author: String,hi:String }
  type Book1{ title: String, author: String,hi:String }
  type Users{userId:Int,id:Int,title:String,body:String}
  type ex2{name:String}
`;

// The resolvers
const resolvers = {
  Query: { books: () => books,books1:()=>books1 ,user:()=>user,ex2:()=>{return ex1.find({},(req,res)=>{console.log(res,"is res")})}},
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const PORT=process.env.PORT || 3000;
app.get('/', function(req, res){
   res.send("Hello world!");
});
app.get('/data', function(req, res){
    res.send("Hello data!");
 });
 app.get('/data1', function(req, res){
    res.send("Hello data1hvjebk!");
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
 const server = new ApolloServer({ typeDefs, resolvers });
 server.applyMiddleware({ app });
app.listen(PORT);


