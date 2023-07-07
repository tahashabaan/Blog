const userModel = require('../models/userModel')
exports.signUp = async(req, res, next) => {
// عمل جديد من البدايه
    userModel
    .create(req.body)
   .then((user) => {

    })

}