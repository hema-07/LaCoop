const express =require('express');
const bodyParser = require('body-parser');
const path =require('path');

//const api = require('./server/routes/api.js');

const port =3000;
const app = express();

app.use(express.static('./src/'));
app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  next();
});
app.use('/',(req,res,next)=>{
  console.log("inside route");
  next();
},api);

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
