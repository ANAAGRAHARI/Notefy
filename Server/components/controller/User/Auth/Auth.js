import jwt from "jsonwebtoken"

const accessSecret = process.env.ACCESS_TOKEN_SECRET


export const auth = (req,res,next)=>{
   try{
    console.log(accessSecret)
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    const decode = jwt.verify(token,accessSecret)
    console.log(decode)
    next()
   }
   catch(error){
    if(error.name=="TokenExpiredError"){
        res.status(400).json({
            message:"Token Expired!",
        })
    }else{
        res.json({
            message:"Auth failed "
        })
    }
   }
}

