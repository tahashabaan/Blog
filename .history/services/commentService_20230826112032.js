const Comment = require('../models/comment');

// @permission should authorizated
exports.creatService =a (req, res, next) => {
    // userId
    const userId =  user._id;
    const postId = await Post.findOne({userId})
    req.body.userId = userId;
}
