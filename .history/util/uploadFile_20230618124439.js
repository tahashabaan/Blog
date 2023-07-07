const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
    cb(null, '/uploads/images/')
    },
    filename: function(req, file, cb){
    cb(null, Date.now() +'-'+ file.originalname)
    }
})

const fileFilter = function(req, file, cb){
    const type = file.mimetype.split('/')[0];
    if (type !== 'image'){
        return cb(new Error('can upload only images'), false);
    }
   cb(null, true);
}
module.exports = multer({storage, fileFilter})