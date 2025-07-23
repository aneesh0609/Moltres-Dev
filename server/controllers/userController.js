import userModel from "../models/authModel.js";


export const getUser = async (req,res) => 
{
      
     const{userId} = req.body 

     
     try {

      const user = await userModel.findById(userId) ;

     if(!user)
     {
      return res.json({success: false , message: "user not found"})
     }

     res.json({success: true , userData : {
        email: user.email,
        isVerified : user.isVerified
     }})

     } catch (error) {
         return res.json({success: false , message: "Internal server error"});
     }

}