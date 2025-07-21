import express from 'express' ;
import { login, logout, register, sendOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';




const Route = express.Router();

Route.get('/register', register) ;
Route.post('/login' , login);
Route.post('/logout', logout);
Route.post('/sent-otp',userAuth,sendOtp);
Route.post('/verifyEmail',userAuth,verifyEmail);

export default Route ;