const jwt = require('json-web-token');

module.exports=async (req,res, next) => {
  const token = req.get('Authorization').split('/')[1];
  let decodedToken;

  try{

  }catch(err){
    res.status(200).json({ message: 'user is loggedIn', token });
  }
}
