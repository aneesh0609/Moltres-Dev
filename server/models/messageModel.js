import mongoose, { Schema } from "mongoose";


const MessageSchema = new mongoose.Schema({

name : {
  type : String ,
  require : true 
},

email : {
  type : String ,
  require : true 
},

text :{
  type : String ,
  require : true ,
  trim: true,
  maxlength: 1000 
}

})


const textModel = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default textModel

