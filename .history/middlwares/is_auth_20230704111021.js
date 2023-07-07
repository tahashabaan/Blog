const jwt = require('jsonwebtoken');

module.exports=async (req,res, next) => {
  const auth = req.get('Authorization');
  const token = auth.split('/')[1];
  console.log(token);
  
  try{
   const decodedToken = await jwt.verify(token, 'mySecretKey123');
   if(!decodedToken) 
     return res.status(422).json({ message: 'something went wrong' });
// as key
    req.userId=decodedToken.userId
  }catch(err){
    res.status(500).json({ message: 'something went wrong', error:err });
  }
  next();
}