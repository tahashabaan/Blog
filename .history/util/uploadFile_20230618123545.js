const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
    cb(null, '/uploads/images')
    },
    filename: function(req, file, cb){
    cb(null, Date.now() +'-'+ file.originalname)
    }
})
const fileFilter = function(req, file, cb){
    if (file.mi)
}
module.exports = multer({storage, fileFilter})