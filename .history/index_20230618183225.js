const path = require('path'); 

const express = require('express');
const uploadMid  = require('./util/uploadFile');
const  mongoose= require('mongoose');
const sharp = require('sharp');

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

    app.post('/upload-file', uploadMid.single('file'),(req, res, next)=> {
        // console.log(req.file);
        const file = req.file;
         const fileName = Date.now() + '-' + file.originalname;
        sharp(file.buffer)
        .resize(600,800)
        .toFormat('jpg')
        .toFile(`uploads/images/${Date.now()}-${file.originalname}`)
        const type = file.mimetype.split('/')[0];
        console.log(type);
    })

        app.use('/',(req, res, next)=> {
            res.send('<div> <h1>hello from hom page</h1> <a href="/upload-file">upload file</a></div>')
            })

// mongoose.connect()
app.listen(4000, () => console.log('connected database'+ 3000));