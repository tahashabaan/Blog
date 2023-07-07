const path = require('path'); 

const express = require('express');
const uploadMid  = require('./util/uploadFile');
const  mongoose= require('mongoose');
const sharp = require('sharp');

const connectDb = require('./util/database');

   const app = express();

   app.set('view engine', 'ejs');

   app.use(express.static(path.join(__dirname, 'public')));
   app.use(express.json());
   app.use(express.urlencoded({extended:true}));

   app.get('/upload-file', (req, res, next) => {
     res.render('upload', {
        pageTitle:'uploadFile',
     })
    })

    app.post('/upload-file', uploadMid.single('file'),async(req, res, next)=> {
        // console.log(req.file);
        const file = req.file;
        const fileName = Date.now() + '-' + file.originalname;
        await 
        sharp(file.buffer)
        .resize(600,800)
        .toFormat('jpg')
        .toFile(`uploads/images/${fileName}`)

        pos

       
    })

        app.use('/',(req, res, next)=> {
            res.send('<div> <h1>hello from hom page</h1> <a href="/upload-file">upload file</a></div>')
            })

  connectDb()
  .then(res => {
    app.listen(4000, () => console.log('connected database'+ 3000));
  })
  .catch(err => console.log(err))

