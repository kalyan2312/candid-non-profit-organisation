var express = require('express');
var ejs = require('ejs');
var port = 8080;
var app = express();
const Pool = require('pg').Pool
var cors = require('cors')
const bodyParser = require("body-parser");    
app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'newpass',
  port: 5432,
})

pool.connect((err) => {
  if (err) throw err;
  console.log("Connected to postgreSQL");
});

app.get("/", (req, res) => {
  res.sendFile("./index.html", {
      root: __dirname,
  });
});


app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});
