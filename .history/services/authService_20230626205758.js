const userModel = require('../models/userModel')
exports.signUp = async(req, res, next) => {

    userModel.create(req.body)

}