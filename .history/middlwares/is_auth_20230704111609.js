const jwt = require('jsonwebtoken');

module.exports=async (req,res, next) => {
  const auth = req.get('Authorization');
  const token = auth.split('/')[1];
  console.log(token);
  
  try{
   const decodedToken = await jwt.verify(token, 'mySecretKey123');
f (!decodedToken)  throw new Error('Invalid token')
  }catch(err){
    res.status(500).json({ message: 'something went wrong', error:err });
  }
  // next();
}