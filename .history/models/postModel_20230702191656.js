
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
   user:{
    type: new mongoose.Types.ObjectId(),
    ref:''
   }

    //commentId
},{timestamps:true})

module.exports = mongoose.model('posts', postSchema);