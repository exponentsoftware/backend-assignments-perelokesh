const express = require('express');

const router= express.Router();
const userController =require('../controller/userController');

const auth = require('../middleware/auth');

//user signup
router.post("/user/signup", userController.createUser);

//user login
router.post("/user/login", userController.login);
//user update
router.put("/user/update",userController.updateUser);
// //user delete
 router.delete("/user/:userId", auth, userController.deleteUser);

module.exports = router;