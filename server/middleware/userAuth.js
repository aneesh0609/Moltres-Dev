
import jwt from 'jsonwebtoken';


 const userAuth = async (req,res,next) => 
{ 

  try {
     const{token} = req.cookies ;
  
    if(!token)
    {
      return res.status(400).json({success: false , message: "Not Authenticated Please login "})
    }

    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
   
    if (!req.body) {
      req.body = {};
    }

    if(tokenDecoded.id)
    {
      req.body.userId = tokenDecoded.id 
    }
    else{
      return res.status(400).json({success: false , message: "user not Authenticated"})
    }

    next();


  } catch (error) {
    return res.status(400).json({success: false , message: error.message });
  }
  


}

export default userAuth;
