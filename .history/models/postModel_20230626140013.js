const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    title:{
        type: 'string',
        required:true,
    },
    content:{

    },
    image:String,
    //userId
    //comme
},{timestamps:true})

module.exports = mongoose.model('posts', postSchema);