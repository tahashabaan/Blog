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
    if (file.mimetype !==file.mimetype.split  ){
        return cb(new Error('can upload only images', false));
    }
   cb(null, true);
}
module.exports = multer({storage, fileFilter})