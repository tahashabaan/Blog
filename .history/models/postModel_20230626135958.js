const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    title:{
        type: 'string',
        required:true,
    },
    content:{

    },
    image:String,
    //user
},{timestamps:true})

module.exports = mongoose.model('posts', postSchema);