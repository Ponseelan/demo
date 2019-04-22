var express = require("express");
var multer=require('multer');
var router = express.Router();
var userController = require("../Controller/UserController");
var LoginController = require("../Controller/LoginController");
var jwtController = require("../Controller/JWTController");
var upload=require('../Controller/MulterController');
router.use(function (req, res, next) {
    next();
})
router.get("/users", function (req, res) {
    res.send("firstUser");
})
router.post("/createUser",upload.single('userPhoto'), function (req, res) {
    var user = userController.FormUserEntity(req);
    userController.Create(req,user, res);
})

router.post("/Login", function (req, res) {
    LoginController.LoginUser(req.body, res);
})
router.post('/validatejwt', function (req, res) {
    jwtController.Validatetoken(req, res);
})
router.get("/GetAllUsers", function (req, res) {
    userController.GetAllActiveUsers(res);
})
router.get("/", function (req, res) {
    res.end("normal");
})
router.post("/GetSingleUserById", function (req, res) {
    userController.GetSingleUserById(req,res);
})
module.exports = router;