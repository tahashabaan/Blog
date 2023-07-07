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
    title:{
        type: 'string',
        required:true,
    },
})