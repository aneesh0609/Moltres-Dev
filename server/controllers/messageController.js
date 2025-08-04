import textModel from "../models/messageModel.js";



export const sendMeMessage = async (req,res) => {

  const{name,email,text} = req.body
  
  try {
    
    if(!name || !email || !text) 
    {
      return res.json({success : false , message: "Missing fields"})
    }

    const message = await new textModel({name,email,text});

   await message.save()

   return res.status(200).json({success: true , message : "message sent"}) ;


  } catch (error) {
    return res.status(500).json({success: false , message: "internal server error MB"})
  }

}