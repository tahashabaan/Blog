const mongoose = require('mongoose');

const postSchema =mongoose.Schema({
    image:String,
})

module.exports = mongoose.model('posts', postSchema);