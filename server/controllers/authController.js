import bcrypt from 'bcryptjs' ;
import jwt from 'jsonwebtoken' ;
import userModel from '../models/authModel.js';
import transporter from '../config/nodemailer.js';

export const register = async (req,res) => 
{
      const{name,email,password} = req.body ;

      if(!name || !email || !password)
      {
        return res.json({success: false , message: "fill up all the fields"}) ;
      }

      try {
        
          const existingUser = await userModel.findOne({email}) ;   

          if(existingUser)
          {
            return res.json({success: false , message: "user Already registered " });
          }


          const hashedPassword = await bcrypt.hash(password,10);

          const user =  new userModel({name,email,password: hashedPassword});

          await user.save();

          const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn : '7d'}) ;

          res.cookie('token', token, {
            httpOnly: true ,
            secure: process.env.NODE_ENV === 'production',
            sameSite:   process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 
          })


          // SMTP MAILING FEATURE .. SENDING EMAIL TO THE USER

         const mailOption = {
          from: process.env.SENDER_EMAIL,
          to: email,
          subject: 'WELCOME TO CODEMEW ',
          text: `Welcome to CodeMew . Your account has been created with email id : ${email} ` 
         }

            await transporter.sendMail(mailOption);

         return res.status(200).json({success: true , message: "user registered successfuly"})

      } catch (error) {
  console.error("Register Error:", error.message || error);
  return res.status(500).json({ success: false, message: "Internal server error" });
}

}



export const login = async (req,res) =>
{
       const{email,password} = req.body ;
 
    if(!email || !password)
    {
      return res.status(400).json({success: false , message: "user not exist"})
    }

    try {
      
     const user = await userModel.findOne({email});

     if(!user)
     {
       return res.status(400).json({success: false , message: "invalid email or password"})
     }
  
      const compPassw =   await bcrypt.compare(password , user.password ) ;

      if(!compPassw)
      {
        return res.status(400).json({success: false , message : "invalid email and password" }) ;
      }

      const token =    jwt.sign({id: user._id} , process.env.JWT_SECRET, {expiresIn: '7d'}) ;

      res.cookie('token', token , {
        httpOnly: true ,
            secure: process.env.NODE_ENV === 'production',
            sameSite:   process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 
      })

      return res.status(200).json({success: true , message: "user login successfully " }) ;


    } catch (error) {
      return res.json({success : true , message : " Internal server error"})
    }


}


export const logout = async (req,res) =>
{
    try {
      
     res.clearCookie('token',{
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
       sameSite:   process.env.NODE_ENV === 'production' ? 'none' : 'strict'
     });
 
      return res.status(200).json({success: true , message: "user logged out successfully" });

    } catch (error) {
      return res.json({success: false , message: "internal server error"})
    }
}


export const sendOtp = async (req,res) => {

  
  
    try {
         const{userId} = req.body;
      
       const user = await userModel.findById(userId);

       if(!user)
       {
          return res.json({success: false , message: "user is not Authorized"})
       }

       const otp = String(Math.floor( 100000 + Math.random() * 9000000));
        
       user.verifyOtp = otp ;
       user.verifyOtpExpireAt = Date.new() + 24 * 60 * 60 * 1000 ;
   
       await user.save();


       const mailOption = {
        from: process.env.SENDER_EMAIL,
        to: user.email,
        subject: "Email Verification",
        text: `Your OTP verification code is: ${otp}`
       }
   
       await transporter.sendMail(mailOption);

       return res,json({success: true , message: "Verification Otp has been sent to your email"});

    } catch (error) {
      return res.json({success: false , message: "INTERNAL SERVER ERROR"  })
    }


}
