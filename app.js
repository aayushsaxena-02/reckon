const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require("cookie-Parser");

const app = express();
app.use(cookieParser());
app.use(express.json());

dotenv.config({path:'./config.env'});
// app.use(express.static("public"));

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log("connection successful");
}).catch((err) => console.log(err));


app.use(require('./router/auth'));

const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV == "production"){
app.use(express.static("client/build"));
}

app.listen(PORT, function() {
  console.log("Server started on port 8000");
});