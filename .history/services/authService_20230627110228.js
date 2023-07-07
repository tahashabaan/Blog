const userModel = require('../models/userModel')
exports.signUp = async(req, res, next) => {
    userModel
    .create(req.body)
   .then((user) => {

    })

    const { title, email, password } = req.body;

    // Create a new user document
    const newUser = new User({
      title,
      email,
      password
    });
  
    // Save the new user to the database
    newUser.save((err, savedUser) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error creating user' });
      } else {
        return res.status(201).json({ user: savedUser });
      }
    });
  });
}