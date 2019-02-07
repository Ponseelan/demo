var userModel = require("../Model/UserModel");
var encryptionController = require('../Controller/EncryptionController');
var AuthenticateUserController = {};
AuthenticateUserController.Authenticate = function (LoginName, Password, callback) {
    userModel.findOne({ "LoginName": LoginName }, function (err, data) {
        if (err) {
            callback(false, err);
        }
        else if (data == null) {
            callback(false, "No records Found");
        }
        else {
            callback(encryptionController.Compare(Password, data.Password), data);
        }
    })
}
module.exports = AuthenticateUserController;
