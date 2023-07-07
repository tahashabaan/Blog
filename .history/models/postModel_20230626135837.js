const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    title:{
        type: 'string',
        required:tr
    },
    image:String,
})

module.exports = mongoose.model('posts', postSchema);