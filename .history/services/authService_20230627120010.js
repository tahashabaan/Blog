const bcrypt = require('bcryptjs');

const User = require('../models/userModel')
exports.signUp = async(req, res, next) => {

    const { name, email, password } = req.body;
    // check if email founded or not
     const isEmailFounded = await User.findOne({email});
     if(isEmailFounded){
        return res.status(404).json({ message: 'user signUp aleerdy', user:isEmailFounded});
     }

    // Create a new user document
    // Save the new user to the database
    User.create(req.body, (err, savedUser) => {
      if (err) {
        console.error(err);
        return res.status(422).json({ message: 'Error creating user', error:err });
      } else {
        return res.status(201).json({message:'user creating sucessfuly', user: savedUser });
      }
    });

}

exports.signUp = async(req, res, next) => {

    const { name, email, password, confirmPassword } = req.body;
    // check if email founded or not
     const isEmailFounded = await User.findOne({email});
     if(isEmailFounded){
        return res.status(404).json({ message: 'user signUp aleerdy', user:isEmailFounded});
     }
     // check if password equal confirm password
     if(password !== confirmPassword)  
       return res.status(403).json({message:'password not matched '})
     //genetate salt
     const salt = await bcrypt.genSalt(10);
     // encrypt password
    const hashPassword = await bcrypt.hash(password, salt);
    //update password in req.body
    req.body.password = hashPassword;
    // Create a new user document  && Save the new user to the database
    User.create(req.body, (err, savedUser) => {
      if (err) {
        console.error(err);
        return res.status(422).json({ message: 'Error creating user', error:err });
      } else {
        return res.status(201).json({message:'user creating sucessfuly', user: savedUser });
      }
    });

}


exports.signIn = async(req, res, next) => {

    const { email, password } = req.body;
    // check if email founded or not
     const isEmailFounded = await User.findOne({email});
     if(!isEmailFounded){
        return res.status(404).json({ message: 'user Not found... signUp first', user:isEmailFounded});
     }
     // compare password wi
    
  
   
}