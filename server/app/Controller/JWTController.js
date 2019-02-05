var jwtController={};
var jwttoken=require("jsonwebtoken");
jwtController.Validatetoken=function(req,res)
{
    var result=jwttoken.verify(req.body.token,"secret",function(errors,data)
    {
        if(errors)
        {
            var resultJson='{"status":false,"Message":"'+errors.message+'"}';
        res.end(resultJson);
        }
        else
        {
        var result='{status:true,Message:"Token Authentication Successfull"}';
        res.end(result);
        }
    });  
    res.end("chekc");
}
module.exports=jwtController;