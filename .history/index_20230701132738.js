const path = require('path'); 

const express = require('express');
const cors = require('cors');
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
   app.use(cors())


   app.use(postRoutes);
  
   app.use((req, res, next )=> {
    res.send('home')
   })
  connectDb()
  .then(res => {
    const server = app.listen(5000,'127.0.0.1', (port) => console.log('connected database'+ 4000));
    const io = require('socket.io')(server);

    io.on('connection', (socket) =>{
       console.log('user is connect..');

    }) // io
  })
  .catch(err => console.log(err))
