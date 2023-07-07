const path = require('path');

const express = require('express');

const upload= require('../util/uploadFile');

const {
    uploadPostImage,
    createService, 
    getService,
    getServiceById,
    updateServiceById,
    removeService } = require('../services/postService');

const router = express.Router();
console.log(uploadPostImage)
//     createService, 
//     getService,
//     getServiceById,
//     updateServiceById,
//     removeService)

router.route('/posts')
.post(
    upload.single('image'),
    uploadPostImage,
    createService
    )
.get(getService)


router.route('/posts/:postId')
.get(getServiceById)
.put(
    upload.single('image'),
    uploadPostImage,
    updateServiceById
    )
.delete(removeService)


router.get('/download',  (req, res, next) => {

});

router.get('/download/:filePath', (req, res, next) =>{
   const{filePath} = req.params;
   const filePathDown = path.join(__dirname, '../uploads/images', filePath);
   console.log(filePathDown)
   res.download(filePathDown)
})

module.exports = router;