const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    titl
    image:String,
})

module.exports = mongoose.model('posts', postSchema);