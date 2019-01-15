var mongoose=require("../mongooseConnectable/mongoose");
var UserLoginHistorySchema=mongoose.Schema(
    {
        LoginName:String,
        LoginTime:Date
    })
    var UserLoginHistoryModel=mongoose.model("UserLoginHistories",UserLoginHistorySchema);
    module.exports=UserLoginHistoryModel;