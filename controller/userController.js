const User = require('../model/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
 const newUser = new User({
   username: req.body.username,
   password: req.body.password,
   email: req.body.email,
   phone: req.body.phone,
   created_at: req.body.created_at,
   updated_at: req.body.updated_at,
   role: "user"

 });
 newUser.save((error,data)=> {
   if(error) {
     res.status(200).send({message: "new user creation failed.", error: error});

   }else{
     res.status(200).send({message: "user created successfully"});
   }
 })
};
const updateUser = (req, res) => {
  const UserID = req.params.UserID;
  User.updateOne( UserID ? {_id : req.params.UserID} : {_id : req.body.UserID},
      {
          username: req.body.username,
          phone: req.body.phone,
          email: req.body.email,
          role: req.body.role
      }
       ,function (err, data){
     if(err){
      res.status(200).send({message : "something went wrong. error: ", error: err});
     }
     else{
      res.status(200).send(data);
     }
    

  })
}
const deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "User Deleted",
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: "An error occurred",
        error: error,
      });
    });
};

const login = (req, res, next) => {
  // var username = req.body.username;
  // var password = req.body.password;

  User.findOne({ userName: req.body.username })
    .exec()
    .then((user) => {
      // console.log(user.password);
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth Failed",
        });
      } else {
        console.log(req.body.password, user.password);
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            console.log(err);
            return res.status(401).json({
              message: "Auth Failed",
            });
          } else if (result) {
            // console.log(result);
            const token = jwt.sign(
              {
                email: user.emailId,
                userId: user._id,
              },

              process.env.JWT_KEY,
              {
                expiresIn: "8h",
              }
            );
            // console.log(jwt.verify(token, process.env.JWT_KEY));
            console.log(token);
            return res.status(200).json({
              message: "Auth Successful",
              token: token,
            });
          } else {
            return res.status(401).json({
              message: "Auth Failed",
            });
          }
        });
      }
    })
    .catch((error) => {
      console.log("error");
      res.status(500).json({
        message: "an error occurred",
        error: error,
      });
    });
};

module.exports = { createUser, login, updateUser, deleteUser };


