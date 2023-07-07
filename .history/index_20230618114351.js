const express = require('express');
const multer  = require('multer');
const  mongoose= require('mongoose');

const app = express();


const storage = multer.diskStorage({
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
    return cb(new Error('only image you can upload'))
    }
}

const upload = multer({storage, fileFilter}); 



   app.get('/upload-file',(req, res, next)=> {
     res.send(
        '<form action="/upload-file" method="post" enctype="multipart/form-data"> <input type="file" name="file"/><button type="submit">Upload</button></form>')
    })

    app.post('/upload-file',upload.single('file'),(req, res, next)=> {
        console.log(req.file);
        const file = req.file;
        const type = file.mimetype.split('/')[0];
        console.log(type);
        })

        app.use('/home',(req, res, next)=> {
            res.send('<div> <h1>hello from hom page</h1> <a href="/upload-file">upload file</a></div>')
            })

// mongoose.connect()
app.listen(3000, () => console.log('connected database'+ 3000));