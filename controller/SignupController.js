var info =require("./../model/SignupModel");

module.exports=function(req,res){
	var temp_info= new info({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		email:req.body.email,
		password:req.body.password
	})

		info.find({email:req.body.email},function(err,data){
			if(data.length){
				res.send({status:true})
			}else{
				temp_info.save(function(err){
					if(err){
						res.send(err)
					}else{
						res.send({status:false})
					}
					
				})
			}
		})
	
}