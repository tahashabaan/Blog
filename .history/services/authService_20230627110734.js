const User = require('../models/userModel')
exports.signUp = async(req, res, next) => {

    const { title, email, password } = req.body;
    // check if email founded or not
     const isEmailFounded = await User.findOne({email});
     if(isEmailFounded){
        return res.status(404).json({ message: 'user si', error:err });
     }
    // Create a new user document
    // Save the new user to the database
    User.create(req.body, (err, savedUser) => {
      if (err) {
        console.error(err);
        return res.status(422).json({ message: 'Error creating user', error:err });
      } else {
        return res.status(201).json({message:'user added sucessfuly', user: savedUser });
      }
    });

}