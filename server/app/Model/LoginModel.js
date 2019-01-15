var mongoose=require("../mongooseConnectable/mongoose");
var loginSchema=mongoose.Schema(
    {
        LoginName:String,
        Password:String
    });
    var Login=mongoose.model("Login",loginSchema);
    module.exports=Login;