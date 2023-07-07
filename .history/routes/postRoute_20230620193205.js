const path = require('path');

const express = require('express');
const router = express.Router();


router.get('/upload-file', (req, res, next) => {
    res.render('upload', {
       pageTitle:'uploadFile',
    })
   })
   
router.get('/download',  (req, res, next) => {

});

router.get('/download/:filePath', (req, res, next) =>{
   const{filePath} = req.params;
   const filePathDown = path.join(__dirname, '../uploads/images', filePath);
   console.log(filePathDown)
   res.download(filePathDown)
})

module.exports = router;