const path = require('path'); 

const express = require('express');
const cros = require('cros');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


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
app.use(cookieParser())
   app.use(postRoutes);
  
   app.use((req, res, next )=> {
    res.send('home')
   })
  connectDb()
  .then(res => {
    app.listen(5000,'127.0.0.1', (port) => console.log('connected database'+ 4000));
  })
  .catch(err => console.log(err))

