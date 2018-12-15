var mongoose=require("mongoose");
var connection=require("../config.json");
mongoose.connect(connection.ConnectionString,{useNewUrlParser: true});
module.exports=mongoose;