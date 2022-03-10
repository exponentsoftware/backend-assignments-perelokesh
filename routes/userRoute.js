const express = require('express');

const router= express.Router();
const userController =require('../controller/userController');


//user signup
router.post("/user/signup", userController.createUser);

//user login
router.post("/user/login", userController.login);

// //user delete
// router.delete("/user/:userId", checkAuth, userController.deleteUser);

module.exports = router;