import jwt from "jsonwebtoken"

const ensureAuthenticated = (req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403)
          .json({message:"Unauthorized ,JWT token is requested"});
    }
    try {
        const decode = jwt.verify(auth,"Secert-key");
        req.user = decode;
        next();
    } catch (error) {
        return res.status(403)
           .json({message:"Unauthorized,JWT tokenss wrong or expired"});
    }
}

export default ensureAuthenticated;