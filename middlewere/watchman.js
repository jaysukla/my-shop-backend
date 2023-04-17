var jwt = require('jsonwebtoken');
const watchman =(req,res,next)=>{
    const token = req.headers.authorization;
    const rtoken=req.headers.rtoken;
console.log(token,rtoken)
    jwt.verify(token, 'hehe', function(err, decoded) {
       
if(err){
    jwt.verify(rtoken, 'hahe', function(err, decoded){
        if(err){
            res.send({"msg":"Login please "})
        }else{
            next()
        }
    });

} else{
    
    next()
}

      });
}


module.exports={watchman}



