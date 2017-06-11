var info =require("./../model/SignupModel");

module.exports=function(req,res,next){
	info.findOne({email:req.body.email},function(err,data){
		if(err) throw err;
			data.comparePassword(req.body.password,function(err,match){
				if(err) throw err;
				if(match){
					res.send("user exist");
				}else{
					res.send("user doesn't exist");
				}
				
			})
		
	})
}