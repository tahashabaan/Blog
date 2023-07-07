const jwt = require('jsonwebtoken');

module.exports=async (req,res, next) => {
  const auth = req.get('Authorization');
  const token = auth.split('/')[1];
  
  try{
   const decodedToken = await jwt.verify(token, 'mySecretKey123');
   if(!decodedToken)  throw new Error('Invalid Token');
    req.userId = decodedToken.userId;
  }catch(err){
    res.status(400).json({ message, error:err });
  }
  next();
}
