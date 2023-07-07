const path = require('path'); 

const express = require('express');
const uploadMid  = require('./util/uploadFile');
const sharp = require('sharp');
const cros = require('cros');
const dotenv = require('dotenv');

const connectDb = require('./util/database');
const postModel = require('./models/postModel');
const postRoutes = require('./routes/postRoute');

   const app = express();

   app.set('view engine', 'ejs');

   app.use(express.static(path.join(__dirname, 'public')));
   app.use(express.static(path.join(__dirname, 'uploads')));

   app.use(cros())
   app.use(express.json());
   app.use(express.urlencoded({extended:true}));

   app.use(postRoutes);
  
   app.use('/',(req, res, next)=> {
           res.render('index',  {pageTitle:'home page'})
      })

  connectDb()
  .then(res => {
    app.listen(4000, () => console.log('connected database'+ 3000));
  })
  .catch(err => console.log(err))

