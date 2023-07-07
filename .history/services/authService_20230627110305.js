const User = require('../models/userModel')
exports.signUp = async(req, res, next) => {

    const { title, email, password } = req.body;

    // Create a new user document
   
  
    // Save the new user to the database
    User.create((err, savedUser) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error creating user' });
      } else {
        return res.status(201).json({ user: savedUser });
      }
    });
  });
}