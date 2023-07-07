const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    title:
    image:String,
})

module.exports = mongoose.model('posts', postSchema);