const {check} = require('express-validator');



exports.signUp = [
    check('name')
    .isEmpty()
    .withMessage()
]