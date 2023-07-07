const path = require('path');

const express = require('express');


const {
     } = require('../services/authService');

const {
    
} = require('../util/validate/au')
const router = express.Router();

router.route('/posts')
.post(
    postValidated,
    upload.single('image'),
    uploadPostImage,
    createService
    )
.get(getService)


router.route('/posts/:postId')
.get(postValidatedById,getServiceById)
.put(
    upload.single('image'),
    uploadPostImage,
    postValidatedById,
    updateServiceById
    )
.delete(postValidatedById,removeService)



module.exports = router;