
import express from 'express'
import { getMessage, sendMeMessage } from '../controllers/messageController.js';


const messageRouter = express.Router();

messageRouter.post('/message' , sendMeMessage); 
messageRouter.get('/getmessage' , getMessage); 

export default messageRouter ;



