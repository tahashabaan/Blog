const jwt = require('json-web-token');

module.exports=async (req,res, next) => {
  const token = req.get('Authorization').split('/')[1];
  
  try{
   const decodedToken = await jwt.verify(token, 'mySecretKey123');
   if(!decodedToken) 
     return res.status(422).json({ message: 'something went wrong' });

    user


  }catch(err){
    res.status(500).json({ message: 'something went wrong', error:err });
  }
}
