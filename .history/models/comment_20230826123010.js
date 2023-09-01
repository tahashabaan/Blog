const {Schema, model} = require('mongoose')


const commentSchema = new Schema({
    message:{
        type:String,
        required:true
    },
    userId:{
      type: Schema.Types.ObjectId,
      ref:'User',
      required: [true, 'authorId not exists']
    },
    postId:{
        type: Schema.Types.ObjectId,
        ref:'Post',
        required: [true, 'postId not exists']
    }
})

module.exports = model('comment', commentSchema);