const userModel = require('../models/userModel')
exports.signUp = async(req, res, next) => {
// ulg 
    userModel
    .create(req.body)
   .then((user) => {

    })

}