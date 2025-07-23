import express from 'express'
import userAuth from '../middleware/userAuth.js';
import { getUser } from '../controllers/userController.js';


const userRoute = express.Router() ;


userRoute.get('/get-user', userAuth , getUser) ;


export default userRoute ;