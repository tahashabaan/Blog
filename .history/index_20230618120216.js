const express = require('express');
const multer  = require('multer');
const  mongoose= require('mongoose');

const app = express();


const storage = multer.memoryStorage({
    destination:function(req, file, cb){
        cb(null, 'uploads/');
    },

    filename:function(req, file, cb){
      cb(null, Date.now()+'-'+file.originalname);
    }
})

const fileFilter = (req, file , cb) => {
    const type = file.mimetype.split('/')[0];
    if (type !== 'image') {
        return cb(new Error('only image you can upload'), null)
    }
      cb(null, true);
}

const upload = multer({storage, fileFilter}); 


   app.set('view engine', 'ejs');

   app.get('/upload-file',(req, res, next)=> {
     res.render("upload" ,{
        page
     })

    app.post('/upload-file',upload.single('file'),(req, res, next)=> {
        console.log(req.file);
        const file = req.file;
        const type = file.mimetype.split('/')[0];
        console.log(type);
        })

        app.use('/',(req, res, next)=> {
            res.send('<div> <h1>hello from hom page</h1> <a href="/upload-file">upload file</a></div>')
            })

// mongoose.connect()
app.listen(3000, '127.0.0.2', () => console.log('connected database'+ 3000));