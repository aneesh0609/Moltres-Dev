
import express from 'express'
import { sendMeMessage } from '../controllers/messageController.js';


const messageRouter = express.Router();

messageRouter.post('/message' , sendMeMessage); 

export default messageRouter ;



