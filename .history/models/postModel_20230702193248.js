
const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    title:{
        type: 'string',
        required:true,
    },
    content:{
        type: 'string',
        required:true,
    },
    image:{
        type: 'string',
        required:true,
    },
    user :{
        type: mongoose.Schema.,
        ref:'User'
    }

    //commentId
},{timestamps:true})

module.exports = mongoose.model('Post', postSchema);