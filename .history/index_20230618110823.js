const express = require('express');
const multer  = require('multer');
const  mongoose= require('mongoose');

const app = express();

app.use();


const upload = multer({}); 

// mongoose.connect()
app.listen(3000, () => console.log('connected database'))