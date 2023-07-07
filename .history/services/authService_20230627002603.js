const userModel = require('../models/userModel')
exports.signUp = async(req, res, next) => {
// عمل 
    userModel
    .create(req.body)
   .then((user) => {

    })

}