const mongoose = require('mongoose');

const  userSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required:true,
    },
    email:{
        type: 'string',
        required:true,
    },
    password:{
        type: 'string',
        required:true,
    },
})

module.exports = mongoose.model('users', userSchema)