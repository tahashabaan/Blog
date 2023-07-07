const path = require('path'); 

const express = require('express');
// const cros = require('cros');
const dotenv = require('dotenv');

const connectDb = require('./util/database');
const postModel = require('./models/postModel');
const postRoutes = require('./routes/postRoute');


dotenv.config();

   const app = express();
   app.set('view engine', 'ejs');

   app.use(express.static(path.join(__dirname, 'public')));
   app.use(express.static(path.join(__dirname, 'uploads')));

   app.use(express.json());
   app.use(express.urlencoded({extended:true}));

   app.use(postRoutes);
  
  connectDb()
  .then(res => {
    app.listen(3000,'127.0.0.3', () => console.log('connected database'+ 3000));
  })
  .catch(err => console.log(err))

