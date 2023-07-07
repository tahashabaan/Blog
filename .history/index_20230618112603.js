const express = require('express');
const multer  = require('multer');
const  mongoose= require('mongoose');

const app = express();




const upload = multer({dest:'uploads/'}); 



   app.get('/upload-file',(req, res, next)=> {
     res.send(
        '<form action="/upload-file" method="post" enctype="multipart/form-data"> <input type="file" name="file"/><button type="submit">Upload</button></form>')
    })

    app.post('/upload-file',upload.single('file'),(req, res, next)=> {
        console.log(req.file);
        })

        app.use((req, res, next)=> {
            res.send('<div> <h1>hello from hom page</h1> <a href="/upload-file">upload file</a></div>')
            })

// mongoose.connect()
app.listen(3000, () => console.log('connected database'+ 3000));