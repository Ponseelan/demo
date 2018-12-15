var mongoose=require("../mongooseConnectable/mongoose");
var userSchema=mongoose.Schema(
    {
        FirstName:String,
        LastName:String,
        IsActive:Boolean,
        LoginName:String,
        Password:String
    })
    var user=mongoose.model("users",userSchema);
module.exports=user;