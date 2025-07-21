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


export const sendOtp = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User is not authorized" });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000)); // 6-digit OTP

    user.verifyOtp = otp;
    user.verifyOtpExpireAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // expires in 24 hours

    await user.save();

    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Email Verification - CodeMew",
      text: `Hi ${user.name},\n\nYour OTP verification code is: ${otp}\nIt will expire in 24 hours.\n\nThank you,\nTeam CodeMew`
    };

    console.log({
  emailTo: user.email,
  otp,
  otpExpire: user.verifyOtpExpireAt,
});


    await transporter.sendMail(mailOption);

    return res.status(200).json({ success: true, message: "Verification OTP has been sent to your email." });

  } catch (error) {
    console.error("OTP Send Error:", error.message);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};



  export const verifyEmail = async (req,res) => {

          const{userId, otp} = req.body ;

        if(!userId || !otp)
        {
          return res.json({success: false , message: "Missing Details"})
        }
        
      
      try {
        
      const user = await userModel.findById(userId)

      if(!user)
      {
        return res.json({success: false , message: "user not authorized"})
      }

    if (!user.verifyOtp || user.verifyOtp !== otp) {
  return res.json({ success: false, message: "Invalid Otp" });
}

    
      if(user.verifyOtpExpireAt < Date.now())
        {
          return res.json({
           success: false ,
           message: "Otp Expired"
          })
        } 


      user.isVerified = true ;
      user.verifyOtp = '';
      user.verifyOtpExpireAt = 0 ;
      
      await user.save();

      return res.json({success: true , message: "email successfully verified"});

      } catch (error) {
         return res.json({success: false , message: "Internal Server Error"});
      }
  }