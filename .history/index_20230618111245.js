const express = require('express');
const multer  = require('multer');
const  mongoose= require('mongoose');

const app = express();

app.use();


const upload = multer({}); 

app.use((req, res, next)=> {
res.send('<div></div>')
})

// mongoose.connect()
app.listen(3000, () => console.log('connected database'+ 3000));